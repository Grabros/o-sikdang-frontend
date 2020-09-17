import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      basicBg: string;
      basicFont: string;

      yellow_1: string;
    };
  }
}
