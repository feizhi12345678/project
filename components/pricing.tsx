import Image from "next/image";
import Illustration from "@/public/images/pricing-illustration.svg";

export default function Pricing() {
  return (
    <section className="relative">
      {/* Illustration */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width={618}
          height={468}
          alt="Pricing Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">
              Find a plan that's right for you
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
          </div>
          {/* Pricing tables */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">
            {/* Pricing table 1 */}
            <div
              className="relative flex flex-col h-full p-6 bg-white"
              data-aos="zoom-out"
            >
              <div className="mb-6">
                <div className="container">
                  <div className="flex items-center justify-center">
                    <Image
                      src={
                        "https://img2.baidu.com/it/u=1183382000,2307894427&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                      }
                      alt=""
                      width={50}
                      height={50}
                    ></Image>
                    <div className="ml-2 text-center text-xl font-bold text-blue-500">
                      SEOGPT
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-700 items-center justify-cneter my-5">
                    HELLO HAO ARE YOU
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center my-3 text-black">
                  <span className="text-3xl font-bold mx-1">$</span>
                  <span className="text-3xl font-bold mx-1 ">49</span>
                  <span className="font-medium text-gray-400 mx-2">/mo</span>
                </div>
                <div className="my-5">
                  <ul className="text-gray-600 text-black space-y-3 grow">
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>React 19</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>next.js</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>TypeScript</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Tailwindcss</span>
                    </li>
                  </ul>
                </div>

                <div className="my-5">
                  <a
                    className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group"
                    href="#0"
                  >
                    BUY NOW
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 mx-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center my-3">
                <span className="text-decoration-underline text-black">
                  第一个容器
                </span>
              </div>
            </div>
            {/* Pricing table 2 */}
            <div
              className="relative flex flex-col h-full p-6 bg-white"
              data-aos="zoom-out"
            >
              <div className="mb-6">
                <div className="container">
                  <div className="flex items-center justify-center">
                    <Image
                      src={
                        "https://img2.baidu.com/it/u=1183382000,2307894427&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                      }
                      alt=""
                      width={50}
                      height={50}
                    ></Image>
                    <div className="ml-2 text-center text-xl font-bold text-blue-500">
                      ChatGPT
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-700 items-center justify-cneter my-5">
                    zhe shi di er ge yian
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center my-3 text-black">
                  <span className="text-3xl font-bold mx-1">$</span>
                  <span className="text-3xl font-bold mx-1 ">300</span>
                  <span className="font-medium text-gray-600 mx-2">/mo</span>
                </div>
                <div className="my-5">
                  <ul className="text-gray-600 text-black space-y-3 grow">
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>vue3</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>vuex</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Pine</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>vue-router</span>
                    </li>
                  </ul>
                </div>

                <div className="my-5">
                  <a
                    className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group"
                    href="#0"
                  >
                    BUY NOW
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 mx-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center my-3">
                <span className="text-decoration-underline text-black">
                  第二个容器
                </span>
              </div>
            </div>
            {/* Pricing table 3 */}
            <div
              className="relative flex flex-col h-full p-6 bg-white"
              data-aos="zoom-out"
            >
              <div className="mb-6">
                <div className="container">
                  <div className="flex items-center justify-center">
                    <Image
                      src={
                        "https://img2.baidu.com/it/u=1183382000,2307894427&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                      }
                      alt=""
                      width={50}
                      height={50}
                    ></Image>
                    <div className="ml-2 text-center text-xl font-bold text-blue-500">
                      文心一言
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-700 items-center justify-cneter my-5">
                    ZHE SHI DI ER GE RONG QI
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center my-3 text-black">
                  <span className="text-3xl font-bold mx-1">$</span>
                  <span className="text-3xl font-bold mx-1 ">3600</span>
                  <span className="font-medium text-gray-400 mx-2">/mo</span>
                </div>
                <div className="my-5">
                  <ul className="text-gray-600 text-black space-y-3 grow">
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>React</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Redux</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>create-react-app</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>tailwindcss</span>
                    </li>
                  </ul>
                </div>

                <div className="my-5">
                  <a
                    className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group"
                    href="#0"
                  >
                    BUY NOW
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 mx-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center my-3">
                <span className="text-decoration-underline text-black">
                  第三个容器
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
