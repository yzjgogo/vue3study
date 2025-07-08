import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced_props'
import About from './pages/About'

/**
 
1：参数‘function(props) {
  return <h1>Home: {props.name}-{props.level}-{props.banners}</h1>
}’是一个组件(函数式组件)

2：通过高阶组件enhancedUserInfo对这个组件进行包装，返回一个新的组件NewComponent

3：<Home banners={["轮播1", "轮播2"]}/> 这样使用时，在enhancedUserInfo中的NewComponent中通过props获取到banners属性

4：在enhancedUserInfo总的NewComponent中，把props和state.userInfo里的属性都作为OriginComponent的属性传入，

5：因此，这里可以访问到props.name, props.level, props.banners等属性
 */
const Home = enhancedUserInfo(function(props) {
  return <h1>Home: {props.name}-{props.level}-{props.banners}</h1>
})

/**
 * 同理Home
 */
const Profile = enhancedUserInfo(function(props) {
  return <h1>Profile: {props.name}-{props.level}</h1>
})

/**
 * 同理Home
 */
const HelloFriend = enhancedUserInfo(function(props) {
  return <h1>HelloFriend: {props.name}-{props.level}</h1>
})

/**
 进入./pages/About，看About类组件怎么通过enhancedUserInfo被增强的：
 在exprot时直接用enhancedUserInfo包裹下
*/
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home banners={["轮播1", "轮播2"]}/>
        <Profile/>
        <HelloFriend/>

        <About/>
      </div>
    )
  }
}

export default App