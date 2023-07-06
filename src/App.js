import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/global.scss';
import { languages } from 'language/config';
import { PrivateLayout, PublicLayout } from 'layouts';
import { CACHE_TOKEN } from 'constants/index';
import fetchHelper from 'helpers/FetchHelper';
import SignIn from 'modules/auth/pages/Signin';
import SignUp from 'modules/auth/pages/Signup';
import ForgotPassword from 'modules/auth/pages/ForgotPassword';
import ResetPassword from 'modules/auth/pages/ResetPassword';
import Page404 from 'modules/404';
import ComingSoon from 'modules/comingSoon';
import Home from 'modules/home';
import Account from 'modules/account';

const isLogin = () => {
  const authToken = Cookies.get(CACHE_TOKEN);
  if (authToken) {
    fetchHelper.addDefaultHeader('Authorization', `Bearer ${authToken}`);
  }
  return Boolean(authToken);
};

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogin() ? (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ) : (
        <PublicLayout {...rest}>
          <Component {...props} />
        </PublicLayout>
      )
    }
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogin() ? (
        <PrivateLayout {...rest}>
          <Component {...props} />
        </PrivateLayout>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

function App() {
  const { language } = useSelector((state) => state.user);

  return (
    <>
      <ToastContainer />
      <IntlProvider locale={language || 'en'} messages={languages[language]}>
        <Router>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute exact path="/signup" component={SignUp} />
            <PublicRoute exact path="/login" component={SignIn} />
            <PublicRoute exact path="/forgot-password" component={ForgotPassword} />
            <PublicRoute exact path="/reset-password" component={ResetPassword} />

            {/* <PublicRoute exact path="/coming-soon" component={ComingSoon} /> */}
            <PublicRoute exact path="/404" component={Page404} />

            <PublicRoute exact path="/account" component={Account} />

            <Route path="" component={() => <Redirect to="/" />} />

          </Switch>
        </Router>
      </IntlProvider>
    </>
  );
}

export default App;
