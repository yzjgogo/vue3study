import { createContext } from "react";

const UserContext = createContext()
const ThemeContext = createContext()

//useContext使用步骤1：定义并导出context
export {
  UserContext,
  ThemeContext
}
