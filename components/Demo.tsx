"use client";

import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "@/public/assets";
import { useLazyGetSummaryQuery } from "@/services/article";

import Image from "next/image";

function Demo() {
  // Define state for single article, all articles, and copying to clipboard
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState<
    { url: string; summary: string }[]
  >([]);
  const [copied, setCopied] = useState<string | boolean>("");

  // RTK lazy query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Load data from localStorage on mount
  useEffect(() => {
    const articlesFromLocalStorage = localStorage.getItem("articles");
    if (articlesFromLocalStorage) {
      try {
        const parsedArticles = JSON.parse(articlesFromLocalStorage);

        if (Array.isArray(parsedArticles)) {
          setAllArticles(parsedArticles);
        } else {
          console.error("Invalid data format in localStorage");
        }
      } catch (error) {
        console.error("Error parsing data from localStorage:", error);
      }
    }
  }, []);

  // Handle submission of a new article url
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );

    if (existingArticle) return setArticle(existingArticle);

    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      // update state and local storage
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  // Copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  // Trigger onSubmit when the enter key is pressed
  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className="mt-16 w-full ">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          id="search_input"
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          {/* <Image
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          /> */}

          <input
            type="url"
            placeholder="paste article link here"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            onKeyDown={handleKeyDown}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn border peer-focus:border-[#f5f5f5] peer-focus:text-[#f5f5f5] "
          >
            <p>↵</p>
          </button>
        </form>

        {/* Browse History */}
        {allArticles.length > 0 ? (
          <p className="text-[#f5f5f5] font-mono mt-6 text-sm">
            Article History
          </p>
        ) : (
          ""
        )}
        <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
          {allArticles.reverse().map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <Image
                  src={copied === item.url ? tick : copy}
                  alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 font-mono text-[#f5f5f5] text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Result */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <Image
            src={loader}
            alt="loader"
            className="w-20 h-20 object-contain"
          />
        ) : error ? (
          <p className="font-inter font-bold text-[#f5f5f5] text-center">
            Well, that wasn&apos;t supposed to happen...
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-mono font-md text-[#f5f5f5] text-sm">
                Article Summary
              </h2>
              <div className="summary_box">
                <p className="font-mono font-medium text-sm text-[#f5f5f5]">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Demo;
