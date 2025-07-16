import { createStore, compose } from 'redux'
import reducer from './reducer'
import { log, thunk, applyMiddleware } from "./middleware"
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
  //不再使用react-thunk中间件
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
const store = createStore(reducer)



/*
这个项目是从“E:\web\vue3\vue3study\react_redux”复制过来的，目的是为了手动实现类似“react-thunk”这个中间件，package.json中已经删除了’redux-thunk‘依赖。

需求1：要求在每次store.dispatch方法被调用时，打印出当前派发的action和派发之后的结果。
这个需求我们就可以通过中间件实现

function log(store) {
  //1:先把原来的store.dispatch方法保存起来
  const next = store.dispatch

  function logAndDispatch(action) {
  //3：此时已经拦击到了用户对store.dispatch方法的调用,可以添加自己的逻辑了
    console.log('当前派发的action:', action)
    //4：自己的逻辑添加完成后，还要继续用户期望的实际的原来的dispatch的调用。
    next(action)
    console.log('派发之后的结果:', store.getState())
  }

  //2：把我们自己的函数，替换成dispathc函数，方便拦截
  store.dispatch = logAndDispatch //偷梁换柱
}
log(store) //log方法定义好后要立刻调用一次，目的是把store.dispatch方法替换为logAndDispatch方法,因为store是全局的相当于是单例的，以后项目中的任何地方调用store.dispatch方法实际上调用的都是logAndDispatch方法,这样我们就拦截到了用户对dispatch方法的调用,可以在logAndDispatch添加自己的逻辑了。


//需求2：store.dispatch默认只支持传递对象参数，我们让他也支持传递函数参数，这实际上就是'react thunk'这个中间件的功能
这个需要我们可以自己通过中间件实现
function thunk(store) {
  const next = store.dispatch
  function dispatchThunk(action) {
    // 判断action是否是函数，如果是函数，则执行这个函数，则即使这个函数里面又调用了dispatch(函数)，还会走到这里判断，如果这个函数里面dispatch(对象)，则会走到next(action)分支
    if (typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }
  store.dispatch = dispatchThunk
}
thunk(store)//同样，thunk定义好后要立刻调用一次，要拦截到用户对store.dispatch方法的调用，才能做相应的处理。

以上的log和thunk就是我们自己实现的两个中间件的案例

但是代码都写到这里比较不好维护，因为我们抽离到E:\web\vue3\vue3study\react_redux_middleware\src\store\middleware 中，自己看看代码怎么组织的就就行了

*/


applyMiddleware(store, log, thunk)

export default store
