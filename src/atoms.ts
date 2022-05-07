import { atom } from "recoil";

// key와 디폴트 값이 필요하다 key는 atom마다 유일한 키 이어야 한다.
export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
