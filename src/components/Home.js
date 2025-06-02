"use client";

import newsData from "../data/news.json";
import { useLanguage } from "../components/LanguageContext"; // adjust path as needed

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="w-full h-6/8 flex items-center justify-center overflow-y-scroll">
      <div className="w-9/10 h-9/10 max-w-3xl mx-auto flex flex-col gap-4">
        {Object.entries(newsData).map(([key, news], index) => (
          <div key={key} className="border-2 rounded-xl p-4 dark:border-white">
            <h2 className="text-xl pb-2 font-bold text-[#247BA0]">
              {news.title[language]}
            </h2>
            <p className="dark:text-white">{news.description[language]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
