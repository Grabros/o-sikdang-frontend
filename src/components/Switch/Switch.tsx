import React from "react";
import { SwitchWrapper } from "./Switch.element";

interface ISwitch {
  changeTheme: (event: React.MouseEvent) => void;
  isDark: Boolean;
}

function Switch({ changeTheme, isDark }: ISwitch) {
  return (
    <SwitchWrapper onClick={changeTheme}>
      {isDark ? "🌝 라이트 모드로 보기" : "🌚 다크 모드로 보기"}
    </SwitchWrapper>
  );
}

export default Switch;
