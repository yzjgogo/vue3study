import React, { PureComponent } from 'react'
import { connect } from "../hoc"
import { addNumber } from "../store/features/counter"

export class About extends PureComponent {
  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>About Counter: {counter}</h2>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
