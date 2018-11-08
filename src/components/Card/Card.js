import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  CardWrapper
} from './styled'

/**
 * Card description
 * - ...
 */

class CardHeader extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'card-header',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        <img className='card-image' src='https://media.cntraveler.com/photos/5acce5d2070ad55df829cf6e/4:3/w_480,c_limit/GettyImages-597062183.jpg' alt='Route Pic' />
          <div className='card-profile'>
            <div className='card-profile-img'><i className='fas fa-user-circle'></i></div>
            <div className='card-profile-img'><i className='fas fa-user-circle'></i></div>
            <div className='card-profile-img'><i className='fas fa-user-circle'></i></div>
            <div className='card-proflie-number'>+157</div>
          </div>
          <div className='card-wishlist'>
            <i className='far fa-heart'></i>
          </div>
          <div className='card-title'>
            <h2>Amsterdam</h2>
          </div>
        {children}
      </div>
    )
  }
}

class CardDescription extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'card-description',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        <div className='card-steps'>
          <p>12 steps card</p>
        </div>
        <div className='card-direction'>
          <i className='fas fa-external-link-alt'></i>
        </div>
        <div className='card-detail'>
          <p>Architecture, Red Lights, Herring and much more inside</p>
        </div>
        <div class='card-timer'>
          <div>2h 45min</div>
          <div>19km</div>
          <div>from Dam Square</div>
        </div>
        {children}
      </div>
    )
  }
}


export class Card extends React.PureComponent {
  static propTypes = { // TYPE > node, string, func, bool
    /**
    * [Card] - additional classes
    */
    className: PropTypes.string,

    /**
    * [Card] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * [Card] - modifier name for change default multiple UI (parent and children), can reuse
    */
    ui: PropTypes.oneOf([
      'bg-white',
      'font-white'
    ]),

    /**
    * [Card] - modifier name for change default multiple UI (parent and children), can't reuse
    */
    uiFor: PropTypes.oneOf([
    ]),

  }

  static Header = CardHeader
  static Description = CardDescription

  render () {
    const {
      className,
      children,
      ui,
      uiFor
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'card',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <CardWrapper
        className={classes}
      >
        
        {children}
      </CardWrapper>
    )
  }
}
