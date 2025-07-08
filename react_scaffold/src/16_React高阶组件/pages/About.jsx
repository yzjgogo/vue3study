import React, { PureComponent } from 'react'
import enhancedUserInfo from '../hoc/enhanced_props'

export class About extends PureComponent {
  render() {
    return (
      // 这里的this.props.name是通过enhancedUserInfo注入的
      <div>About: {this.props.name}</div>
    )
  }
}

export default enhancedUserInfo(About)
