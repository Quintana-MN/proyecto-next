"use client";
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */

import { Inter } from "next/font/google";
import { dropdownFunction } from "../components/dropdown";

const inter = Inter({
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div className={inter.className}>
      <div className="flex">
        <img
          className="absolute xl:hidden lg:w-40 sm:w-40 max-[400px]:w-28 min-[400px]:left-5 top-5 left-2"
          src="/createss-white.webp"
          alt="Createss Logo"
        />
        <div className="flex flex-col h-screen p-8 max-xl:hidden">
          <img src="/createss.webp" alt="Createss Logo" />
          <button className="flex w-24 mt-4 text-center rounded-2xl py-2 border-b-2 text-black hover:bg-cyan-950 hover:text-sky-600">
            <img className="px-1" src="/compass-black.svg" alt="Compass Icon" />{" "}
            Explore
          </button>
          <button className="flex w-24 mt-4 text-center rounded-2xl border-b-2  py-2 text-black hover:bg-cyan-950 hover:text-sky-600">
            <img className="px-1" src="/login-icon.svg" alt="Login Icon" />{" "}
            Login
          </button>
          <hr className="mt-4" />
          <button className="flex w-32 mt-4 rounded-2xl border-b-2 py-2 text-black hover:bg-cyan-950 hover:text-sky-600">
            <img className="px-1" src="/needhelp.svg" alt="Need Help Icon" />{" "}
            <img src="" alt="" /> Need Help?
          </button>
          <hr className="mt-4" />
          <span className="mt-4 text-center">Terms of Service</span>
          <span className="text-center mt-4">Privacy</span>
          <div className="mt-4 flex justify-between">
            <img src="/instagram.svg" alt="Instagram Logo" />
            <img src="/twitter.svg" alt="Twitter Logo" />
            <img src="/tiktok.svg" alt="Tiktok Logo" />
            <img src="/youtube.svg" alt="Youtube Logo" />
            <img src="/reddit.svg" alt="Reddit Logo" />
          </div>
        </div>

        {/* Hasta acá columna 1 */}

        <div className="w-screen">
          <div className="bg-cyan-950 h-72">
            <div className="flex flex-col">
              <div className="flex justify-end mt-3 mr-3">
                <span className="text-white mt-2 mr-2 text-md">
                  What's Createss
                </span>
                <button
                  className="select-none text-sm rounded-2xl bg-transparent border border-sky-600 py-2 px-3 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:bg-sky-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex justify-center mt-11">
                <article className="text-white text-2xl font-bold">
                  <h1>
                    Promote <span className="text-sky-600">yourself</span>
                  </h1>
                  <h1>
                    whit the perfect{" "}
                    <span className="text-sky-600">creator</span>.
                  </h1>
                  <input
                    type="text"
                    className="bg-transparent border border-sky-600 rounded-2xl text-xs font-normal p-2 mt-3 pr-14 placeholder:pl-1"
                    placeholder="Search for creators"
                  />
                </article>
              </div>
            </div>
          </div>
          <div className="bg-slate-200">
            <article>
              <div className="flex justify-between text-center font-normal max-xl:hidden max-xl:mt-10">
                <span className="m-4">Filter by platform</span>
                <span className="m-4">Get more specific...</span>
              </div>
              <div className="font-semibold text-sm inline p-1 xl:flex 2xl:justify-between max-lg:hidden xl:justify-center max-[1280px]:hidden">
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  ALL
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  ONLYFANS
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  INSTAGRAM
                </button>
                <div className="flex flex-col items-center justify-center">
                  <div className="relative inline-block text-left">
                    <button
                      id="dropdown-button"
                      onClick={dropdownFunction}
                      className="max-[1345px]:py-4 flex justify-center px-2 py-1 border border-gray-300 text-gray-700 rounded-2xl border-b-4 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                    >
                      MORE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 -mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdown-menu"
                      className="origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden"
                    >
                      <div
                        className="p-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdown-button"
                      >
                        <a
                          href="#"
                          class="block px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-100"
                          role="menuitem"
                        >
                          Item 1
                        </a>
                        <a
                          href="#"
                          class="block px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-100"
                          role="menuitem"
                        >
                          Item 2
                        </a>
                        <a
                          href="#"
                          class="block px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-100"
                          role="menuitem"
                        >
                          Item 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  STARTING PRICE
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  FOLLOWING / OF / %
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  PROMO TYPES
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  TAGS
                </button>
              </div>
            </article>
            <div className="bg-slate-200">
              <div className="flex justify-between m-4 max-xl:py-6">
                <h1 className="ml-3 font-semibold">Featured Sellers</h1>
                <button className="mr-3">
                  <img
                    className="xl:hidden"
                    src="/lineas.svg"
                    alt="Lineas Icon"
                  />
                </button>
              </div>
              <div className="px-4 mb-3 grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-2">
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="data:image/jpeg;base64,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"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-sm font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="data:image/jpeg;base64,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"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="data:image/jpeg;base64,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"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="data:image/jpeg;base64,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"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="data:image/jpeg;base64,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"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="data:image/jpeg;base64,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"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="data:image/jpeg;base64,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"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 text-xs border border-slate-600 font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="data:image/jpeg;base64,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"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block border border-slate-600 px-4 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-4">
                  <button className="bg-transparent mt-2 max-[370px]:px-2 px-4 text-center rounded-3xl py-2 border-b-2 text-black hover:text-slate-600">
                    ←
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    1
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    2
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    3
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    4
                  </button>
                  <button className="bg-cyan-950 mt-2  px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    5
                  </button>
                  <button className="bg-transparent mt-2 max-[370px]:px-2 px-4 text-center rounded-3xl py-2 border-b-2 text-black hover:text-slate-600">
                    →
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-cyan-950 h-14 xl:hidden">
              <div className="flex justify-between mt-2 px-2">
                <img className="mt-4" src="/compass.svg" alt="Compass Icon" />
                <img className="mt-4" src="/campaign.svg" alt="Campaign Icon" />
                <img className="mt-4" src="/chat-icon.svg" alt="Chat Icon" />
                <img className="mt-4" src="/eyelashes.svg" alt="Eyelash Icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Hasta acá columna 2 */}

        <div className="flex h-screen max-xl:hidden text-sm">
          <div className="p-6">
            <div className="flex">
              <img
                className="translate-x-4"
                src="/sendmessage.svg"
                alt="Message Logo"
              />
              <h1 className="text-center w-36">Send us a message</h1>
            </div>
          </div>
        </div>

        {/* Hasta acá columna 3 pete */}
      </div>
    </div>
  );
}
