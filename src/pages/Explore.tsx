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

function Explore(){
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
                            href="#"
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
                      <form
                        className="infy-search-group-form flex items-center relative"
                        action="#"
                      >
                        <i className="ri-search-line absolute left-[15px] text-[13px] text-[#ddd] cursor-pointer transition-all duration-[0.5s] ease-in-out" />
                        <input
                          className="form-control infy-search-bar w-full min-w-[300px] max-[1399px]:min-w-[300px] max-[1199px]:min-w-[200px] min-h-[40px] h-[40px] pl-[40px] block font-Manrope text-[13px] border-0 outline-0 font-normal leading-[1] text-[#ddd] tracking-[0.6px]"
                          placeholder="Search Here..."
                          type="text"
                        />
                      </form>
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
        <section className="explore-products-sec pt-[50px] max-[1199px]:pt-[35px] pb-[100px] max-[1199px]:pb-[70px]">
  <div className="relative flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
    <div className="w-full flex flex-wrap">
      <div className="w-full">
        <div
          className="infy-explore-products-tabs infy-explore-page"
          data-aos="fade-up"
          data-aos-duration={2000}
        >
          <ul
            className="nav-tabs pb-[50px] max-[1199px]:pb-[35px] m-[-2px] flex flex-wrap justify-center"
            id="myTab"
          >
            <li className="m-[2px] py-[5px] px-[20px] cursor-pointer">
              <a
                href="#trending"
                className="text-[#fff] text-[14px] font-normal tracking-[0.02rem]"
              >
                Trending
              </a>
            </li>
            <li className="m-[2px] py-[5px] px-[20px] cursor-pointer">
              <a
                href="#art"
                className="text-[#fff] text-[14px] font-normal tracking-[0.02rem]"
              >
                Art
              </a>
            </li>
            <li className="m-[2px] py-[5px] px-[20px] cursor-pointer">
              <a
                href="#music"
                className="text-[#fff] text-[14px] font-normal tracking-[0.02rem]"
              >
                Music
              </a>
            </li>
            <li className="m-[2px] py-[5px] px-[20px] cursor-pointer">
              <a
                href="#video"
                className="text-[#fff] text-[14px] font-normal tracking-[0.02rem]"
              >
                Video
              </a>
            </li>
            <li className="m-[2px] py-[5px] px-[20px] cursor-pointer">
              <a
                href="#sports"
                className="text-[#fff] text-[14px] font-normal tracking-[0.02rem]"
              >
                Sports
              </a>
            </li>
            <li className="m-[2px] py-[5px] px-[20px] cursor-pointer">
              <a
                href="#photography"
                className="text-[#fff] text-[14px] font-normal tracking-[0.02rem]"
              >
                Photography
              </a>
            </li>
            <li className="m-[2px] py-[5px] px-[20px] cursor-pointer">
              <a
                href="#gaming"
                className="text-[#fff] text-[14px] font-normal tracking-[0.02rem]"
              >
                Gaming
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane" id="trending">
              <div className="w-full flex flex-wrap">
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">21</p>
                      </a>
                      <img
                        src="assets/img/bids/1.jpg"
                        alt="bids-1-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Aptronics electronics
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-1.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Alexander Dev
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @Design
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          1.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            085 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">32</p>
                      </a>
                      <img
                        src="assets/img/bids/2.jpg"
                        alt="bids-2-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Immortels Treachery
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-2.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @nickname
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          2.49 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            125 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">09</p>
                      </a>
                      <img
                        src="assets/img/bids/3.jpg"
                        alt="bids-3-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Walking on Air
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-3.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Trista Francis
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @redalert
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          0.19 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            050 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">03</p>
                      </a>
                      <img
                        src="assets/img/bids/4.jpg"
                        alt="bids-4-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Tranquility
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-4.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @neo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          5.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">01</p>
                      </a>
                      <img
                        src="assets/img/explore/5.jpg"
                        alt="bids-5-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Walking on Air
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-3.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Trista Francis
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @redalert
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          0.19 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            050 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">88</p>
                      </a>
                      <img
                        src="assets/img/explore/6.jpg"
                        alt="explore-6-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Tranquility
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-4.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @neo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          5.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">63</p>
                      </a>
                      <img
                        src="assets/img/explore/7.jpg"
                        alt="explore-7-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Aptronics electronics
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-1.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Alexander Dev
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @Design
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          1.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            085 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">42</p>
                      </a>
                      <img
                        src="assets/img/explore/8.jpg"
                        alt="explore-8-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Immortels Treachery
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-2.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @nickname
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          2.49 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            125 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-[12px]">
                  <div className="mt-[26px] max-[1199px]:mt-[11px] flex justify-center">
                    <a
                      href="authors.html"
                      className="infy-buttons-invers result-placeholder transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-[#24232ee6] tracking-[1px] flex items-center"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="art">
              <div className="w-full flex flex-wrap">
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">32</p>
                      </a>
                      <img
                        src="assets/img/bids/2.jpg"
                        alt="bids-2-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Immortels Treachery
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-2.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @nickname
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          2.49 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            125 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">01</p>
                      </a>
                      <img
                        src="assets/img/explore/5.jpg"
                        alt="bids-5-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Walking on Air
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-3.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Trista Francis
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @redalert
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          0.19 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            050 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">63</p>
                      </a>
                      <img
                        src="assets/img/explore/7.jpg"
                        alt="explore-7-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Aptronics electronics
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-1.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Alexander Dev
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @Design
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          1.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            085 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">42</p>
                      </a>
                      <img
                        src="assets/img/explore/8.jpg"
                        alt="explore-8-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Immortels Treachery
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-2.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @nickname
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          2.49 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            125 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-[12px]">
                  <div className="mt-[26px] flex justify-center">
                    <a
                      href="authors.html"
                      className="infy-buttons-invers result-placeholder transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-[#24232ee6] tracking-[1px] flex items-center"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="music">
              <div className="w-full flex flex-wrap">
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">88</p>
                      </a>
                      <img
                        src="assets/img/explore/6.jpg"
                        alt="explore-6-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Tranquility
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-4.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @neo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          5.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-[12px]">
                  <div className="mt-[26px] flex justify-center">
                    <a
                      href="authors.html"
                      className="infy-buttons-invers result-placeholder transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-[#24232ee6] tracking-[1px] flex items-center"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="video">
              <div className="w-full flex flex-wrap">
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">09</p>
                      </a>
                      <img
                        src="assets/img/bids/3.jpg"
                        alt="bids-3-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Walking on Air
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-3.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Trista Francis
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @redalert
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          0.19 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            050 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">03</p>
                      </a>
                      <img
                        src="assets/img/bids/4.jpg"
                        alt="bids-4-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Tranquility
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-4.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @neo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          5.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-[12px]">
                  <div className="mt-[26px] flex justify-center">
                    <a
                      href="authors.html"
                      className="infy-buttons-invers result-placeholder transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-[#24232ee6] tracking-[1px] flex items-center"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="sports">
              <div className="w-full flex flex-wrap">
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">09</p>
                      </a>
                      <img
                        src="assets/img/bids/3.jpg"
                        alt="bids-3-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Walking on Air
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-3.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Trista Francis
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @redalert
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          0.19 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            050 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">03</p>
                      </a>
                      <img
                        src="assets/img/bids/4.jpg"
                        alt="bids-4-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Tranquility
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-4.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @neo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          5.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">01</p>
                      </a>
                      <img
                        src="assets/img/explore/5.jpg"
                        alt="bids-5-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Walking on Air
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-3.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Trista Francis
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @redalert
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          0.19 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">88</p>
                      </a>
                      <img
                        src="assets/img/explore/6.jpg"
                        alt="explore-6-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Tranquility
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-4.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @neo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          5.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">63</p>
                      </a>
                      <img
                        src="assets/img/explore/7.jpg"
                        alt="explore-7-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Aptronics electronics
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-1.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Alexander Dev
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @Design
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          1.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            085 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">42</p>
                      </a>
                      <img
                        src="assets/img/explore/8.jpg"
                        alt="explore-8-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Immortels Treachery
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-2.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @nickname
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          2.49 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            125 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-[12px]">
                  <div className="mt-[26px] flex justify-center">
                    <a
                      href="authors.html"
                      className="infy-buttons-invers result-placeholder transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-[#24232ee6] tracking-[1px] flex items-center"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="photography">
              <div className="w-full flex flex-wrap">
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">09</p>
                      </a>
                      <img
                        src="assets/img/bids/3.jpg"
                        alt="bids-3-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Walking on Air
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-3.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Trista Francis
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @redalert
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          0.19 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            050 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">03</p>
                      </a>
                      <img
                        src="assets/img/bids/4.jpg"
                        alt="bids-4-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Tranquility
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-4.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @neo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          5.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">63</p>
                      </a>
                      <img
                        src="assets/img/explore/7.jpg"
                        alt="explore-7-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Aptronics electronics
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-1.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Alexander Dev
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @Design
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          1.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            085 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">42</p>
                      </a>
                      <img
                        src="assets/img/explore/8.jpg"
                        alt="explore-8-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Immortels Treachery
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-2.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @nickname
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          2.49 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            125 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-[12px]">
                  <div className="mt-[26px] flex justify-center">
                    <a
                      href="authors.html"
                      className="infy-buttons-invers result-placeholder transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-[#24232ee6] tracking-[1px] flex items-center"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="gaming">
              <div className="w-full flex flex-wrap">
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">03</p>
                      </a>
                      <img
                        src="assets/img/bids/4.jpg"
                        alt="bids-4-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Tranquility
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-4.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @neo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          5.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">01</p>
                      </a>
                      <img
                        src="assets/img/explore/5.jpg"
                        alt="bids-5-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Walking on Air
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-3.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Trista Francis
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @redalert
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          0.19 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">88</p>
                      </a>
                      <img
                        src="assets/img/explore/6.jpg"
                        alt="explore-6-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Tranquility
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-4.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Salvador Dali
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @neo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          5.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            05 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[480px]:w-[50%] w-full px-[12px] mb-[24px]">
                  <div className="explore-card p-[15px] bg-[#24232e80] relative">
                    <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                      <a
                        href="javascript:void(0)"
                        className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                      >
                        <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                        <p className="m-0 text-[11px] leading-[13px]">63</p>
                      </a>
                      <img
                        src="assets/img/explore/7.jpg"
                        alt="explore-7-img"
                        className="transition-all duration-[0.3s] ease-in-out w-full"
                      />
                    </figure>
                    <div className="infy-bids pt-[18px]">
                      <h4 className="pb-[20px] leading-[20px]">
                        <a
                          href="product-details.html"
                          className="font-Manrope text-[17px] max-[1399px]:text-[16px] leading-[18px] font-medium"
                        >
                          Aptronics electronics
                        </a>
                      </h4>
                      <div className="user-details flex pb-[20px]">
                        <img
                          src="assets/img/products-details/ep-1.jpg"
                          alt="ep"
                          className="w-[35px] h-[35px] rounded-[100%]"
                        />
                        <div className="details-contact flex justify-between w-full">
                          <div className="sub-contact pl-[10px]">
                            <h5 className="mb-[5px] leading-[16px]">
                              <a
                                href="authors.html"
                                className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                              >
                                Alexander Dev
                              </a>
                            </h5>
                            <p className="text-[13px] leading-[18px] text-[#bbb]">
                              @Design
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bids-price flex justify-between items-end">
                        <h5 className="py-[5px] px-[7px] font-Manrope text-[12px] font-medium leading-[1.2] flex items-center absolute top-[25px] left-[25px] bg-[#24232ee6]">
                          1.39 ETH
                        </h5>
                        <div className="current-bids">
                          <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                            Current Bid
                          </h5>
                          <p className="text-[13px] leading-[18px] font-light text-left">
                            085 ETH
                          </p>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                        >
                          Place Bid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-[12px]">
                  <div className="mt-[26px] flex justify-center">
                    <a
                      href="authors.html"
                      className="infy-buttons-invers result-placeholder transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-[#24232ee6] tracking-[1px] flex items-center"
                    >
                      View More
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
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[5px] flex items-center justify-center bg-[#73739c26] hover:bg-[#73739c4d] text-[#fff]"
                    >
                      <i className="ri-facebook-fill flex justify-center items-center text-[18px]" />
                    </a>
                    <a
                      href="#"
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
                      href="#"
                      className="transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[5px] flex items-center justify-center bg-[#73739c26] hover:bg-[#73739c4d] text-[#fff]"
                    >
                      <i className="ri-pinterest-fill flex justify-center items-center text-[18px]" />
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
                        href="forum"
                        className="transition-all duration-[0.3s] ease-in-out py-[5px] flex text-[14px] leading-[28px] text-[#dbdbdb] hover:text-[#a487f2]"
                      >
                        Forum Community
                      </a>
                    </li>
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
                      <ul className="flex flex-wrap justify-center">
                        <li className="relative">
                          <a href="privacy" className="text-[14px] text-[#fff]">
                            Policy
                          </a>
                        </li>
                        <li className="relative">
                          <a
                            href="terms"
                            className="text-[14px] text-[#fff]"
                          >
                            Terms
                          </a>
                        </li>
                        <li className="relative">
                          <a href="contact" className="text-[14px] text-[#fff]">
                            Contact
                          </a>
                        </li>
                      </ul>
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

export default Explore;