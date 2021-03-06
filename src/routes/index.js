import { Switch, Route, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'
import PublicRoute from './PublicRoute'
import VerifiedRoute from './VerifiedRoute'
import FallbackTemp from 'components/_common/Loading/FallbackTemp'
import { logout } from 'fetcher/auth'
import OpenRoute from './OpenRoute'

const fallbackTemp = {
  fallback: <FallbackTemp />,
}

const LoginPages = loadable(() => import('pages/Login/Login'), fallbackTemp)
const RegisterPages = loadable(
  () => import('pages/Register/Register'),
  fallbackTemp
)
const LandingPagePages = loadable(
  () => import('pages/LandingPage/LandingPage'),
  fallbackTemp
)
const ProductPages = loadable(
  () => import('pages/Product/Product'),
  fallbackTemp
)
const FacilityPages = loadable(
  () => import('pages/Facility/Facility'),
  fallbackTemp
)

const Routes = props => {
  return (
    <Switch>
      <PublicRoute path="/login" exact component={LoginPages} />
      <PublicRoute path="/register" exact component={RegisterPages} />

      <Route path="/" exact component={LandingPagePages} />
      <OpenRoute path="/product" exact component={ProductPages} />
      <OpenRoute path="/facility" exact component={FacilityPages} />

      <VerifiedRoute
        path="/dashboard"
        exact
        component={() => <div>Verified user only</div>}
      />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default Routes
