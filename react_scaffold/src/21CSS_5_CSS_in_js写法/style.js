import styled from "styled-components"
import {
  primaryColor,
  largeSize
} from "./style/variables"

/*
CSS-in-JS使用步骤4:根据es6的标签模板字符串语法实现使用js编写css代码，注意这里要用styled.div而不是div，其实style.div是一个函数（标签模板字符串语法就是函数的使用），后面跟``,在``里面就可以完全像写css文件一样编写css代码了（默认情况下因为这里本质上是js代码，你所写的css样式没有高亮显示，因此可以给vs-code安装‘vscode-styled-components’插件实现css的高亮）。
*/ 
export const AppWrapper = styled.div`
  .footer {
    border: 1px solid orange;
  }
`

// const obj = {
//   name: (props) => props.name || "why"
// }


/*
CSS-in-JS使用步骤5:在我们定义的style.js文件中可以写多个styled组件，下面的SectionWrapper就是一个组件，且可导出多个供引用处使用。
*/ 
// CSS-in-JS使用步骤6-3：如果外部没有传入数据，可以定义默认值：使用attrs方法，里面传入的是监听函数。
export const SectionWrapper = styled.div.attrs(props => ({
  tcolor: props.color || "blue"
}))`
  border: 1px solid red;

  /* 
  CSS-in-JS使用步骤6:
  CSS in JS中可以使用组件的数据：参考CSS-in-JS使用步骤6-1，CSS-in-JS使用步骤6-2
  */
  .title {
    /* CSS-in-JS使用步骤6-2：使用引用处传递过来的数据,注意要以箭头函数的形式 */
    font-size: ${props => props.size}px;
    color: ${props => props.tcolor};

    &:hover {
      background-color: purple;
    }
  }

  /**
  CSS-in-JS使用步骤7:可以单独定义样式值文件./style/variables.js,然后在CSS-in-JS中使用这些变量
  */
  .content {
    font-size: ${largeSize}px;
    color: ${primaryColor};
  }
`
