import React, { PureComponent } from 'react'
import Detail from './pages/Detail'
/**
  这里的逻辑是这样的：
  我们想知道Detail组件渲染花费了多少时间

  则通过logRenderTime高阶组件来包裹Detail组件，
  在logRenderTime高阶组件中，记录Detail组件渲染前后的时间

 */
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Detail/>
      </div>
    )
  }
}

export default App