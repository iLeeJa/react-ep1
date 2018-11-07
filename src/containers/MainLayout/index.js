import React from 'react'

export class MainLayoutContainer extends React.Component {
  render() {
    const {
      children
    } = this.props

    return (
      <React.Fragment>
        <div>Main Container</div>
        {children}
      </React.Fragment>
    )
  }
}
