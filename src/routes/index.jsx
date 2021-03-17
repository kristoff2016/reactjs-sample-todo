import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from './route'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const LoginContainer = React.lazy(() => import('../containers/Auth/LoginContainer'));
const TheLayout = React.lazy(() => import('../containers/TheLayout'))
const Page404 = React.lazy(() => import('../views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('../views/pages/page500/Page500'))

const PagesRoute = () => (
  <main>
    <Switch >
      <React.Suspense fallback={loading}>
        <PrivateRoute path="/" name="Home" component={TheLayout} />
        <PublicRoute exact path="/login" component={LoginContainer} />

        <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
        <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />

      </React.Suspense>
    </Switch>
  </main>
)
PagesRoute.propTypes = {
}
export default PagesRoute