//useImperativeHandle使用步骤1:导入
import React, { memo, useRef, forwardRef, useImperativeHandle } from 'react'
/**
  useImperativeHandle使用步骤
 */
//useImperativeHandle使用步骤4:在子组件中使用forwardRef接收父组件传递过来的ref
const HelloWorld = memo(forwardRef((props, ref) => {
// useImperativeHandle使用步骤6：在子组件中再定义一个ref
  const inputRef = useRef()

  // useImperativeHandle使用步骤7：使用useImperativeHandle来定义暴露给父组件的操作方法数据等，useImperativeHandle的第一个参数才接收父组件传递过来的ref，最终，useImperativeHandle会把第一个ref参数和第二个函数参数的返回值合并，这样，在父组件中就可以通过ref来调用子组件暴露的方法了
  useImperativeHandle(ref, () => {
    return {
      focus() {
        console.log("focus")
        inputRef.current.focus()
      },
      setValue(value) {
        inputRef.current.value = value
      }
    }
  })
  // useImperativeHandle使用步骤5:我们并没有直接把父组件传递过来的ref用到子组件的某个元素上，因为如果这样做的话，父组件就拿到了子组件中这个元素的所有信息，这很危险。比如在父组件中使用inputRef.current.value=''，这种操作直接就把子组件的这个元素数据清空了。我们应该只暴露给父组件一些必要的操作方法，而不是直接暴露DOM元素。看步骤6，这里使用步骤6定义的子组件自己用的ref
  return <input type="text" ref={inputRef}/>
}))


const App = memo(() => {
  const titleRef = useRef()
  //useImperativeHandle使用步骤2:使用useRef()创建一个ref对象
  const inputRef = useRef()

  // useImperativeHandle使用步骤8:这里的focus和setValue并不是HelloWorld组件中那个input元素的focus和setValue方法，而是HelloWorld组件中通过useImperativeHandle暴露给父组件的focus和setValue方法,这就很安全了
  function handleDOM() {
    // console.log(inputRef.current)
    inputRef.current.focus()
    // inputRef.current.value = ""
    inputRef.current.setValue("哈哈哈")
  }

  return (
    <div>
      <h2 ref={titleRef}>哈哈哈</h2>
      {/* useImperativeHandle使用步骤3：将步骤2创建的ref对象传递给子组件 */}
      <HelloWorld ref={inputRef}/>
      <button onClick={handleDOM}>DOM操作</button>
    </div>
  )
})

export default App
