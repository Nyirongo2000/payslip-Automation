
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Image from "next/image";

export default function Page() {


  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-44">
        <p
          className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
        >
          <strong className="text-white text-4xl"> Digital Infinity.</strong>
        </p>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-8 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Digital Infinity.</strong>This is a demo of
            PaySlip Automation System
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in(Admin)</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/employee"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in(Employee)</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-8">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={720}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing "
          />{" "}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project"
          />
        </div>
      </div>
    </main>
  );
}
