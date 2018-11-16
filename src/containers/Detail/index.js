import React from 'react'
import {
  Card
} from 'components'
import {
  CONTENTS
} from 'themes'
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
            <Card.Header 
              cardTitle='Amsterdam' 
              allUserNumber='157'
              srcImg={CONTENTS['amsterdam.jpg']}
              altImg='Amsterdam'
            >
              <Card.Avatar
                srcAvatar={CONTENTS['profile-1.jpg']}
                altAvatar='Avatar 1'
              />
              <Card.Avatar
                srcAvatar={CONTENTS['profile-1.jpg']} 
                altAvatar='Avatar 2'
              />
              <Card.Avatar
                srcAvatar={CONTENTS['profile-1.jpg']} 
                altAvatar='Avatar 3'
              />
            </Card.Header>
            <Card.Description 
              cardSteps='12 steps card' 
              cardDetail='Architecture, Red Lights, Herring and much more inside' 
              cardTime='2h 45min' 
              cardDistance='19km' 
              cardFrom='from Dam Square' 
            />
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
