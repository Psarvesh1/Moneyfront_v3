import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import TransactPage from './Transact/Transact';
import Icon from 'react-native-vector-icons/FontAwesome';
import Transact from 'react-native-vector-icons/Octicons';
import PortfolioIcon from 'react-native-vector-icons/Fontisto';
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Explore from './Explore/Explore';
import Portfolio from './Portfolio/Portfolio'
import Account from './Account/Account';

const ExploreRoute = () => <Explore />;

const TransactRoute = () => <TransactPage />;

const PortfolioRoute = () => <Portfolio />;

const AccountRoute = () => <Account/>

const Navigation = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'explore',
      title: 'Explore',
      focusedIcon: props => (
        <Icon {...props} name="search" size={22} color="green" />
      ),
      unfocusedIcon: props => (
        <Icon {...props} name="search" size={22} color="black" />
      ),
    },
    {
      key: 'transact',
      title: 'Transact',
      focusedIcon: props => (
        <Transact {...props} name="arrow-switch" size={25} color="green" />
      ),
      unfocusedIcon: props => (
        <Transact {...props} name="arrow-switch" size={25} color="black" />
      ),
    },
    {
      key: 'portfolio',
      title: 'Portfolio',
      focusedIcon: props => (
        <PortfolioIcon {...props} name="pie-chart-2" size={25} color="green" />
      ),
      unfocusedIcon: props => (
        <PortfolioIcon {...props} name="pie-chart-2" size={25} color="black" />
      ),
    },
    {
      key: 'account',
      title: 'Account',
      focusedIcon: props => (
        <AccountIcon {...props} name="account" size={28} color="green" />
      ),
      unfocusedIcon: props => (
        <AccountIcon {...props} name="account" size={28} color="black" />
      ),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    explore: ExploreRoute,
    transact: TransactRoute,
    portfolio: PortfolioRoute,
    account: AccountRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navigation;