import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  ButtonWrapper
} from './styled'

/**
 * Button description
 * - ...
 */

export class Button extends React.PureComponent {
  static propTypes = { // TYPE > node, string, func, bool
    /**
    * [Button] - additional classes
    */
    className: PropTypes.string,

    /**
    * [Button] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * [Button] - modifier name for change default multiple UI (parent and children), can reuse
    */
    ui: PropTypes.oneOf([
    ]),

    /**
    * [Button] - modifier name for change default multiple UI (parent and children), can't reuse
    */
    uiFor: PropTypes.oneOf([
    ]),

    /**
    * [Button] - change color
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
      'button',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      { [`is-color-${colorClasses}`]: colorClasses },
      className
    )

    return (
      <ButtonWrapper
        className={classes}
      >
        {children}
      </ButtonWrapper>
    )
  }
}
