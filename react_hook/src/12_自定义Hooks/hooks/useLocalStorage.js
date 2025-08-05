import { useEffect } from "react"
import { useState } from "react"

function useLocalStorage(key) {
  //接收了一个函数而非直接值作为参数，这种方式称为"懒初始化"（lazy initialization）。这对性能优化很重要，因为这个函数只会在组件的初次渲染时执行，而不会在重新渲染时重复执行。
  // 1.从localStorage中获取数据, 并且数据数据创建组件的state
  const [data, setData] = useState(() => {
    const item = localStorage.getItem(key)
    if (!item) return ""
    return JSON.parse(item)
  })

  // 2.监听data改变, 一旦发生改变就存储data最新值
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [data])

  // 3.将data/setData的操作返回给组件, 让组件可以使用和修改值
  return [data, setData]
}


export default useLocalStorage
