"use client";

import logo from "@/public/assets/logo.svg";
import Image from "next/image";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      {/* <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <Image
          src={logo}
          alt="summarease_logo"
          className="w-28 object-contain"
        />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/jasonzubiate/SummarEase")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav> */}
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="mix_gradient">OpenAI GPT-4</span>
      </h1>
      {/* <h2 className="desc">
        Simplify your reading with SummarEase, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2> */}
    </header>
  );
}

export default Hero;
