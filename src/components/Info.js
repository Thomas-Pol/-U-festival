"use client";

import informationData from "../data/information.json";
import { useLanguage } from "../components/LanguageContext"; // adjust path as needed

export default function Info() {
  const { language } = useLanguage();

  return (
    <div className="w-full h-6/8 flex items-center justify-center overflow-y-scroll">
      <div className="w-9/10 h-9/10 max-w-3xl mx-auto flex flex-col gap-4">
        {Object.entries(informationData).map(([key, info], index) => (
          <div key={key}>
            <details className="group">
              <summary className="flex h-15 bg-[rgb(36,123,160)] justify-between items-center font-medium cursor-pointer rounded-xl p-2">
                <span
                  id={`main-title-${index}`}
                  className="text-white text-2xl dark:text-white"
                >
                  {info.title[language]}
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="1.5"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>

              <div className="text-black text-xl p-2 mt-3 group-open:animate-fadeIn">
                <p className="mb-3 dark:text-white">{info.description[language]}</p>

                {info.subcontent &&
                  info.subcontent.map((sub, subIndex) => (
                    <div key={subIndex} className="mt-2 dark:text-white">
                      <h2
                        id={`subtext-title-${index}-${subIndex}`}
                        className="font-semibold text-[#247BA0]"
                      >
                        {sub.title[language]}
                      </h2>
                      {sub.text && (
                        <p id={`subtext-${index}-${subIndex}`}>{sub.text[language]}</p>
                      )}
                      {sub.text2 && (
                        <p id={`subtext2-${index}-${subIndex}`}>
                          {sub.text2[language]}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
