"use client";

import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "@/public/assets";
import Image from "next/image";

function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async function () {
    alert("Submitted");
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center"
        >
          <Image
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            type="submit"
          >
            &#8629;
          </button>

          {/* Browse URL History */}
          {/* Display Results */}
        </form>
      </div>
    </section>
  );
}

export default Demo;