import React, { PureComponent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      books: [
        { id: 111, name: '你不知道JS', price: 99 },
        { id: 222, name: 'JS高级程序设计', price: 88 },
        { id: 333, name: 'Vuejs高级设计', price: 77 }
      ]
    }
  }

  addNewBook() {
    const books = [...this.state.books]
    books.push({
      id: new Date().getTime(),
      name: 'React高级程序设计',
      price: 99
    })
    this.setState({ books })
  }

  removeBook(index) {
    const books = [...this.state.books]
    books.splice(index, 1)
    this.setState({ books })
  }

  render() {
    const { books } = this.state

    /**
     列表中item的添加和移除动画：TransitionGroup
     TransitionGroup使用起来也很简单，最终还是交给CSSTransition来处理

     1：component属性：指定TransitionGroup渲染的元素类型，默认是div，这里我们指定TransitionGroup最终渲染成ul元素
      2：因为是在列表中，所以我们需要给CSSTransition指定key属性，key属性的值需要是唯一的
      其它的都是CSSTransition的用法了
      ./style.css

      这里还没解findDOMNode决的问题，需要给CSSTransition使用nodeRef指定包裹的元素，这里需要给列表的每一个li使用ref
     */
    return (
      <div>
        <h2>书籍列表:</h2>
        <TransitionGroup component="ul">
          {books.map((item, index) => {
            return (
              <CSSTransition key={item.id} classNames="book" timeout={1000}>
                <li>
                  <span>
                    {item.name}-{item.price}
                  </span>
                  <button onClick={(e) => this.removeBook(index)}>删除</button>
                </li>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button onClick={(e) => this.addNewBook()}>添加新书籍</button>
      </div>
    )
  }
}

export default App
