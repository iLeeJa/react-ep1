import React from 'react'
import {
  Card
} from 'components'
import {
  ROUTE_PATH,
  redirect
} from 'helpers'

export class DetailContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class='detail'>
          <h1>Detail</h1>
          <div class='card-shadow-1'></div>
          <div class='card-shadow-2'></div>
          <Card ui='bg-white'>
            <Card.Header ui='font-white'>
            </Card.Header>
            <Card.Description>
            </Card.Description>
          </Card>
          <button
            onClick={() => {
              redirect(ROUTE_PATH.HOME.LINK)
            }}
          >
            Go to {ROUTE_PATH.HOME.TEXT}
          </button>
        </div>
      </React.Fragment>
    )
  }
}
