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
    ]),

    /**
    * [Card] - modifier name for change default multiple UI (parent and children), can't reuse
    */
    uiFor: PropTypes.oneOf([
    ]),

    /**
    * [Card] - change color
    */
    color: PropTypes.oneOf([
      'red'
    ])
  }

  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      color
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const colorClasses = ClassNames(color)
    const classes = ClassNames(
      'card',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      { [`is-color-${colorClasses}`]: colorClasses },
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
