import { createContext } from "react";
//connect函数实现步骤4:定义并导出context,这个context用于提供全局的store,这样redux_tool_kit\src\hoc\connect.js里的store就解耦了
export const StoreContext = createContext()
