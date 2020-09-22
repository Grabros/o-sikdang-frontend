import React from "react";
import { SwitchModeWrapper } from "./SwitchMode.element";

interface ISwitchMode {
  changeTheme: (event: React.MouseEvent) => void;
  isDark: Boolean;
}

function SwitchMode({ changeTheme, isDark }: ISwitchMode) {
  return (
    <SwitchModeWrapper onClick={changeTheme}>
      {isDark ? "🌝 라이트 모드로 보기" : "🌚 다크 모드로 보기"}
    </SwitchModeWrapper>
  );
}

export default SwitchMode;
