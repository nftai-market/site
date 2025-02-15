// App.tsx
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
 
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

 

function Home() {
 

 
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
    <section className="hero-sec pt-[100px] max-[1199px]:pt-[70px] pb-[50px] max-[1199px]:pb-[35px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap">
          <div
            className="min-[768px]:w-[50%] min-[768px]:order-2 px-[12px] w-full"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="infy-hero-image w-full relative h-[600px] max-[1199px]:h-[550px] max-[767px]:h-[400px] max-[767px]:mb-[70px] max-[420px]:h-[320px]">
              <img
                data-offset={110}
                src="../img/shape-1.png"
                alt="shape-1"
                className="shape1 w-[50px] absolute left-[-50px] max-[575px]:left-[30px] top-[50px] max-[767px]:opacity-[0.5] max-[420px]:opacity-[0.3]"
              />
              <img
                data-offset={140}
                src="img/shape-4.png"
                alt="shape-4"
                className="shape2 w-[70px] absolute bottom-0 right-0 max-[767px]:opacity-[0.5] max-[420px]:opacity-[0.3]"
              />
              <img
                data-offset={130}
                src="img/shape-3.png"
                alt="shape-3"
                className="shape3 w-[40px] absolute top-0 right-0 max-[767px]:opacity-[0.5] max-[420px]:opacity-[0.3]"
              />
              <img
                data-offset={120}
                src="img/shape-2.png"
                alt="shape-2"
                className="shape4 w-[70px] absolute bottom-[50px] left-0 max-[767px]:opacity-[0.5] max-[420px]:opacity-[0.3]"
              />
              <img
                src="img/hero.png"
                alt="hero"
                className="hero-img w-[350px] max-[1199px]:w-[300px] max-[767px]:w-[250px] max-[420px]:w-[200px] m-auto absolute bottom-0 max-[1199px]:bottom-[50%] left-0 right-0"
              />
            </div>
          </div>
          <div
            className="min-[768px]:w-[50%] min-[768px]:order-1 px-[12px] w-full"
            data-aos="fade-up"
            data-aos-duration={2000}
          >
            <div className="infy-hero-contact h-full flex flex-col justify-center">
              <h2 className="mb-[20px] text-[52px] leading-[1.2] font-semibold tracking-[2px] max-[1399px]:mb-[15px] max-[1399px]:text-[42px] max-[1199px]:text-[38px] max-[1199px]:leading-[38px] max-[991px]:text-[35px] max-[991px]:leading-[35px] max-[767px]:text-[32px] max-[767px]:leading-[32px] max-[575px]:text-[28px] max-[575px]:leading-[28px] max-[420px]:text-[24px]">
                Create Your Own
              </h2>
              <h1 className="mb-[10px] text-[90px] leading-[90px] font-bold text-[#5433ff] relative max-[1399px]:text-[62px] max-[1399px]:leading-[62px] max-[1199px]:text-[58px] max-[1199px]:leading-[58px] max-[991px]:text-[56px] max-[991px]:leading-[56px] max-[767px]:text-[52px] max-[767px]:leading-[52px] max-[575px]:text-[48px] max-[575px]:leading-[48px] max-[420px]:text-[45px]">
                NFT
              </h1>
              <h2 className="mb-[20px] text-[52px] leading-[1.2] font-semibold tracking-[2px] max-[1399px]:mb-[15px] max-[1399px]:text-[42px] max-[1199px]:text-[38px] max-[1199px]:leading-[38px] max-[991px]:text-[35px] max-[991px]:leading-[35px] max-[767px]:text-[32px] max-[767px]:leading-[32px] max-[575px]:text-[28px] max-[575px]:leading-[28px] max-[420px]:text-[24px]">
                With Ai
              </h2>
              <p className="my-[15px] max-w-[500px] text-[14px] tracking-[0.04rem] leading-[28px] text-[#ddd] max-[575px]:text-[13px]">
                NFTAI is the first Prompt Artist Platform, which lets you mint
                your imagination into an AI-Generated NFT. Collectors and
                enthusiasts can buy/sell the NFT together with the prompt that was
                used to generate the image.
              </p>
              <div className="infy-hero-buttons mt-[20px] flex max-[1399px]:mt-[15px]">
                <a
                  href="generate"
                  className="infy-buttons mx-w-auto transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] leading-[26px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-transparent tracking-[1px] flex items-center hover:text-[#fff] result-placeholder"
                >
                  Create
                </a>
                <a
                  href="explore"
                  className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] px-[20px] text-[#fff] relative z-[2] text-[14px] font-medium border-[1px] border-solid border-[#24232ee6] tracking-[1px] flex items-center hover:text-[#fff] result-placeholder"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="bids-sec relative py-[50px] max-[1199px]:py-[35px]"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap">
          <div className="w-full px-[12px]">
            <div className="infy-banner w-full flex justify-between items-center mb-[30px] max-[420px]:flex-col max-[420px]:justify-start max-[420px]:items-start">
              <h4 className="text-[30px] max-[1199px]:text-[29px] max-[991px]:text-[27px] max-[767px]:text-[26px] max-[575px]:text-[22px] max-[420px]:text-[20px] font-semibold leading-[1.2]">
                Recent Collections
              </h4>
              <a
                href="explore"
                className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out leading-[26px] h-[auto] p-0 bg-transparent relative text-[14px] text-[#fff] font-medium tracking-[1px] flex items-center result-placeholder"
              >
                View All
              </a>
            </div>
          </div>
          <div className="w-full px-[12px]">
            <div className="owl-carousel owl-theme bids-slider">
              <div className="bids-card transition-all duration-[0.3s] ease-in-out bg-[#24232e80] p-[15px] relative">
                <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                  <a
                    href="#"
                    className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                  >
                    <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                    <p className="m-0 text-[11px] leading-[13px]">32</p>
                  </a>
                  <img
                    src="img/1.jpg"
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
                      src="img/ep-1.jpg"
                      alt="ep"
                      className="w-[35px] h-[35px] rounded-[100%]"
                    />
                    <div className="details-contact flex justify-between w-full">
                      <div className="sub-contact pl-[10px]">
                        <h5 className="mb-[5px] text-[20px] leading-[14px]">
                          <a
                            href="authors.html"
                            className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                          >
                            Alexander Dave
                          </a>
                        </h5>
                        <p className="text-[13px] leading-[18px] text-[#bbb]">
                          @Design
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bids-price flex justify-between items-end">
                    <div className="current-bids">
                      <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                        Current Bid
                      </h5>
                    </div>
                    <a
                      href="#"
                      className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                    >
                      Place Bid
                    </a>
                  </div>
                </div>
              </div>
              <div className="bids-card transition-all duration-[0.3s] ease-in-out bg-[#24232e80] p-[15px] relative">
                <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                  <a
                    href="#"
                    className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                  >
                    <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                    <p className="m-0 text-[11px] leading-[13px]">0</p>
                  </a>
                  <img
                    src="img/2.jpg"
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
                      Les the Treachery
                    </a>
                  </h4>
                  <div className="user-details flex pb-[20px]">
                    <img
                      src="img/ep-2.jpg"
                      alt="ep"
                      className="w-[35px] h-[35px] rounded-[100%]"
                    />
                    <div className="details-contact flex justify-between w-full">
                      <div className="sub-contact pl-[10px]">
                        <h5 className="mb-[5px] text-[20px] leading-[14px]">
                          <a
                            href="authors.html"
                            className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                          >
                            Freddie Carpenter
                          </a>
                        </h5>
                        <p className="text-[13px] leading-[18px] text-[#bbb]">
                          @nickname
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bids-price flex justify-between items-end">
                    <div className="current-bids">
                      <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                        Current Bid
                      </h5>
                    </div>
                    <a
                      href="#"
                      className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                    >
                      Place Bid
                    </a>
                  </div>
                </div>
              </div>
              <div className="bids-card transition-all duration-[0.3s] ease-in-out bg-[#24232e80] p-[15px] relative">
                <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                  <a
                    href="#"
                    className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                  >
                    <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                    <p className="m-0 text-[11px] leading-[13px]">05</p>
                  </a>
                  <img
                    src="img/3.jpg"
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
                      src="img/ep-3.jpg"
                      alt="ep"
                      className="w-[35px] h-[35px] rounded-[100%]"
                    />
                    <div className="details-contact flex justify-between w-full">
                      <div className="sub-contact pl-[10px]">
                        <h5 className="mb-[5px] text-[20px] leading-[14px]">
                          <a
                            href="authors.html"
                            className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                          >
                            Trista Franceis
                          </a>
                        </h5>
                        <p className="text-[13px] leading-[18px] text-[#bbb]">
                          @redalert
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bids-price flex justify-between items-end">
                    <div className="current-bids">
                      <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                        Current Bid
                      </h5>
                    </div>
                    <a
                      href="#"
                      className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                    >
                      Place Bid
                    </a>
                  </div>
                </div>
              </div>
              <div className="bids-card transition-all duration-[0.3s] ease-in-out bg-[#24232e80] p-[15px] relative">
                <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                  <a
                    href="#"
                    className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                  >
                    <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                    <p className="m-0 text-[11px] leading-[13px]">11</p>
                  </a>
                  <img
                    src="img/4.jpg"
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
                      src="img/ep-4.jpg"
                      alt="ep"
                      className="w-[35px] h-[35px] rounded-[100%]"
                    />
                    <div className="details-contact flex justify-between w-full">
                      <div className="sub-contact pl-[10px]">
                        <h5 className="mb-[5px] text-[20px] leading-[14px]">
                          <a
                            href="authors.html"
                            className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                          >
                            Freddie Carpenter
                          </a>
                        </h5>
                        <p className="text-[13px] leading-[18px] text-[#bbb]">
                          @neo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bids-price flex justify-between items-end">
                    <div className="current-bids">
                      <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                        Current Bid
                      </h5>
                    </div>
                    <a
                      href="#"
                      className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                    >
                      Place Bid
                    </a>
                  </div>
                </div>
              </div>
              <div className="bids-card transition-all duration-[0.3s] ease-in-out bg-[#24232e80] p-[15px] relative">
                <figure className="bids-img transition-all duration-[0.3s] ease-in-out relative m-0 truncate">
                  <a
                    href="#"
                    className="transition-all duration-[0.3s] ease-in-out w-[35px] min-h-[35px] p-[5px] bg-[#24232ee6] flex justify-center items-center flex-col absolute right-[10px] top-[10px] hover:bg-[#24232e]"
                  >
                    <i className="ri-heart-line text-[#fff] text-[20px] leading-[20px]" />
                    <p className="m-0 text-[11px] leading-[13px]">0</p>
                  </a>
                  <img
                    src="img/5.jpg"
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
                      Industrial Revolution
                    </a>
                  </h4>
                  <div className="user-details flex pb-[20px]">
                    <img
                      src="img/ep-5.jpg"
                      alt="ep"
                      className="w-[35px] h-[35px] rounded-[100%]"
                    />
                    <div className="details-contact flex justify-between w-full">
                      <div className="sub-contact pl-[10px]">
                        <h5 className="mb-[5px] text-[20px] leading-[14px]">
                          <a
                            href="authors.html"
                            className="mb-[5px] font-Manrope text-[14px] leading-[14px] font-light tracking-[0.05rem]"
                          >
                            Tyler Covington
                          </a>
                        </h5>
                        <p className="text-[13px] leading-[18px] text-[#bbb]">
                          @midinh
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bids-price flex justify-between items-end">
                    <div className="current-bids">
                      <h5 className="mb-[5px] font-Manrope text-[12px] leading-[18px] text-[#bbb] font-light">
                        Current Bid
                      </h5>
                    </div>
                    <a
                      href="#"
                      className="infy-buttons-invers transition-all duration-[0.3s] ease-in-out h-[40px] py-[15px] px-[20px] leading-[2px] border-[1px] border-solid border-[#24232ee6] text-[12px] font-light text-[#fff] relative z-[2] tracking-[1px] flex items-center modal-toggle"
                    >
                      Place Bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="process-sec bg-[#24232e33] py-[100px] max-[1199px]:py-[70px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div
          className="w-full flex flex-wrap mb-[-24px]"
          data-aos="fade-up"
          data-aos-duration={2000}
        >
          <div className="w-full px-[12px]">
            <div className="infy-banner w-full mb-[30px] text-center block">
              <h4 className="text-[30px] max-[1199px]:text-[29px] max-[991px]:text-[27px] max-[767px]:text-[26px] max-[575px]:text-[22px] max-[420px]:text-[20px] font-semibold leading-[1.2]">
                Create And Sell Your NFTs
              </h4>
            </div>
          </div>
          <div className="min-[768px]:w-[50%] min-[992px]:w-[25%] px-[12px] w-full mb-[24px]">
            <div className="infy-process-card p-[30px] transition-all duration-[0.3s] ease-in-out bg-[#24232e66]">
              <div className="infy-process-img pb-[15px]">
                <img
                  src="img/1.svg"
                  alt="process-1"
                  className="w-[80px] h-[80px]"
                />
              </div>
              <div className="process-sub-contact">
                <h4 className="pb-[15px] leading-[24px] text-[#fff]">
                  <a
                    href=""
                    className="font-Manrope text-[18px] leading-[24px] font-normal max-[991px]:text-[16px]"
                  >
                    Grow Your Digital Arts Collections
                  </a>
                </h4>
                <p className="text-[14px] leading-[24px] text-[#bbb]">
                Easily create and expand your own NFT collection in just a few simple clicks.
                </p>
              </div>
            </div>
          </div>
          <div className="min-[768px]:w-[50%] min-[992px]:w-[25%] px-[12px] w-full mb-[24px]">
            <div className="infy-process-card p-[30px] transition-all duration-[0.3s] ease-in-out bg-[#24232e66]">
              <div className="infy-process-img pb-[15px]">
                <img
                  src="img/2.svg"
                  alt="process-2"
                  className="w-[80px] h-[80px]"
                />
              </div>
              <div className="process-sub-contact">
                <h4 className="pb-[15px] leading-[24px] text-[#fff]">
                  <a
                    href=""
                    className="font-Manrope text-[18px] leading-[24px] font-normal max-[991px]:text-[16px]"
                  >
                    Earn Money By Trading NFTS
                  </a>
                </h4>
                <p className="text-[14px] leading-[24px] text-[#bbb]">
                Start a reliable income by building your own NFT collection.
                </p>
              </div>
            </div>
          </div>
          <div className="min-[768px]:w-[50%] min-[992px]:w-[25%] px-[12px] w-full mb-[24px]">
            <div className="infy-process-card p-[30px] transition-all duration-[0.3s] ease-in-out bg-[#24232e66]">
              <div className="infy-process-img pb-[15px]">
                <img
                  src="img/3.svg"
                  alt="process-3"
                  className="w-[80px] h-[80px]"
                />
              </div>
              <div className="process-sub-contact">
                <h4 className="pb-[15px] leading-[24px] text-[#fff]">
                  <a
                    href=""
                    className="font-Manrope text-[18px] leading-[24px] font-normal max-[991px]:text-[16px]"
                  >
                    Discover Top Artists &amp; Creators
                  </a>
                </h4>
                <p className="text-[14px] leading-[24px] text-[#bbb]">
                Connect with top NFT collectors and visit their collections.
                </p>
              </div>
            </div>
          </div>
          <div className="min-[768px]:w-[50%] min-[992px]:w-[25%] px-[12px] w-full mb-[24px]">
            <div className="infy-process-card p-[30px] transition-all duration-[0.3s] ease-in-out bg-[#24232e66]">
              <div className="infy-process-img pb-[15px]">
                <img
                  src="img/4.svg"
                  alt="process-4"
                  className="w-[80px] h-[80px]"
                />
              </div>
              <div className="process-sub-contact">
                <h4 className="pb-[15px] leading-[24px] text-[#fff]">
                  <a
                    href=""
                    className="font-Manrope text-[18px] leading-[24px] font-normal max-[991px]:text-[16px]"
                  >
                    Buy &amp; Sell Your NFT Collections
                  </a>
                </h4>
                <p className="text-[14px] leading-[24px] text-[#bbb]">
                Sell your own created NFTs and buy from other people's collections.
                </p>
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
                    © 2025  NFTAI, All rights reserved.
                  </p>
                </div>
                <div className="privacy-contact-copy max-[767px]:flex max-[767px]:justify-center">
                  <ul className="flex flex-wrap justify-center">
                    <li className="relative">
                      <a href="policy" className="text-[14px] text-[#fff]">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <a
      href="#"
      className="back-to-top result-placeholder hover:transition-all hover:duration-[0.3s] hover:ease-in-out w-[38px] h-[38px] hidden fixed right-[15px] bottom-[15px] z-[10] cursor-pointer bg-[#5433ff] text-[#fff] text-center text-[22px] leading-[1.6]"
    >
      <i className="ri-arrow-up-double-line text-[20px]" />
    </a>
  </>
  

  );
}

export default Home;
