// App.tsx
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useAppKitAccount } from '@reown/appkit/react';
//import { useAppKitConnection } from '@reown/appkit-adapter-solana/react';
//import type { Provider } from '@reown/appkit-adapter-solana/react';
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

function About(){
    const { isConnected} = useAppKitAccount();
    //const { connection } = useAppKitConnection();
 
 

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
                            About
                          </a>
                        </li>
                        <li className="nav-item dropdown ml-[30px] text-[15px] font-Manrope text-[#fff] font-light leading-[26px] tracking-[0.03rem]">
                          <a
                            className="nav-link dropdown-toggle relative py-[5px] text-[14px] max-[1199px]:text-[13px] font-Manrope text-[#fff] flex"
                            href="airdrop?"
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
       
                      </ul>
                    </div>
                    <div className="infy-header-search px-[24px] max-[991px]:hidden">
                    {!isConnected ? '' :  <a  href="profile"
                    className="infy-buttons mx-w-auto transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-transparent tracking-[1px] flex items-center hover:text-[#fff] result-placeholder"
                  >
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
                  name="generate_numbers" id="withdrawbtn"
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
                    href="airdrop?"
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
        <section className="section-banner bg-[#24232e33] mb-[50px] max-[1199px]:mb-[35px]">
  <div className="container relative flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
    <div
      className="w-full flex flex-wrap aos-init aos-animate"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="w-full px-[12px]">
        <div className="h-[250px] max-[575px]:h-[200px] flex justify-center flex-col items-center text-center" style={{ height: 180 }}>
          <h2 className="text-[32px] font-semibold tracking-[1px] leading-[26px] mb-[15px] max-[1199px]:text-[30px] max-[991px]:text-[28px] max-[767px]:text-[26px] max-[575px]:text-[22px] max-[575px]:mb-[5px]">
           About
          </h2>
          <div className="infy-breadcrumb">
            <h5 className="flex items-center leading-[1.2]">
              <span className="leading-[1.2] text-[20px]">
                <a
                  href="/"
                  className="transition-all duration-[0.3s] ease-in-out text-[14px] text-[#bbb] hover:text-[#fff]"
                >
                  Home
                </a>
              </span>
              <span className="leading-[1.2] text-[20px]">
                <i className="ri-arrow-right-s-line mx-[5px] text-[16px] leading-[16px] text-[#bbb]" />
              </span>
              <span className="leading-[1.2] text-[20px]">
                <a
                  href="faq"
                  className="transition-all duration-[0.3s] ease-in-out text-[14px] text-[#bbb]"
                >
                  About
                </a>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>    
<section className="section-privacy pt-[50px] max-[1199px]:pt-[35px] pb-[100px] max-[1199px]:pb-[70px]">
  <div className="relative flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
    <div
      className="w-full flex flex-wrap aos-init aos-animate"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
      <div className="w-full px-[12px]">
        <div className="infy-privacy p-[30px] bg-[#24232e80]">
        <div className="w-full flex flex-wrap mb-[-24px]">
  <div
    className="min-[1200px]:w-[50%] min-[992px]:w-[58.33%] w-full px-[12px] mb-[24px] aos-init aos-animate"
    data-aos="fade-up"
    data-aos-duration={1500}
  >
    <div className="h-full flex flex-col justify-center">
      <h4 className="mb-[25px] font-Manrope text-[24px] leading-[1.2] font-semibold max-[575px]:text-[20px]">
        Who We Are
      </h4>
      <p className="mb-[15px] text-[#fff] leading-[28px] text-[16px] font-medium">
      NFTAi is a groundbreaking platform that merges artificial intelligence and blockchain technology to redefine the world of digital collectibles. By leveraging cutting-edge AI algorithms, NFTAi enables users to generate unique, high-quality NFTs effortlessly. Whether you're an artist, collector, or investor, our ecosystem provides a seamless and decentralized experience like never before.

      <br />Key Features:
      </p>
      <p className="text-[14px] font-light text-[#dbdbdb] leading-[28px]">
      <ul className="mt-[15px] mb-[16px] pl-[32px] list-disc">
  <li className="text-[#c9c9c9] leading-[28px]">
  AI-Generated NFTs - Create stunning, one-of-a-kind artworks powered by AI.
  </li>
  <li className="text-[#c9c9c9] leading-[28px]">
  Decentralized NFT Marketplace - Trade, buy, and sell AI-powered NFTs securely.
  </li>
  <li className="text-[#c9c9c9] leading-[28px]">
  Multi-Chain Compatibility - Enjoy cross-chain support for better accessibility.
  </li>
  <li className="text-[#c9c9c9] leading-[28px]">
  Exclusive Partnerships - Collaborating with top artists, brands, and institutions.
  </li>
  <li className="text-[#c9c9c9] leading-[28px]">
  Token Utility & Staking - Hold and stake $NFTAi for exclusive rewards.
  </li>
  
</ul>
      </p>


      
    </div>
  </div>
  <div
    className="min-[1200px]:w-[50%] min-[992px]:w-[41.66%] w-full px-[12px] mb-[24px] aos-init aos-animate"
    data-aos="fade-up"
    data-aos-duration={2000}
  >
    <img
      src="img/user1.jpg"
      alt="user pic"
      className="w-full sticky top-[65px]"
    />
  </div>
</div>

 
        </div>
      </div>
    </div>
  </div>
</section>
<section className="section-team  max-[1199px]:pt-[70px] pb-[50px] max-[1199px]:pb-[35px]">
  <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
    <div className="w-full flex flex-wrap mb-[-24px]">
      <div
        className="w-full px-[12px] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <div className="infy-banner w-full mb-[30px] text-center block">
          <h4 className="text-[30px] max-[1199px]:text-[29px] max-[991px]:text-[27px] max-[767px]:text-[26px] max-[575px]:text-[22px] max-[420px]:text-[20px] font-semibold leading-[1.2]">
            Meet Our Team
          </h4>
          <div className="mt-[5px] flex justify-center">
            <p className="font-Manrope text-[14px] font-light text-[#dbdbdb]">
              The value of achievement lies in the achieving.
            </p>
          </div>
        </div>
      </div>
      <div
        className="min-[992px]:w-[25%] min-[421px]:w-[50%] w-full px-[12px] mb-[24px] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration={1700}
      >
        <div className="infy-team transition-all duration-[0.3s] ease-in-out p-[15px] bg-[#24232e80]">
          <img src="img/user3.jpg" alt="team" className="w-full" />
          <div className="mt-[15px] text-center">
            <h5 className="mb-[5px] font-Manrope text-[16px] leading-[1.2] font-normal">
            Luka Kartli
            </h5>
            <p className="mb-[15px] text-[12px] leading-[16px] text-[#dbdbdb]">
            Co-Founder
            </p>
            <div className="flex justify-center">
              <a
                href="javascript:void(0)"
                className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] mx-[1px] flex bg-[#73739c26] text-[#fff] hover:bg-[#73739c4d]"
              >
                <i className="ri-facebook-fill w-[32px] h-[32px] flex justify-center items-center text-[14px]" />
              </a>
              <a
                href="javascript:void(0)"
                className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] mx-[1px] flex bg-[#73739c26] text-[#fff] hover:bg-[#73739c4d]"
              >
                <i className="ri-twitter-fill w-[32px] h-[32px] flex justify-center items-center text-[14px]" />
              </a>
              <a
                href="javascript:void(0)"
                className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] mx-[1px] flex bg-[#73739c26] text-[#fff] hover:bg-[#73739c4d]"
              >
                <i className="ri-linkedin-fill w-[32px] h-[32px] flex justify-center items-center text-[14px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

 
      <div
        className="min-[992px]:w-[25%] min-[421px]:w-[50%] w-full px-[12px] mb-[24px] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration={2300}
      >
        <div className="infy-team transition-all duration-[0.3s] ease-in-out p-[15px] bg-[#24232e80]">
          <img src="img/user2.jpg" alt="team" className="w-full" />
          <div className="mt-[15px] text-center">
            <h5 className="mb-[5px] font-Manrope text-[16px] leading-[1.2] font-normal">
            Mark Willem
            </h5>
            <p className="mb-[15px] text-[12px] leading-[16px] text-[#dbdbdb]">
            Co-Founder
            </p>
            <div className="flex justify-center">
              <a
                href="javascript:void(0)"
                className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] mx-[1px] flex bg-[#73739c26] text-[#fff] hover:bg-[#73739c4d]"
              >
                <i className="ri-facebook-fill w-[32px] h-[32px] flex justify-center items-center text-[14px]" />
              </a>
              <a
                href="javascript:void(0)"
                className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] mx-[1px] flex bg-[#73739c26] text-[#fff] hover:bg-[#73739c4d]"
              >
                <i className="ri-twitter-fill w-[32px] h-[32px] flex justify-center items-center text-[14px]" />
              </a>
              <a
                href="javascript:void(0)"
                className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] mx-[1px] flex bg-[#73739c26] text-[#fff] hover:bg-[#73739c4d]"
              >
                <i className="ri-linkedin-fill w-[32px] h-[32px] flex justify-center items-center text-[14px]" />
              </a>
            </div>
          </div>
        </div>
      </div>


      <div
        className="min-[992px]:w-[25%] min-[421px]:w-[50%] w-full px-[12px] mb-[24px] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration={2300}
      >
        <div className="infy-team transition-all duration-[0.3s] ease-in-out p-[15px] bg-[#24232e80]">
          <img src="img/user1.jpg" alt="team" className="w-full" />
          <div className="mt-[15px] text-center">
            <h5 className="mb-[5px] font-Manrope text-[16px] leading-[1.2] font-normal">
            Sajad Jalilian
            </h5>
            <p className="mb-[15px] text-[12px] leading-[16px] text-[#dbdbdb]">
            Co-Founder
            </p>
            <div className="flex justify-center">
              <a
                href="javascript:void(0)"
                className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] mx-[1px] flex bg-[#73739c26] text-[#fff] hover:bg-[#73739c4d]"
              >
                <i className="ri-facebook-fill w-[32px] h-[32px] flex justify-center items-center text-[14px]" />
              </a>
              <a
                href="javascript:void(0)"
                className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] mx-[1px] flex bg-[#73739c26] text-[#fff] hover:bg-[#73739c4d]"
              >
                <i className="ri-twitter-fill w-[32px] h-[32px] flex justify-center items-center text-[14px]" />
              </a>
              <a
                href="javascript:void(0)"
                className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] mx-[1px] flex bg-[#73739c26] text-[#fff] hover:bg-[#73739c4d]"
              >
                <i className="ri-linkedin-fill w-[32px] h-[32px] flex justify-center items-center text-[14px]" />
              </a>
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
                        © NFTAI, All rights reserved.
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

export default About;