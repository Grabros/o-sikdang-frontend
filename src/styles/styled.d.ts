import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    basicBg: string;
    basicFont: string;
    basicThemeBtnBg: string;

    yellow: string;
    white: string;
    black: string;
    green: string;
  }
}
