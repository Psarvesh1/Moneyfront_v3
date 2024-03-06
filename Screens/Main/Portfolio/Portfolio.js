import React, {useState} from 'react';
import styled from 'styled-components';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {View,Text} from 'react-native'
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import Holdings from './Holdings';
import OrderBook from '../Transact/OrderBook';
import Call from 'react-native-vector-icons/Ionicons'
import Snapshot from './Snapshot';
import Reports from './Reports';
const Portfolio = ({navigation}) => {
  const [tab, setTab] = useState(0);

  return (
    <Container>
      {/* <Header>
        <View style={{flexDirection: 'row'}}>
        <Call name='call' color='black' style={{marginTop: 4}} size={20}/>
        <CallText>Assistance(24×7)</CallText>
        </View>
        <Icon name='shopping-cart' color='green' style ={{}} size={20}/>

      </Header> */}
      <Title>Portfolio</Title>
      <SegmentedControl
        values={['Snapshot', 'Holdings', 'Reports']}
        selectedIndex={tab}
        onChange={event => {
          setTab(event.nativeEvent.selectedSegmentIndex);
        }}
        style={{width: '95%', alignSelf: 'center'}}
      />
       <Divider style={{marginTop: 20}}/>
      {tab==0? <Snapshot navigation={navigation}/>: tab==1?<Holdings navigation={navigation}/>: tab==2? <Reports/>: null}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flexDirection: column;
`;
const Header = styled.View`
  flex: 0.1;
  width: 100%;
  padding: 10px;
  flexDirection: row;
  justifyContent: space-between;
`;
const Title = styled.Text`
  fontSize: 26px;
  fontWeight: bold;
  marginBottom: 20px;
  marginLeft: 15px;
  alignSelf: flex-start;
`
const CallText = styled.Text`
    fontSize: 22px;
    marginLeft: 10px;
`

export default Portfolio;
