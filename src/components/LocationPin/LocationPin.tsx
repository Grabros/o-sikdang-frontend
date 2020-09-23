import React from "react";
import { Link } from "react-router-dom";

import { FiMapPin } from "react-icons/fi";
import o_sikdang_logo from "../../assets/images/o-sikdang_logo.png";
import {
  LocationPinWrapper,
  LocationPinContainer,
} from "./LocationPin.element";

function LocationPin() {
  return (
    <LocationPinWrapper>
      <LocationPinContainer>
        <img src={o_sikdang_logo} alt="오늘의 식당 로고" />
        <div className="speech-bubble">
          <h3>“가까운 주변 맛집을 추천 받아보세요.”</h3>
        </div>
        <Link className="location-pin" to="/map">
          <FiMapPin />
          <p>CLICK</p>
        </Link>
      </LocationPinContainer>
    </LocationPinWrapper>
  );
}

export default LocationPin;
