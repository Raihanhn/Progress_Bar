"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className=" mt-20 grid place-items-center ">
        <div className=" grid grid-cols-3 space-x-4  ">
          <Link href="/lemon">
            <div className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Lemon
            </div>
          </Link>
          <Link href="/carrot">
            <div className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              Carrot
            </div>
          </Link>
          <Link href="/chilli">
            <div className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Chilli
            </div>
          </Link>
        </div>
        <div className=" flex gap-5 mt-5 ">
          <div id="apple"></div>

          <div id="orange"></div>

          <div id="lemon"></div>

          <div id="pear"></div>

          <div id="watermelon"></div>
        </div>
      </div>
    </div>
  );
}
