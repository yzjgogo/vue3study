//函数式组件的优化用memo，下个课程看到
function Profile(props) {
  console.log("profile render")
  return <h2>Profile: {props.message}</h2>
}

export default Profile
