import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomepageGuest from '../pages/Public/HomepageGuest';
import ArticlePage from '../pages/Public/ArticlePage';
import LoginPage from '../pages/Public/LoginPage';
import RegisterPage from '../pages/Public/RegisterPage';

const PublicRoutes = () => (
  <>
    <Route path="/" exact component={HomepageGuest} />
    <Route path="/articles" component={ArticlePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
  </>
);

export default PublicRoutes;
