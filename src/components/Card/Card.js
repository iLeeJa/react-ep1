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
    srcImg: require('./images/amsterdam.jpg'),
    srcProfile: require('./images/profile-1.jpg'),
    srcWishlist: require('./images/favorite_border_white.png')
  }
  
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      srcImg,
      srcProfile,
      srcWishlist
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
          <img className='card-image' alt='Amsterdam'
            src={srcImg}
          />
        </div>
        <div className='card-profile'>
            <img className='card-profile-img card-profile-img-1' alt='Profile'
              src={srcProfile}
            />
            <img className='card-profile-img card-profile-img-2' alt='Profile'
              src={srcProfile}
            />
            <img className='card-profile-img' alt='Profile'
              src={srcProfile}
            />
          <div className='card-proflie-number'>+157</div>
        </div>
        <div className='card-wishlist'>
          <img className='card-' alt='Profile'
            src={srcWishlist}
          />
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
  static defaultProps = {
    srcDirection: require('./images/near_me_white.png')
  }

  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      srcDirection
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
          <img className='card-direction-img' alt='Profile'
            src={srcDirection}
          />
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
