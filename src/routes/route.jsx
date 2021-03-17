import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../utils/helper'

const StoreLastUrl = () => {
  const currentUrl = window.location.hash
  localStorage.currentUrlSession = JSON.stringify({
    lastUrl: currentUrl
  })
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      StoreLastUrl()
      let url = null
      if (isAuthenticated()) {
        url = <Component {...props} />
      } else {
        url = <Redirect to={'/login'} />
      }
      return url
    }}
  />
)

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      StoreLastUrl()
      return <Component {...props} />
    }}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired 
}

PublicRoute.propTypes = {
  component: PropTypes.any.isRequired 
}

export { PrivateRoute, PublicRoute }
