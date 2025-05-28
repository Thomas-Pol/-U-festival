'use client';

import { useState } from 'react';
import informationData from '../data/information.json';

export default function Info() {

  return (
    <div className="w-full h-6/8 flex items-center justify-center">
          <div class="w-9/10 h-9/10 max-w-3xl mx-auto flex flex-col gap-4">
            <div>
                <details className="group">
                    <summary className="flex bg-[#247BA0] justify-between items-center font-medium cursor-pointer rounded-xl p-2">
                        <span className="text-white text-xl">Algemeen & contact</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="white"
                                stroke-width="1.5">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-gray-600 p-2 mt-3 group-open:animate-fadeIn">
                        Het ❤️U Festival is voor (nieuwe) studenten in de regio Utrecht en is een aanvulling op UIT.
                        <br></br><br></br>Adres
                        <br></br>Locatie: Strijkviertel, Utrecht
                        <br></br>Navigatieadres: Strijkviertelweg, Utrecht
                        <br></br><br></br>Datum & Openingstijden
                        <br></br>Zaterdag 6 september 2025 - 12:00 tot 23:00 uur
                    </p>
                </details>
            </div>
         <div>
                <details className="group">
                    <summary className="flex bg-[#247BA0] justify-between items-center font-medium cursor-pointer rounded-xl p-2">
                        <span className="text-white text-xl">Bereikbaarheid</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="white"
                                stroke-width="1.5">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                        Fiets
                        <br></br>Er is een grote gratis fietsenstalling aanwezig waar je jouw fiets de gehele dag kunt stallen.
                        <br></br><br></br>Auto
                        <br></br>Je kunt een parkingticket aanschaffen. Parkeren kan op P+R Papendorp, volg hiervoor de borden 'P online ticket'. Heb je geen ticket van te voren gekocht? Dan kun je bij de parkeerwachter op locatie een parkeerticket aanschaffen (PIN ONLY). Let wel op: VOL=VOL
                    </p>
                </details>
            </div>
            <div>
                <details className="group">
                    <summary className="flex bg-[#247BA0] justify-between items-center font-medium cursor-pointer rounded-xl p-2">
                        <span className="text-white text-xl">Hoe kan ik contact opnemen met een VA?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="white"
                                stroke-width="1.5">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                        Ga naar onze contactpagina en vul het formulier in. Wij nemen zo snel mogelijk contact met je
                        op!
                    </p>
                </details>
            </div>
          </div>
      </div>
  );
}