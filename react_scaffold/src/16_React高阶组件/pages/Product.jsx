import React, { PureComponent } from 'react'
import ThemeContext from '../context/theme_context'
import withTheme from '../hoc/with_theme'

//注释掉的部分是以前的使用方式，参考：react_scaffold\src\09_非父子通信-Context
// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>
//         Product:
//         <ThemeContext.Consumer>
//           {
//             value => {
//               return <h2>theme:{value.color}-{value.size}</h2>
//             }
//           }
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }

// export default Product

export class Product extends PureComponent {
  render() {
    const { color, size } = this.props

    return (
      <div>
        <h2>Product: {color}-{size}</h2>
      </div>
    )
  }
}

//这里导出的组件是经过withTheme高阶组件处理过的Product,是已经使用Consumer消费了ThemeContext的组件，且把消费的数据作为属性传给Product组件
export default withTheme(Product)
