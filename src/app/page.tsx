import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-slate-200   dark:bg-zinc-700 h-[90vh] flex justify-center items-center ">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-8">
          <div className="text-center">
            <Image
              src="/logo.svg"
              width="200"
              height="200"
              alt="unstuff logo"
              className="inline-block mb-8"
            />

            <h1 className="text-4xl font-bold tracking-tight dark:text-gray-400 text-gray-900 sm:text-6xl">
              The easiest way to upload and share files with your company or family.
            </h1>
            <p className="mt-6 text-lg leading-8 dark:text-white text-gray-600">
              Make and account and start managing your files in less than a
              minute.
            </p>
            
          </div>
        </div>
       
      </div>
    </div>
    
  );
}