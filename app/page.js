"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")

  const createTree = () => { 
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main className="">
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 py-[130px] ">
        
        {/* LEFT CONTENT */}
        <div className="flex justify-center flex-col gap-4 md:gap-3 ">
          <p className="text-yellow-300 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Everything you
          </p>
          <p className="text-yellow-300 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            are. In one,
          </p>
          <p className="text-yellow-300 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            simple link in bio.
          </p>

          <p className="text-yellow-300 text-base sm:text-lg md:text-xl my-4 max-w-xl">
            Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          {/* INPUT SECTION */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-3 py-2 focus:outline-green-800 rounded-md font-bold text-white text-lg sm:text-xl bg-transparent border border-white"
              type="text"
              placeholder="Enter your Handle"
            />
            <button
              onClick={createTree}
              className="bg-pink-300 rounded-full px-6 py-3 font-semibold whitespace-nowrap"
            >
              Claim your Bittree
            </button>
          </div>

          <div className="mt-4">
            <button
              onClick={() => router.push("/users")}
              className="bg-gray-900 text-white font-bold px-6 py-3 rounded-3xl"
            >
              Registered Users
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src="/home.png"
            alt="homepage image"
            className="max-w-full h-auto w-[80%] md:w-full"
          />
        </div>

      </section>
    </main>
  );
}
