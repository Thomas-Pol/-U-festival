'use client';

import {
  MapContainer,
  ImageOverlay,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
import L, { marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from 'react';

const entranceIcon = new L.Icon({
  iconUrl: "/marker_entrance_exit.svg", // de url naar het svg plaatje
  iconSize: [100, 100], // dit geeft aan wat de grootte van de marker is

});

const stagePonton = new L.Icon({
  iconUrl: "/marker_stage1_ponton.svg", // de url naar het svg plaatje
  iconSize: [40, 40], // dit geeft aan wat de grootte van de marker is
});

const stageLake = new L.Icon({
  iconUrl: "/marker_stage2_the_lake.svg", // de url naar het svg plaatje
  iconSize: [40, 40], // dit geeft aan wat de grootte van de marker is
});

const stageClub = new L.Icon({
  iconUrl: "/marker_stage3_the_club.svg", // de url naar het svg plaatje
  iconSize: [40, 40], // dit geeft aan wat de grootte van de marker is
});

const stageHangar = new L.Icon({
  iconUrl: "/marker_stage4_hangar.svg", // de url naar het svg plaatje
  iconSize: [40, 40], // dit geeft aan wat de grootte van de marker is
});

const markerLocker = new L.Icon({
  iconUrl: "/marker_locker.svg", // de url naar het svg plaatje
  iconSize: [30, 30], // dit geeft aan wat de grootte van de marker is
});

const markerFood = new L.Icon({
  iconUrl: "/marker_food.svg", // de url naar het svg plaatje
  iconSize: [30, 30], // dit geeft aan wat de grootte van de marker is
});

const markerToilet = new L.Icon({
  iconUrl: "/marker_toilet.svg", // de url naar het svg plaatje
  iconSize: [30, 30], // dit geeft aan wat de grootte van de marker is
});

const markerBar = new L.Icon({
  iconUrl: "/marker_bar.svg", // de url naar het svg plaatje
  iconSize: [30, 30], // dit geeft aan wat de grootte van de marker is
});

const markerIceCream = new L.Icon({
  iconUrl: "/marker_ice_cream.svg", // de url naar het svg plaatje
  iconSize: [30, 30], // dit geeft aan wat de grootte van de marker is
});

const markerMerchandise = new L.Icon({
  iconUrl: "/marker_merchandise.svg", // de url naar het svg plaatje
  iconSize: [30, 30], // dit geeft aan wat de grootte van de marker is
});

const markerFirstAid = new L.Icon({
  iconUrl: "/marker_first_aid.svg", // de url naar het svg plaatje
  iconSize: [30, 30], // dit geeft aan wat de grootte van de marker is
});

const bounds = [
  [0, 0], // tot waar de kaart gaat aan de bovenkant
  [9747, 5651], // tot waar de kaart gaat aan de onderkant
];

export default function MapView() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  return (
    <div className="w-full h-6/8 flex justify-center items-center">
  <div className="w-9/10 h-9/10 relative">
    <MapContainer
      crs={L.CRS.Simple}
      bounds={bounds}
      maxBounds={bounds}
      maxBoundsViscosity={3.0}
      style={{ height: "100%", width: "100%" }}
      minZoom={-3}
      className="z-10 rounded-2xl"
    >
      <ImageOverlay url="/kaart.svg" bounds={bounds} />
      <Marker position={[3025, 850]} icon={entranceIcon} />
      <Marker
        position={[7700, 2100]}
        icon={stagePonton}
        eventHandlers={{ click: () => setSelectedMarker("stage1") }}
      />
      <Marker
        position={[4550, 3100]}
        icon={stageLake}
        eventHandlers={{ click: () => setSelectedMarker("stage2") }}
      />
      <Marker
        position={[2900, 3300]}
        icon={stageClub}
        eventHandlers={{ click: () => setSelectedMarker("stage3") }}
      />
      <Marker
        position={[950, 4650]}
        icon={stageHangar}
        eventHandlers={{ click: () => setSelectedMarker("stage4") }}
      />
      <Marker
        position={[6800, 1050]}
        icon={markerLocker}
      />
      <Marker
        position={[7400, 1000]}
        icon={markerLocker}
      />
       <Marker
        position={[8600, 2000]}
        icon={markerFood}
      />
      <Marker
        position={[6350, 3200]}
        icon={markerFood}
      />
      <Marker
        position={[5000, 4000]}
        icon={markerToilet}
      />
       <Marker
        position={[675, 4200]}
        icon={markerToilet}
      />
       <Marker
        position={[9000, 1000]}
        icon={markerToilet}
      />
      <Marker
        position={[8700, 1500]}
        icon={markerBar}
      />
      <Marker
        position={[4900, 3350]}
        icon={markerBar}
      />
      <Marker
        position={[2725, 4050]}
        icon={markerBar}
      />
      <Marker
        position={[1850, 4100]}
        icon={markerBar}
      />
       <Marker
        position={[7200, 1900]}
        icon={markerIceCream}
      />
      <Marker
        position={[5900, 3325]}
        icon={markerIceCream}
      />
      <Marker
        position={[3700, 3650]}
        icon={markerIceCream}
      />
      <Marker
        position={[1600, 4500]}
        icon={markerIceCream}
      />
        <Marker
        position={[3400, 3300]}
        icon={markerMerchandise}
      />
      <Marker
        position={[6725, 3375]}
        icon={markerMerchandise}
      />
      <Marker
        position={[7950, 1250]}
        icon={markerMerchandise}
      />
      <Marker
        position={[7975, 3900]}
        icon={markerFirstAid}
      />
    </MapContainer>

    {selectedMarker === "stage1" && (
      <div className="absolute h-3/10 bottom-0 left-0 w-full bg-white p-2 shadow-lg z-50 flex flex-col gap-2">
        
        <button
          onClick={() => setSelectedMarker(null)}
          className="w-[40px] h-[40px] border-2 rounded-xl mt-2 text-black"
        >
          X
        </button>
        <div className="w-full h-7/10 bg-red-500">

        </div>
      </div>
    )}
  </div>
</div>

  );
}
