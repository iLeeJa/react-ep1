import React from 'react'
import {
  ROUTE_PATH,
  redirect
} from 'helpers'

export class AboutContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>{ROUTE_PATH.ABOUT.TEXT}</div>
        <button
          onClick={() => {
            redirect(ROUTE_PATH.HOME.LINK)
          }}
        >
          Go to {ROUTE_PATH.HOME.TEXT}
        </button>
      </React.Fragment>
    )
  }
}
