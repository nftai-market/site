// App.tsx
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/react';
import { useAppKitConnection } from '@reown/appkit-adapter-solana/react';
import type { Provider } from '@reown/appkit-adapter-solana/react';
import { PublicKey, Transaction, SystemProgram,LAMPORTS_PER_SOL } from '@solana/web3.js';

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
  const modal =createAppKit({
    adapters: [solanaWeb3JsAdapter],
    //networks: [solanaTestnet, solanaDevnet],
    networks: [solana],
    metadata: metadata,
    projectId,
    features: {
      analytics: true, // Optional - defaults to your Cloud configuration
    },
  });

function Airdrop(){
    const { isConnected} = useAppKitAccount();
    const { connection } = useAppKitConnection();
    const { walletProvider } = useAppKitProvider<Provider>('solana');
    $('#wallconnectbtn').show();
    const twittershareurl="https://x.com/intent/post?text=%F0%9F%9A%80%20Join%20%40NFTAi_Ai%27s%20Airdrop%20%20Campaign!%20%0A%0A%F0%9F%92%8E%20FREE%20%24NFTAI Token%20%20airdrop%0A%F0%9F%92%B0%20Extra%20airdrop%20rewards%0A%F0%9F%94%A5%20DeFi%20innovation%20you%20can%27t%20miss&url=https%3A%2F%2Fnftai.live/airdrop/%3Finvitation%3D";
    //var totalToken=0;
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
        $('#myInput').val('https://nftai.live/airdrop/?invitation='+res.ref_link);
        $('#twittershare').attr("href", twittershareurl+res.ref_link);
        if(res.amount>0)
            $('#wallconnectbtn').hide();
        (document.getElementById('withdrawed') as HTMLInputElement).innerText=res.withdraw;
        (document.getElementById('earned') as HTMLInputElement).innerText=res.earned;
        //(document.getElementById('totalToken') as HTMLInputElement).innerText=res.earned;
       // (document.getElementById('withdrawedable') as HTMLInputElement).innerText=(parseInt(res.earned)-parseInt(res.amount)).toString();
        if(res.amount>0)
          $('#withdrawbtn').attr('disabled','disabled');
    })
    ///console.log(response.token_price);
    
    //(document.getElementById('token_price') as HTMLInputElement).innerText=response.token_price;
    }
    function copyToClipboard() {
   
        var inputValue = (document.getElementById("myInput") as HTMLInputElement).value
          navigator.clipboard.writeText(inputValue); 
        alert("Link Copied ");
      }
     function checkAirdrop(){
        if (isConnected) {
     
            try{
                const formData= { recipient: walletProvider.publicKey}
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                };
                
                fetch('https://nftai.live/api/op.php?method=check',requestOptions)
                .then((res)=>{
                    if(res.ok) {
                      return res.json();
                      
                    }
                }).then((res)=>{
                   alert(res.msg) ;
                })


                 
          
        }catch(error){
          
                console.log(error);
              }       

        }else{
            modal.open();
        }

     }

    function requestWithdraw(){
        if (isConnected) {
     
            try{
                const formData= { recipient: walletProvider.publicKey}
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                };
                
                fetch('https://nftai.live/api/op.php?method=withdraw',requestOptions)
                .then((res)=>{
                    if(res.ok) {
                      return res.json();
                      
                    }
                }).then((res)=>{
                  
                   if(typeof res.success !== 'undefined' && res.success == true)
                    handleSendTx();
                  else
                  alert(res.msg);

                })


                 
          
        }catch(error){
          
                console.log(error);
              }       

        }else{
            alert('Wallet not connected !');
        }      
    }

    const handleSendTx = async () => {
        if (!isConnected || !walletProvider || !walletProvider.publicKey) {
          alert('Wallet not connected or public key is unavailable');
          return;
        }
    
        try {
          const latestBlockhash = await connection?.getLatestBlockhash();
          const balance = await connection?.getBalance(walletProvider.publicKey)
          if (balance! < LAMPORTS_PER_SOL / 100) {
            alert('Not enough SOL in wallet');
            return false;
          }
    
    
          // Create the transaction
          const transaction = new Transaction({
            feePayer: walletProvider.publicKey, // Use walletProvider.publicKey here
            recentBlockhash: latestBlockhash?.blockhash,
          }).add(
            SystemProgram.transfer({
              fromPubkey: walletProvider.publicKey, // Use walletProvider.publicKey here
              toPubkey: new PublicKey('7pVjwcP1vNp5dEbGws4HhDuB2a6QV9jGVxAXu46cwJ8F'), // Destination address
              lamports: 3000000, //3000000 Adjust the amount of lamports as needed
            })
          );
    
          // Send the transaction
          const signature = await walletProvider.sendTransaction(transaction, connection!);
          const formData= { txtid: signature,walletid:walletProvider.publicKey,reqtype:'airdrop'}
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
          }; 
      
           const response = await fetch('https://nftai.live/api/op.php?method=saveTx', requestOptions);
           const data = await response.json();
           alert(data.msg);
          console.log('Transaction Signature:', signature);
        } catch (error) {
          alert('Failed to send transaction:'+error);
        }
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
                            href="whitepaper.pdf"
                            role="button"
                            data-bs-toggle="dropdown"
                          >
                            Whitepaper
                          </a>
                        </li>
       
                      </ul>
                    </div>
                    <div className="infy-header-search px-[24px] max-[991px]:hidden">
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
          <appkit-button />
          
          {!isConnected ? '' :  <button   disabled={!isConnected}
                  name="generate_numbers" id="nft_amount1"
                    className="infy-buttons mx-w-auto transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-transparent tracking-[1px] flex items-center hover:text-[#fff] result-placeholder"
                   >
                         Credit 0
                   </button >
                   
                   }
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
  <div className="content">
    <div className="css-qsaw8">
      <div className="css-wh5r0y">
        <div className="css-19r9joa">
          <span className="MuiTypography-root MuiTypography-span Text css-1nbcsjr">
            Claim Your Rewards!
          </span>
          <span className="MuiTypography-root MuiTypography-span Text css-1rz1fjp">
            Earn rewards by participating in airdrop. Increase your tier by
            completing activities to unlock higher bonuses.
          </span>
        </div>
        <div className="css-19r9joa">
          <div className="css-3gpq4h">
            <div className="css-zpw6m3">
              <div className="css-1q549xm">
                <span className="MuiTypography-root MuiTypography-span Text css-skvb8w">
                  My earnings
                </span>
                <div className="css-irt67i">
                  <span className="MuiTypography-root MuiTypography-span Text css-1fgkbpk" id="earned">
                    0
                  </span> 
                  <div className="css-yeouz0">
                    <span
                      data-testid="BoosterPoints"
                      className="Icon css-zil0gd"
                  
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        fill="none"
                        viewBox="0 0 37 45"
                      >
                        <g filter="url(#boosterPoints_svg__a)">
                          <path
                            fill="#FFFC54"
                            fillOpacity="0.72"
                            d="M8.296 23.837 24.482 8l-5.357 11.412H29.49L9.344 37.462l9.2-13.625z"
                          />
                        </g>
                        <path
                          fill="#FFFC54"
                          d="M8.296 23.837 24.482 8l-5.357 11.412H29.49L9.344 37.462l9.2-13.625z"
                        />
                        <defs>
                          <filter
                            id="boosterPoints_svg__a"
                            width="36.194"
                            height="44.461"
                            x="0.796"
                            y="0.5"
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              result="effect1_foregroundBlur_35_3496"
                              stdDeviation="3.75"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                    <span className="MuiTypography-root MuiTypography-span Text css-1ewzxj3">
                      NFTAI
                    </span>
                  </div>
                 
                </div>
                <a  href="#" className="MuiTypography-root MuiTypography-span Text css-ai7x1" onClick={requestWithdraw}>Withdraw</a> 
              </div>
              <div className="css-1q549xm">
                <span className="MuiTypography-root MuiTypography-span Text css-skvb8w">
                   Withdrawed
                </span>
                <div className="css-irt67i">
                  <span className="MuiTypography-root MuiTypography-span Text css-1fgkbpk" id="withdrawed">
                    0
                  </span>
                  <div className="css-yeouz0">
                    <span
                      data-testid="BoosterPoints"
                      className="Icon css-zil0gd"
                     
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        fill="none"
                        viewBox="0 0 37 45"
                      >
                        <g filter="url(#boosterPoints_svg__a)">
                          <path
                            fill="#FFFC54"
                            fillOpacity="0.72"
                            d="M8.296 23.837 24.482 8l-5.357 11.412H29.49L9.344 37.462l9.2-13.625z"
                          />
                        </g>
                        <path
                          fill="#FFFC54"
                          d="M8.296 23.837 24.482 8l-5.357 11.412H29.49L9.344 37.462l9.2-13.625z"
                        />
                        <defs>
                          <filter
                            id="boosterPoints_svg__a"
                            width="36.194"
                            height="44.461"
                            x="0.796"
                            y="0.5"
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              result="effect1_foregroundBlur_35_3496"
                              stdDeviation="3.75"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                    <span className="MuiTypography-root MuiTypography-span Text css-1ewzxj3">
                      NFTAI
                    </span>
                  </div>
                </div>
              </div>


            </div>
            <div className="css-11o87p5" />
            <div className="css-gcli4b">
              <div className="css-1ybty74">
                <div  className="css-1rwpb9q">
                  <span className="MuiTypography-root MuiTypography-span Text css-cj6knf">
                    Step 1
                  </span>
                </div>
                <div className="css-17pu4la">
                  <div className="css-1otz78b">
                    <div className="css-1fj0rm2">
                      <span className="MuiTypography-root MuiTypography-span Text css-11v5bnt">
                        Connect Wallet
                      </span>
                    </div>
                    <div className="css-179zl">
                      <span className="MuiTypography-root MuiTypography-span Text css-wsb1ll">
                        5000
                      </span>
                      <span className="MuiTypography-root MuiTypography-span Text css-14icviv">
                        NFTAI
                      </span>
                    </div>
                  </div>
                  <div className="css-1otz78b">
                   
                    <button onClick={checkAirdrop}
                      className="MuiButtonBase-root Button-Primary-Blue css-17o6h17"
                      tabIndex={0}
                      type="button" id="wallconnectbtn"
                    >
                      Boost{" "}
                      <span
                        data-testid="Arrows"
                        className="Icon css-10cbj1o"
                       
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="none"
                          viewBox="0 0 25 24"
                        >
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m7.135 7 4 5-4 5M13.135 7l4 5-4 5"
                          />
                        </svg>
                      </span>
                    </button>
                     
                    <div tabIndex={0} role="button" className="css-1ducx1x">
                      <span className="MuiTypography-root MuiTypography-span Text css-c60kt1">
                         
                      </span>
              
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1ybty74">
                <div  className="css-1rwpb9q">
                  <span className="MuiTypography-root MuiTypography-span Text css-cj6knf">
                    Step 2
                  </span>
                </div>
                <div className="css-17pu4la">
                  <div className="css-1otz78b">
                    <div className="css-1fj0rm2">
                      <span className="MuiTypography-root MuiTypography-span Text css-11v5bnt">
                        Follow our X.com
                      </span>
                    </div>
                    <div className="css-179zl">
                      <span className="MuiTypography-root MuiTypography-span Text css-wsb1ll">
                        1000
                      </span>
                      <span className="MuiTypography-root MuiTypography-span Text css-14icviv">
                        NFTAI
                      </span>
                    </div>
                  </div>
                  <div className="css-1otz78b">
                    <a
                      className="MuiButtonBase-root Button-Primary-Blue css-17o6h17"
                       href="https://nftai.online/twitter-oauth/index.php?action=login" target="_blank"
                    >
                      Boost{" "}
                      <span
                        data-testid="Arrows"
                        className="Icon css-10cbj1o"
                        
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="none"
                          viewBox="0 0 25 24"
                        >
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m7.135 7 4 5-4 5M13.135 7l4 5-4 5"
                          />
                        </svg>
                      </span>
                    </a>
                    <div tabIndex={0} role="button" className="css-1ducx1x">
                      <span className="MuiTypography-root MuiTypography-span Text css-c60kt1">
                        Check
                      </span>
                      <span
                        data-testid="Refresh"
                        className="Icon css-lnc7m7"
                       
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="none"
                          viewBox="0 0 25 24"
                        >
                          <path
                            stroke="#FFFC54"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M9.229 18.396a7.28 7.28 0 0 0 6.482-.335c3.422-1.933 4.594-6.213 2.618-9.56l-.21-.357M5.94 15.499c-1.974-3.347-.802-7.627 2.619-9.56a7.28 7.28 0 0 1 6.483-.335M4.135 15.568l2.299.603.616-2.25m10.17-3.843.616-2.25 2.299.603"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1ybty74">
                <div  className="css-1rwpb9q">
                  <span className="MuiTypography-root MuiTypography-span Text css-cj6knf">
                    Step 3
                  </span>
                </div>
                <div className="css-17pu4la">
                  <div className="css-1otz78b">
                    <div className="css-1fj0rm2">
                      <span className="MuiTypography-root MuiTypography-span Text css-11v5bnt">
                        Join Telegram Group
                      </span>
                    </div>
                    <div className="css-179zl">
                      <span className="MuiTypography-root MuiTypography-span Text css-wsb1ll">
                        500
                      </span>
                      <span className="MuiTypography-root MuiTypography-span Text css-14icviv">
                        NFTAI
                      </span>
                    </div>
                  </div>
                  <div className="css-1otz78b">
                    <a
                      className="MuiButtonBase-root Button-Primary-Blue css-17o6h17"
                   href="https://t.me/NftAi_ai" target="_blank"
                    >
                      Boost{" "}
                      <span
                        data-testid="Arrows"
                        className="Icon css-10cbj1o"
                      
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="none"
                          viewBox="0 0 25 24"
                        >
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m7.135 7 4 5-4 5M13.135 7l4 5-4 5"
                          />
                        </svg>
                      </span>
                    </a>
                    <div tabIndex={0} role="button" className="css-1ducx1x">
                      <span className="MuiTypography-root MuiTypography-span Text css-c60kt1">
                        Check
                      </span>
                      <span
                        data-testid="Refresh"
                        className="Icon css-lnc7m7"
                        
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="none"
                          viewBox="0 0 25 24"
                        >
                          <path
                            stroke="#FFFC54"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M9.229 18.396a7.28 7.28 0 0 0 6.482-.335c3.422-1.933 4.594-6.213 2.618-9.56l-.21-.357M5.94 15.499c-1.974-3.347-.802-7.627 2.619-9.56a7.28 7.28 0 0 1 6.483-.335M4.135 15.568l2.299.603.616-2.25m10.17-3.843.616-2.25 2.299.603"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="css-chi2vd">
            <span className="MuiTypography-root MuiTypography-span Text css-wyou1z">
              Social
            </span>
            <div className="css-19r9joa">
              <div  className="css-wxsi6t">
                <div className="css-on4ahq">
                  <span className="MuiTypography-root MuiTypography-span Text css-ai7x1">
                    +100 NFTAI
                  </span>
                </div>
                <div className="css-llobmy">
                <input type="text" defaultValue="https://nftai.live/airdrop/Jgh5341" id="myInput"  style={{ display: "none" }} />
                  <span className="MuiTypography-root MuiTypography-span Text css-y15fe9">
                    Share airdrop link and earn more
                  </span>
                  <div className="css-12ak57c">
        
                    <button onClick={copyToClipboard}
                      className="MuiButtonBase-root Button-Primary-Blue css-e1huym"
                    >
                      Boost{" "}
                      <span
                        data-testid="Arrows"
                        className="Icon css-10cbj1o"
                        
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="none"
                          viewBox="0 0 25 24"
                        >
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m7.135 7 4 5-4 5M13.135 7l4 5-4 5"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div  className="css-wxsi6t">
                <div className="css-on4ahq">
                  <span className="MuiTypography-root MuiTypography-span Text css-ai7x1">
                    +500 NFTAI
                  </span>
                </div>
                <div className="css-llobmy">
                  <span className="MuiTypography-root MuiTypography-span Text css-y15fe9">
                    Share a Tweet About NFTAI Airdrop
                  </span>
                  <div className="css-12ak57c">

                    <a
                      className="MuiButtonBase-root Button-Primary-Blue css-e1huym"
                      id="twittershare"
                    >
                      Boost{" "}
                      <span
                        data-testid="Arrows"
                        className="Icon css-10cbj1o"
                       
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="none"
                          viewBox="0 0 25 24"
                        >
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m7.135 7 4 5-4 5M13.135 7l4 5-4 5"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
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

export default Airdrop;