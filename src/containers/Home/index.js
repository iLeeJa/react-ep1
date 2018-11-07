import React from 'react'
import {
  ROUTE_PATH,
  redirect
} from 'helpers'

export class HomeContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>{ROUTE_PATH.HOME.TEXT}</div>
        <p>...</p>
        <button
          onClick={() => {
            redirect(ROUTE_PATH.DETAIL.LINK)
          }}
        >
          Go to {ROUTE_PATH.DETAIL.TEXT}
        </button>
      </React.Fragment>
    )
  }
}
