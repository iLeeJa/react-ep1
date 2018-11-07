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
        <h1>Detail</h1>
          <Card ui='bg-white'>
            <div class='card-header'>
              <img class='card-image' src='https://media.cntraveler.com/photos/5acce5d2070ad55df829cf6e/4:3/w_480,c_limit/GettyImages-597062183.jpg' alt='Route Pic' />
              <div class='card-profile'>
                <div class='card-profile-img'><i class='fas fa-user-circle'></i></div>
                <div class='card-profile-img'><i class='fas fa-user-circle'></i></div>
                <div class='card-profile-img'><i class='fas fa-user-circle'></i></div>
                <div class='card-proflie-number'>+157</div>
              </div>
            <div class='card-wishlist'>
              <i class='far fa-heart'></i>
            </div>
            <div class='card-title'>
              <h2>Amsterdam</h2>
            </div>
          </div>
          <div class='card-description'>
            <div class='card-steps'>
              <p>12 steps card</p>
            </div>
            <div class='card-direction'>
              <i class='fas fa-external-link-alt'></i>
            </div>
            <div class='card-detail'>
              <p>Architecture, Red Lights, Herring and much more inside</p>
            </div>
            <div class='card-timer'>
              <div>2h 45min</div>
              <div>19km</div>
              <div>from Dam Square</div>
            </div>
          </div>
        </Card>
      
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
