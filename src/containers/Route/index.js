import React from 'react'
import {
  Route
} from 'react-router-dom'
import {
  MainLayoutContainer,
  HomeContainer,
  AboutContainer,
  ContactContainer,
  DetailContainer
} from 'containers'
import {
  context
} from 'context'
import {
  ROUTE_PATH
} from 'helpers'

export class RouteContainer extends React.Component {
  constructor(props) {
    super(props)
    context.setRedirect(this.props.history.push)
  }

  render() {
    return (
      <MainLayoutContainer>
        {/* Use props 'exact' for match single container(not share container) */}
        <Route exact path={ROUTE_PATH.HOME.LINK} component={HomeContainer} />
        <Route exact path={ROUTE_PATH.ABOUT.LINK} component={AboutContainer} />
        <Route exact path={ROUTE_PATH.CONTACT.LINK} component={ContactContainer} />
        <Route exact path={ROUTE_PATH.DETAIL.LINK} component={DetailContainer} />
      </MainLayoutContainer>
    )
  }
}
