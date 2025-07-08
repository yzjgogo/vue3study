import { PureComponent } from "react";

function logRenderTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      console.log(`当前页面开始渲染: ${OriginComponent.name}`)
      this.beginTime = new Date().getTime()
    }
  
    componentDidMount() {
      console.log(`当前页面渲染完成: ${OriginComponent.name}`)
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.beginTime
      console.log(`当前${OriginComponent.name}页面花费了${interval}ms渲染完成!`)
    }

    render() {
      return <OriginComponent {...this.props}/>
    }
  }
}

export default logRenderTime
