import React from 'react'

export default class HelloWorld extends React.Component {
  constructor(props) {
      super(props)
      this.ref = React.createRef()
  }

  render() {
    return (
        <p ref={this.ref}>
            Hello World!
        </p>
    )
  }
}
