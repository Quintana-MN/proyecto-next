/* eslint-disable react/no-unescaped-entities */
export default function LandingView() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cyan-950">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-white shadow-none text-center">
        <h4 className="mb-4 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
          Createss
        </h4>
        <h4 className="mt-1 block font-sans text-lg font-semibold leading-relaxed text-white antialiased">
          Promote yourself.
        </h4>
        <p className="font-medium">
          Grow your <span className="text-sky-600 inline">Income</span>
        </p>

        {/* Botones */}

        <div className="mt-8 mb-2 flex flex-col gap-6">
          <div className="relative h-11 w-full min-w-[200px]">
            <button
              className="block w-full select-none rounded-lg bg-transparent border border-sky-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-sky-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              <a href="/register"> Sing Up</a>
            </button>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <button
              className="block w-full select-none rounded-lg bg-transparent border border-sky-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:bg-sky-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Log in
            </button>
          </div>
        </div>

        {/* Login / términos y condiciones */}

        <div className="w-full items-center">
          <div className="text-sm text-white py-1">
            <p className="inline lg:pr-32 pr-12">What's Createss</p>
            <span className="text-sky-600">
              <a href="">Read the Terms & Condition</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
