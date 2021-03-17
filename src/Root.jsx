import React from 'react'
import { HashRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import PageRoute from './routes'
import StateProvider from './containers/StateProvider'

import 'react-notifications/lib/notifications.css';

import './scss/style.scss'

const Index = ({ id }) => (
  <StateProvider initialState={{}}>
    <HashRouter>
      <PageRoute />
    </HashRouter>
  </StateProvider>
)

Index.getInitialProps = ({ query = {} }) => {
  return { id: query.id }
}

Index.propTypes = {
  id: PropTypes.string
}

export default Index
