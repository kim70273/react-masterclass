// import original module declarations
import "styled-components";

// and extend them!
// styled-components를 import해서, styled-components의 테마 정의를 확장한다
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
