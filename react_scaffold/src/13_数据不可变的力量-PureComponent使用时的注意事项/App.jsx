import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      books: [
        { name: "你不知道JS", price: 99, count: 1 },
        { name: "JS高级程序设计", price: 88, count: 1 },
        { name: "React高级设计", price: 78, count: 2 },
        { name: "Vue高级设计", price: 95, count: 3 },
      ],
      friend: {
        name: "kobe"
      },
      message: "Hello World"
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   shallowEqual(nextProps, this.props)
  //   shallowEqual(nextState, this.state)
  // }

  
/**
 * 因为PureComponent会对props和state进行浅比较，
 * 
 */
  addNewBook() {
    const newBook = { name: "Angular高级设计", price: 88, count: 1 }

    // 1.这种方式books还是原来的对象，对象引用不变，PureComponent认为数据没有变化，不会触发render函数
    // this.state.books.push(newBook)
    // this.setState({ books: this.state.books })

    // 2.赋值一份books, 在新的books中修改, 设置新的books,设置不同的对象，PureComponent会认为数据发生了变化，触发render函数
    const books = [...this.state.books]
    books.push(newBook)

    this.setState({ books: books })
  }

  addBookCount(index) {
    // this.state.books[index].count++
    const books = [...this.state.books]
    books[index].count++
    this.setState({ books: books })
  }

  render() {
    const { books } = this.state

    return (
      <div>
        <h2>数据列表</h2>
        <ul>
          {
            books.map((item, index) => {
              return (
                <li key={index}>
                  <span>name:{item.name}-price:{item.price}-count:{item.count}</span>
                  <button onClick={e => this.addBookCount(index)}>+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.addNewBook()}>添加新书籍</button>
      </div>
    )
  }
}

export default App