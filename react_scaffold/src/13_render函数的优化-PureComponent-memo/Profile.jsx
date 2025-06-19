import { memo } from "react"

/**
 * 函数式组件没有生命周期回调函数，更没有shouldComponentUpdate方法，
 * 因此React提供了一个优化的函数式组件：memo。
 */
const Profile = memo(function(props) {
  console.log("profile render")
  return <h2>Profile: {props.message}</h2>
})

export default Profile
