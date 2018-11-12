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
          <Card ui='theme-white'>
            <Card.Header cardTitle='Amsterdam'>
            </Card.Header>
            <Card.Description cardSteps='12 steps card' cardDetail='Architecture, Red Lights, Herring and much more inside'>
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
