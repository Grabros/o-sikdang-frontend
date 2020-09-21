import React, { useEffect } from "react";

import { FiMapPin } from "react-icons/fi";
import o_sikdang_logo from "../../assets/images/o-sikdang_logo.png";
import {
  LocationPinWrapper,
  LocationPinContainer,
} from "./LocationPin.element";

function LocationPin() {
  function getLocation() {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        function (position) {
          alert(position.coords.latitude + " " + position.coords.longitude);
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }

  return (
    <LocationPinWrapper>
      <LocationPinContainer>
        <img src={o_sikdang_logo} alt="오늘의 식당 로고" />
        <div className="speech-bubble">
          <h3>“가까운 주변 맛집을 추천 받아보세요.”</h3>
        </div>
        <div className="location-pin" onClick={getLocation}>
          <FiMapPin />
          <p>CLICK</p>
        </div>
      </LocationPinContainer>
    </LocationPinWrapper>
  );
}

export default LocationPin;
