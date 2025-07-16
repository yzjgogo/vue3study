// connect的参数:
// 参数一: 函数
// 参数二: 函数
// 返回值: 函数 => 高阶组件

import { PureComponent } from "react";
//connect函数实现步骤3:鉴于步骤2的问题，我们可以定义context
import { StoreContext } from "./StoreContext";
// connect函数实现步骤2:这样导入store，不具有灵活性，如果你想把你封装的这个connect作为独立的依赖发布出去，这个store无法解耦。
// import store from "../store"

/**
 
connect函数实现步骤1:定义connect函数
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  // 高阶组件: 函数
  return function(WrapperComponent) {
    class NewComponent extends PureComponent {
      //connect函数实现步骤7:第6步之后，构造器的第2个参数就是StoreContext了
      constructor(props, context) {
      // constructor(props) {
        super(props)
        //connect函数实现步骤9-1：
        this.state = mapStateToProps(context.getState())
      }

      componentDidMount() {
        //connect函数实现步骤8：context属于NewComponent实例了，所以可以this.context使用
        this.unsubscribe = this.context.subscribe(() => {
          // this.forceUpdate() 也可以强制更新
          //connect函数实现步骤9-2:9-1和9-2配合就会实现组件更新
          this.setState(mapStateToProps(this.context.getState()))
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const stateObj = mapStateToProps(this.context.getState())
        const dispatchObj = mapDispatchToProps(this.context.dispatch)
        return <WrapperComponent {...this.props} {...stateObj} {...dispatchObj}/>
      }
    }
//connect函数实现步骤6：组件接收这个context
    NewComponent.contextType = StoreContext

    return NewComponent
  }
}
