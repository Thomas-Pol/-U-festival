'use client';

import informationData from '../data/information.json';

export default function Info() {
  return (
    <div className="w-full h-6/8 flex items-center justify-center overflow-y-scroll">
      <div className="w-9/10 h-9/10 max-w-3xl mx-auto flex flex-col gap-4">
        {Object.entries(informationData).map(([key, info], index) => (
          <div key={key}>
            <details className="group">
              <summary className="flex bg-[#247BA0] justify-between items-center font-medium cursor-pointer rounded-xl p-2">
                <span id={`main-title-${index}`} className="text-white text-xl">
                  {info.title}
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

              <div className="text-black p-2 mt-3 group-open:animate-fadeIn">
                {/* Description shown under summary */}
                <p className="mb-3 italic">{info.description}</p>

                {/* Subcontent */}
                {info.subcontent &&
                  info.subcontent.map((sub, subIndex) => (
                    <div key={subIndex} className="mt-2">
                      <h2
                        id={`subtext-title-${index}-${subIndex}`}
                        className="font-semibold text-[#247BA0]"
                      >
                        {sub.title}
                      </h2>
                      {sub.text && (
                        <p id={`subtext-${index}-${subIndex}`}>{sub.text}</p>
                      )}
                      {sub.text2 && (
                        <p id={`subtext2-${index}-${subIndex}`}>{sub.text2}</p>
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
