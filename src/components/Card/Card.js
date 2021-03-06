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
  static defaultProps = {
    srcWishlist: require('./images/favorite_border_white.png')
  }
  
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      srcImg,
      altImg,
      srcWishlist,
      cardTitle,
      allUserNumber
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
        <div className='cover-ratio-8-7'>
          <img className='card-image' alt={altImg}
            src={srcImg}
          />
        </div>
        <div class='card-profile'>
          {children}
          { 
            allUserNumber && 
              <div className='card-avatar-number'>
                <span>+{allUserNumber}</span>
              </div>
          }
        </div>
        <div className='card-wishlist'>
          <img alt='Wishlist'
            src={srcWishlist}
          />
        </div>
        <div className='card-title'>
          <h2>{cardTitle}</h2>
        </div>
      </div>
    )
  }
}

class CardDescription extends React.PureComponent {
  static defaultProps = {
    srcDirection: require('./images/near_me_white.png')
  }

  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      srcDirection,
      cardSteps,
      cardDetail,
      cardTime,
      cardDistance,
      cardFrom
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
          <p>{cardSteps}</p>
        </div>
        <div className='card-direction'>
          <img className='card-direction-img' alt='Direction'
            src={srcDirection}
          />
        </div>
        <div className='card-detail'>
          <p>{cardDetail}</p>
        </div>
        <div class='card-timer'>
          <div>{cardTime}</div>
          <div>{cardDistance}</div>
          <div>{cardFrom}</div>
        </div>
        {children}
      </div>
    )
  }
}

class CardAvatar extends React.PureComponent {
  
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      srcAvatar,
      altAvatar
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'card-avatar',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        <div className='cover-ratio-1-1'>
          <img className='card-avatar-img' alt={altAvatar}
            src={srcAvatar}
          />
          {children}
        </div>
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
      'theme-white'
    ]),

    /**
    * [Card] - modifier name for change default multiple UI (parent and children), can't reuse
    */
    uiFor: PropTypes.oneOf([
    ]),

  }

  static Header = CardHeader
  static Description = CardDescription
  static Avatar = CardAvatar

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
