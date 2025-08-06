import { memo } from "react"

/**
 * 函数式组件没有生命周期回调函数，更没有shouldComponentUpdate方法，
 * 因此React提供了一个优化的函数式组件：memo。
 * 类似类组件的PureComponent，memo也是对比前后props是否发生变化，只有props发生变化时才会重新渲染组件。是浅比较吗？
 */
const Profile = memo(function(props) {
  console.log("profile render")
  return <h2>Profile: {props.message}</h2>
})

export default Profile
