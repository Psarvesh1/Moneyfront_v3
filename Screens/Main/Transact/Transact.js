import React, {useState} from 'react';
import styled from 'styled-components';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {View,Text} from 'react-native'
import { Appbar, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import TransactNow from './TransactNow';
import OrderHistory from './OrderHistory';
import OrderBook from './OrderBook';
const TransactPage = ({navigation}) => {
  const [tab, setTab] = useState(0);


  return (
    <Container>
      {/* <Header>
         <Icon name='shopping-cart' color='green' style ={{alignSelf: 'flex-end'}} size={20}/>
      </Header> */}
      <Title>Transact</Title>
      <SegmentedControl
        values={['Transact Now', 'Order History', 'Order Book']}
        selectedIndex={tab}
        onChange={event => {
          setTab(event.nativeEvent.selectedSegmentIndex);
        }}
        style={{width: '95%', alignSelf: 'center'}}
      />
       <Divider style={{marginTop: 20}}/>
      {tab==0? <TransactNow navigation={navigation}/>: tab==1?<OrderHistory navigation={navigation}/>: tab==2? <OrderBook/>: null}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;
const Header = styled.View`
  flex: 0.1;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
`;
const Title = styled.Text`
  fontSize: 24px;
  fontWeight: bold;
  marginBottom: 10px;
  marginLeft: 15px;
  alignSelf: flex-start;
`
export default TransactPage;
