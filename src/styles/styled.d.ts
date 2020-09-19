import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    basicBg: string;
    basicFont: string;
    yellow: string;
  }
}
