// App.tsx
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/react';
//import { useAppKitConnection } from '@reown/appkit-adapter-solana/react';
import type { Provider } from '@reown/appkit-adapter-solana/react';
//import { PublicKey, Transaction, SystemProgram,LAMPORTS_PER_SOL } from '@solana/web3.js';

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
  });
  
  const projectId = '780afae979e34ec1c1b5659dfd64514b';
  // 2. Create a metadata object - optional
  const metadata = {
    name: 'NFTAI',
    description: 'NFTAI ',
    url: 'https://nftai.live', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932'],
  };
  
  // 3. Create modal
  createAppKit({
    adapters: [solanaWeb3JsAdapter],
    //networks: [solanaTestnet, solanaDevnet],
    networks: [solana],
    metadata: metadata,
    projectId,
    features: {
      analytics: true, // Optional - defaults to your Cloud configuration
    },
  });

function Generate(){
    const { isConnected} = useAppKitAccount();
    //const { connection } = useAppKitConnection();
    const { walletProvider } = useAppKitProvider<Provider>('solana');
    if (isConnected) {
      const formData= { recipient: walletProvider.publicKey}
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    };   
     fetch('https://nftai.live/api/op.php?method=getInfo',requestOptions)
    .then((res)=>{
        if(res.ok) {
          return res.json();
          
        }
    }).then((res)=>{
        //console.log(res.token_price);  
   
        (document.getElementById('nft_amount0') as HTMLInputElement).innerText=res.amount+' Credit';
        (document.getElementById('nft_amount1') as HTMLInputElement).innerText=res.amount+' Credit';
        var json=res.nfts;
        var addbox='';
        json.forEach((item:any) => {
          //addbox=addbox+'<div class="w-[33.33%] max-[420px]:w-full px-[12px] infy-width-full "><div class="infy-select-method relative transition-all duration-[0.3s] ease-in-out mb-[25px] py-[30px] px-[10px] bg-[#24232e80] flex flex-col items-center justify-center cursor-pointer hover:bg-[#24232e4d]"><div role="status" class="max-w-sm animate-pulse"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" /><span class="sr-only"><img  src="'+item.nft_url+'" /></span></div></div></div>';
          addbox=addbox+'<div class="min-[768px]:w-[50%] min-[992px]:w-[25%] px-[12px] w-full mb-[24px]" /><img  src="'+item.nft_url+'" /></span></div>';
          
         });

        $('#generatedimages').html(addbox);

    })
    }
 
 const GenNft = async () => {
    if (!isConnected || !walletProvider || !walletProvider.publicKey) {
      alert('Wallet not connected or public key is unavailable');
      return;
    }
var addbox='';
 
const nftcount= (document.getElementById('nftcount') as HTMLInputElement).value;
const model= (document.getElementById('nftmodel') as HTMLInputElement).value;
const txtprompt= (document.getElementById('txtprompt') as HTMLInputElement).value;
if (txtprompt==''){
  alert('Prompt text is required field');
  return false;
}
 var htmlbox='<div className="w-[33.33%] max-[420px]:w-full px-[12px] infy-width-full "><div className="infy-select-method relative transition-all duration-[0.3s] ease-in-out mb-[25px] py-[30px] px-[10px] bg-[#24232e80] flex flex-col items-center justify-center cursor-pointer hover:bg-[#24232e4d]"><div role="status" className="max-w-sm animate-pulse"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" /><span className="sr-only">Loading...</span></div></div></div>';
for(let j=1;j<= parseInt(nftcount);j++){
    addbox=addbox+htmlbox;
}
$('#generatedimages').html(addbox);
const formData= { model: model,nftcount:nftcount,txtprompt:txtprompt,wallet:walletProvider.publicKey}
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
}; 
 //await fetch('https://nftai.online/api/op.php?method=create', requestOptions);
 
 const response = await fetch('https://nftai.online/api/op.php?method=create', requestOptions);
 const data = await response.json();
 //console.log(data.success);
 if(typeof data.success !== 'undefined' && data.success == true){
  alert(data.msg);
  window.location.reload();

 }else
 alert(data.msg);



 
  };


    return (
        <>
 
        <header className="max-[575px]:h-[55px] max-[991px]:h-[75px] h-[82px] relative">
          <div className="infy-header w-full py-[10px] border-b-[1px] border-solid border-[#24232e99] transition-all duration-[0.3s] ease-in-out max-[575px]:p-[0]">
            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
              <div className="w-full flex flex-wrap">
                <div className="w-full px-[12px]">
                  <nav className="min-[992px]:flex-nowrap min-[992px]:flex relative flex flex-wrap justify-between items-center py-[8px]">
                    <a className="py-[5px] mr-[15px]" href="/">
                      <img
                        src="img/logo.png"
                        alt="logo"
                        className="infy-logo relative z-[2] w-[48px] max-[991px]:w-[38px]"
                      />
                    </a>
                    <button
                      className="navbar-toggler min-[992px]:hidden flex leading-[1]"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="ri-menu-2-line text-[22px] text-[#fff]" />
                    </button>
                    <div
                      className="min-[992px]:flex basis-auto hidden grow-[1] items-center"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav flex min-[992px]:flex-row flex flex-col w-full relative z-[3]">
                        <li className="nav-item dropdown ml-[30px] text-[15px] font-Manrope text-[#fff] font-light leading-[26px] tracking-[0.03rem]">
                          <a
                            className="nav-link py-[5px] text-[14px] max-[1199px]:text-[13px] font-Manrope text-[#fff] flex"
                            href="/"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item dropdown ml-[30px] text-[15px] font-Manrope text-[#fff] font-light leading-[26px] tracking-[0.03rem]">
                          <a
                            className="nav-link dropdown-toggle relative py-[5px] text-[14px] max-[1199px]:text-[13px] font-Manrope text-[#fff] flex"
                            href="explore"
                            role="button"
                            data-bs-toggle="dropdown"
                          >
                            Explore
                          </a>
                        </li>
                        <li className="nav-item dropdown ml-[30px] text-[15px] font-Manrope text-[#fff] font-light leading-[26px] tracking-[0.03rem]">
                          <a
                            className="nav-link dropdown-toggle relative py-[5px] text-[14px] max-[1199px]:text-[13px] font-Manrope text-[#fff] flex"
                            href="airdrop"
                            role="button"
                            data-bs-toggle="dropdown"
                          >
                            Airdrop
                          </a>
                        </li>
                        <li className="nav-item dropdown ml-[30px] text-[15px] font-Manrope text-[#fff] font-light leading-[26px] tracking-[0.03rem]">
                          <a
                            className="nav-link dropdown-toggle relative py-[5px] text-[14px] max-[1199px]:text-[13px] font-Manrope text-[#fff] flex"
                            href="https://nftai.gitbook.io/nftai"
                            role="button"
                            data-bs-toggle="dropdown"
                          >
                            Whitepaper
                          </a>
                        </li>
                        {!isConnected ? '' :                             
                        <li className="nav-item dropdown ml-[30px] text-[15px] font-Manrope text-[#fff] font-light leading-[26px] tracking-[0.03rem]">
                          <a
                            className="nav-link dropdown-toggle relative py-[5px] text-[14px] max-[1199px]:text-[13px] font-Manrope text-[#fff] flex"
                            href="generate"
                            role="button"
                            data-bs-toggle="dropdown"
                          >
                            Create
                          </a>
                        </li> 

                          } 

                      </ul>
                    </div>
                    <div className="infy-header-search px-[24px] max-[991px]:hidden nft_amount">
                    {!isConnected ? '' :  <a  href="profile"
                    className="infy-buttons mx-w-auto transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-transparent tracking-[1px] flex items-center hover:text-[#fff] result-placeholder"
                   id="nft_amount0">
                       Credit 0
                   </a >
                   
                   }
                    </div>
                    <div className="infy-header-buttons max-[991px]:hidden">
                    <appkit-button />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="infy-sidebar-overlay w-full h-screen hidden fixed top-0 left-0 z-[17] bg-[#000000b3]" />
        <div
          id="in_mobile_menu"
          className="infy-side-cart infy-mobile-menu w-[300px] max-[480px]:w-[280px] h-full p-[15px] fixed top-0 left-[-300px] bg-[#000] z-[20] border-r-[1px] border-solid border-[#24232e99]"
        >
          <div className="infy-menu-title w-full pb-[16px] mb-[30px] flex flex-wrap justify-between border-b-[2px] border-solid border-[#24232e99]">
            <span className="menu-title text-[18px] font-semibold  text-[#fff] leading-[26px] tracking-[0.02rem]">
              Menu
            </span>
            <button
              type="button"
              className="infy-close relative border-0 text-[30px] leading-[1px] text-[#999] bg-[#000] px-[6px]"
            >
             X
            </button>
          </div>
          <div className="infy-menu-inner flex flex-col justify-between">
          {!isConnected ? '' :  <a  href="profile"
                    className="nft_amount infy-buttons mx-w-auto transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-transparent tracking-[1px] flex items-center hover:text-[#fff] result-placeholder"
                    id="nft_amount1">
                       Credit 0
                   </a >
                   
                   }
          <appkit-button />
            <div className="infy-menu-content">
              <ul>
                <li className="dropdown drop-list relative leading-[28px]">
                  <a
                    href="/"
                    className="dropdown-list p-[10px] block capitalize text-[15px] font-normal border-b-[1px] border-solid border-[#24232e99]"
                  >
                    Home
                  </a>
                </li>
                {!isConnected ? '' :                             
                        <li className="nav-item dropdown ml-[30px] text-[15px] font-Manrope text-[#fff] font-light leading-[26px] tracking-[0.03rem]">
                          <a
                            className="nav-item dropdown ml-[30px] text-[15px] font-Manrope text-[#fff] font-light leading-[26px] tracking-[0.03rem]"
                            href="generate"
                            role="button"
                            data-bs-toggle="dropdown"
                          >
                            Create
                          </a>
                        </li> 
                          
                          }

                <li className="dropdown drop-list relative leading-[28px]">
                  <a
                    href="explore"
                    className="dropdown-list p-[10px] block capitalize text-[15px] font-normal border-b-[1px] border-solid border-[#24232e99]"
                  >
                    Explore
                  </a>
                </li>
                <li className="dropdown drop-list relative leading-[28px]">
                  <a
                    href="airdrop"
                    className="dropdown-list p-[10px] block capitalize text-[15px] font-normal border-b-[1px] border-solid border-[#24232e99]"
                  >
                    Airdrop
                  </a>
                </li>
                <li className="dropdown drop-list relative leading-[28px]">
                  <a
                    href="whitepaper.pdf"
                    className="dropdown-list p-[10px] block capitalize text-[15px] font-normal border-b-[1px] border-solid border-[#24232e99]"
                  >
                    Whitepaper
                  </a>
                </li>
       
              </ul>
            </div>
          </div>
        </div>
        <section className="section-create-new-file pt-[50px] max-[1199px]:pt-[35px] pb-[100px] max-[1199px]:pb-[70px]">
          <div className="relative flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap mb-[-24px]">
              <div
                className="min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px] aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="infy-create-file-side-viwe">
                  <div className="side-viwe-inner p-[30px] bg-[#24232e80]">
                    <label
                      htmlFor="Description"
                      className="sub-heading mb-[15px] inline-block font-Manrope text-[14px] font-semibold leading-[12px] text-[#bbb]"
                    >
                      Text Prompt
                    </label>
                    <div className="infy-create-file-input mb-[25px] flex bg-[#24232e33] items-center">
                      <textarea
                        className="infy-form-control w-full min-h-[150px] h-[150px] px-[10px] py-[7px] block font-Manrope text-[15px] font-light text-[#fff] bg-[#24232e80] border-0 outline-0 tracking-[0.6px]"
                        id="txtprompt"
                        placeholder="Enter desired prompt here"
                        defaultValue={""}
                      />
                    </div>
                    <label
                      htmlFor="Collection"
                      className="sub-heading mb-[15px] inline-block font-Manrope text-[14px] font-semibold leading-[12px] text-[#bbb]"
                    >
                      Choose Model
                    </label>
                    <div className="infy-create-file-input mb-[25px] flex bg-[#24232e33] items-center">
                      <div className="custom-select infy-form-control w-full min-h-[50px] h-[50px] px-[12px] block font-Manrope text-[15px] font-light text-[#fff] bg-[#24232e80] border-0 outline-0 tracking-[0.6px]">
                        <div className="select">
                          <select
                            aria-label="choose-collection"
                            id="nftmodel"
                            className="hide-select"
                          >
                            <option value="ChainGPT">ChainGPT</option>
                            <option value="RealMimic">RealMimic</option>
                            <option value="AnimeVerse">AnimeVerse</option>
                            <option value="VisionaryForge">VisionaryForge</option>
                          </select>
                          <div className="custom-select" style={{ display: "none" }}>
                          VisionaryForge
                          </div>
                          <ul className="select-options">
                            <li rel="ChainGPT">ChainGPT</li>
                            <li rel="RealMimic">RealMimic</li>
                            <li rel="AnimeVerse">AnimeVerse</li>
                            <li rel="VisionaryForge">VisionaryForge</li>
 
                          </ul>
                        </div>
                      </div>
                    </div>
                    <label
                      htmlFor="Collection"
                      className="sub-heading mb-[15px] inline-block font-Manrope text-[14px] font-semibold leading-[12px] text-[#bbb]"
                    >
                      Supply
                    </label>
                    <div className="infy-create-file-input mb-[25px] flex bg-[#24232e33] items-center">
                      <div className="custom-select infy-form-control w-full min-h-[50px] h-[50px] px-[12px] block font-Manrope text-[15px] font-light text-[#fff] bg-[#24232e80] border-0 outline-0 tracking-[0.6px]">
                        <div className="select">
                          <select
                            aria-label="choose-collection"
                            id="nftcount"
                            className="hide-select"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>
                          <div className="custom-select" style={{ display: "none" }}>
                            1
                          </div>
                          <ul className="select-options">
                            <li rel="1">1</li>
                            <li rel="2">2</li>
                            <li rel="3">3</li>
                            <li rel="4">4</li>
                            <li rel="5">5</li>
                            <li rel="6">6</li>
                            <li rel="7">7</li>
                            <li rel="8">8</li>                           
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="infy-create-file-buttons flex">
               

                      {!isConnected ? '' :  <button onClick={GenNft} disabled={!isConnected}
                  name="generate_numbers" id="withdrawbtn"
                    className="infy-buttons mx-w-auto transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-transparent tracking-[1px] flex items-center hover:text-[#fff] result-placeholder"
                  >
                       Create NFT
                   </button >
                   
                   }



                    </div>
                  </div>
                </div>
              </div>
              <div
                className="min-[992px]:w-[66.66%] w-full px-[12px] mb-[24px] aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={1500}
              >
                <div className="infy-create-file p-[30px] bg-[#24232e80]">
                  <h5 className="sub-heading mb-[15px] inline-block font-Manrope text-[14px] font-semibold leading-[12px] text-[#bbb]">
                    Generated Images
                  </h5>
                  <div className="flex flex-wrap method-card mx-[-12px]" id="generatedimages">
                  <div className="w-[33.33%] max-[420px]:w-full px-[12px] infy-width-full ">
  <div className="infy-select-method relative transition-all duration-[0.3s] ease-in-out mb-[25px] py-[30px] px-[10px] bg-[#24232e80] flex flex-col items-center justify-center cursor-pointer hover:bg-[#24232e4d]">
    <div role="status" className="max-w-sm animate-pulse">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
      <span className="sr-only">Loading...</span>
    </div>
  </div>
</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="relative bg-[#24232e33]">
          <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap mb-[-24px] py-[100px] max-[1199px]:py-[70px]">
              <div className="min-[768px]:w-[50%] min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px]">
                <div className="infy-footer-inner">
                  <img src="img/logo.png" alt="logo" className="w-[48px] mb-[20px]" />
                  <p className="mb-[20px] text-[14px] text-[#dbdbdb] leading-[28px]">
                  NFTAI is the first Prompt Artist Platform, which lets you mint your imagination into an AI-Generated NFT. Collectors and enthusiasts can buy/sell the NFT together with the prompt that was used to generate the image.
                  </p>
                  <div className="mx-[-5px] flex">
                  <a
                  href="https://x.com/NFTAi_Ai"
                  className="transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[5px] flex items-center justify-center bg-[#73739c26] hover:bg-[#73739c4d] text-[#fff]"
                >
                  <i className="ri-twitter-fill flex justify-center items-center text-[18px]" />
                </a>
                <a
                  href="#"
                  className="transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[5px] flex items-center justify-center bg-[#73739c26] hover:bg-[#73739c4d] text-[#fff]"
                >
                  <i className="ri-linkedin-fill flex justify-center items-center text-[18px]" />
                </a>
                <a
                  href="https://t.me/NftAi_Ai"
                  className="transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[5px] flex items-center justify-center bg-[#73739c26] hover:bg-[#73739c4d] text-[#fff]"
                >
                  <i className="ri-telegram-fill flex justify-center items-center text-[18px]" />
                </a> 
                <a
                  href="https://t.me/NFTAi_chat"
                  className="transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[5px] flex items-center justify-center bg-[#73739c26] hover:bg-[#73739c4d] text-[#fff]"
                >
                  <i className="ri-telegram-fill flex justify-center items-center text-[18px]" />
                </a>
                  </div>
                </div>
              </div>
              <div className="min-[576px]:w-[50%] min-[992px]:w-[16.67%] w-full px-[12px] mb-[24px] max-[767px]:mt-[12px]">
                <div>
                  <h4 className="font-Manrope text-[18px] font-semibold leading-[1.2] text-[18px] mb-[24px] max-[991px]:mb-[12px]">
                    Useful Links
                  </h4>
                  <ul>
                    <li>
                      <a
                        href="generate"
                        className="transition-all duration-[0.3s] ease-in-out py-[5px] flex text-[14px] leading-[28px] text-[#dbdbdb] hover:text-[#a487f2]"
                      >
                        Create
                      </a>
                    </li>
                    <li>
                      <a
                        href="explore"
                        className="transition-all duration-[0.3s] ease-in-out py-[5px] flex text-[14px] leading-[28px] text-[#dbdbdb] hover:text-[#a487f2]"
                      >
                        Explore
                      </a>
                    </li>
                    <li>
                      <a
                        href="about"
                        className="transition-all duration-[0.3s] ease-in-out py-[5px] flex text-[14px] leading-[28px] text-[#dbdbdb] hover:text-[#a487f2]"
                      >
                        About
                      </a>
                    </li>              
                    <li>
                      <a
                        href="privacy"
                        className="transition-all duration-[0.3s] ease-in-out py-[5px] flex text-[14px] leading-[28px] text-[#dbdbdb] hover:text-[#a487f2]"
                      >
                     Privacy &amp; Terms
                      </a>
                    </li>
                  
               
                  </ul>
                </div>
              </div>
              <div className="min-[576px]:w-[50%] min-[992px]:w-[16.67%] w-full px-[12px] mb-[24px] max-[991px]:mt-[12px]">
                <div>
                  <h4 className="font-Manrope text-[18px] font-semibold leading-[1.2] text-[18px] mb-[24px] max-[991px]:mb-[12px]">
                    Community
                  </h4>
                  <ul>
    
                    <li>
                      <a
                        href="faq"
                        className="transition-all duration-[0.3s] ease-in-out py-[5px] flex text-[14px] leading-[28px] text-[#dbdbdb] hover:text-[#a487f2]"
                      >
                        Faq
                      </a>
                    </li>
             
                  </ul>
                </div>
              </div>
              <div className="min-[768px]:w-[50%] min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px] max-[991px]:mt-[12px]">
                <div>
                  <h4 className="font-Manrope text-[18px] font-semibold leading-[1.2] text-[18px] mb-[24px] max-[991px]:mb-[12px]">
                    Connect with us
                  </h4>
              
                </div>
              </div>
            </div>
          </div>
          <div className="py-[15px] border-t-[1px] border-solid border-[#24232ee6] bg-[#18171f99]">
            <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
              <div className="w-full flex flex-wrap">
                <div className="w-full px-[12px]">
                  <div className="last-footer-copy flex max-[767px]:block justify-between">
                    <div className="max-[767px]:mb-[10px] max-[767px]:flex max-[767px]:justify-center">
                      <p className="text-[14px]">
                        © <span id="copyright_year" /> NFTAI, All rights reserved.
                      </p>
                    </div>
                    <div className="privacy-contact-copy max-[767px]:flex max-[767px]:justify-center">
             
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
      
    )
}

export default Generate;