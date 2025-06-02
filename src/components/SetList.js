'use client';

import { useState } from 'react';
import setlistData from '../data/setlist.json';
import { useLanguage } from "../components/LanguageContext";


const START_TIME = 10 * 60;
const BLOCK_MINUTES = 15;
const TOTAL_BLOCKS = 56;

function timeToBlock(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes;
  return Math.floor((totalMinutes - START_TIME) / BLOCK_MINUTES) + 1;
}

function durationToBlocks(minutes) {
  return Math.floor(minutes / BLOCK_MINUTES);
}

export default function SetList() {
  const { language } = useLanguage();
  const [selectedDay, setSelectedDay] = useState('saturday');
  const stages = Object.entries(setlistData.setlist[selectedDay]);

  const rowTemplate = `1fr ${stages.map(() => '2fr').join(' ')}`;

  return (
    <div className="w-full h-6/8 flex flex-col items-center overflow-hidden">

      <div className="w-4/5 flex justify-between my-4">
        <button
          className={`w-[47%] py-2 rounded-3xl shadow-md shadow-black ${
            selectedDay === 'saturday' ? 'bg-[#F03228] text-white' : 'bg-white'
          }`}
          onClick={() => setSelectedDay('saturday')}
        >
          {language === 'en' ? 'Saturday' : 'Zaterdag'}
          
        </button>
        <button
          className={`w-[47%] py-2 rounded-3xl shadow-md shadow-black ${
            selectedDay === 'sunday' ? 'bg-[#F03228] text-white' : 'bg-white'
          }`}
          onClick={() => setSelectedDay('sunday')}
        >
          {language === 'en' ? 'Sunday' : 'Zondag'}
        </button>
      </div>

      <div className="w-4/5 h-full flex overflow-x-auto relative">
        <div
          className="sticky left-0 z-10 bg-white border-r border-gray-300"
          style={{
            minWidth: '80px',
            display: 'grid',
            gridTemplateRows: rowTemplate,
            height: '100%',
          }}
        >
          <div className="w-full flex items-center justify-end p-2 font-bold border-b border-gray-300 dark:bg-black dark:text-white">
            Time
          </div>

          {stages.map(([stage], index) => (
            <div
              key={stage}
              className="flex items-center justify-end pr-2 border-b border-gray-200 font-medium dark:bg-black dark:text-white"
            >
              {stage}
            </div>
          ))}
        </div>

        <div
          className="grid gap-y-1"
          style={{
            gridTemplateRows: rowTemplate,
            gridTemplateColumns: `repeat(${TOTAL_BLOCKS}, 60px)`,
            minWidth: `${60 * TOTAL_BLOCKS}px`,
            width: '100%',
            height: '100%',
          }}
        >
          {Array.from({ length: TOTAL_BLOCKS }).map((_, i) => {
            const minutes = START_TIME + i * BLOCK_MINUTES;
            const hour = Math.floor(minutes / 60);
            const min = minutes % 60;
            const timeLabel = `${hour}:${min.toString().padStart(2, '0')}`;
            return (
              <div
                key={`time-${i}`}
                className="text-xs text-right mr-1 pr-1 font-semibold border-b border-gray-300 flex items-center justify-end dark:text-whiteq"
                style={{
                  gridColumnStart: i + 1,
                  gridRowStart: 1,
                }}
              >
                {timeLabel}
              </div>
            );
          })}

          {stages.map(([stageName, artistList], stageIndex) => {
            const rowStart = stageIndex + 2;
            const artists = Object.values(artistList);

            return artists.map((artist) => {
              const colStart = timeToBlock(artist.start_time);
              const colSpan = durationToBlocks(artist.total_time);

              return (
                <div
                  key={`${stageName}-${artist.name}`}
                  style={{
                    gridColumnStart: colStart,
                    gridColumnEnd: colStart + colSpan,
                    gridRowStart: rowStart,
                  }}
                  className="bg-green-500 text-white text-xs rounded-md mr-1 p-1 shadow-md"
                >
                  {artist.name}
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
}
