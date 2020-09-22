import React, { useEffect, useState } from "react";
import MapLoading from "./MapLoading";

declare global {
  interface Window {
    kakao: {
      maps: any;
    };
  }
}

interface IPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

function Map() {
  const [isLoading, setIsLoading] = useState(true);

  function getLocation(print: Function) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          print(position);
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: Infinity,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }

  function printMap(position: IPosition) {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      ),
      level: 2,
    };

    new window.kakao.maps.Map(container, options);
    setIsLoading(false);
  }

  useEffect(() => {
    getLocation(printMap);
  }, []);

  return (
    <div id="map" style={{ width: "100vw", height: "100vh" }}>
      {isLoading && <MapLoading />}
    </div>
  );
}

export default Map;
