import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import 'semantic-ui-css/semantic.min.css';
import MainLayout from '../components/MainLayout';
import MainNavigation from '../components/MainNavigation';
import SecondaryNavigation from '../components/SecondaryNavigation';

import HomePage from '../pages/HomePage';
import MessagesPage from '../pages/MessagesPage';
import FriendsPage from '../pages/FriendsPage';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('My Pages', module)
  .add('HomePage', () => (
    <HomePage />
  ))
  .add('MessagesPage', () => (
    <MessagesPage />
  ))
  .add('FriendsPage', () => (
    <FriendsPage />
  ));

storiesOf('My Components', module)
  .add('MainLayout', () => (
    <MainLayout />
  ))
  .add('MainNavigation', () => (
    <MainNavigation />
  ))
  .add('SecondaryNavigation', () => (
    <SecondaryNavigation />
  ));
