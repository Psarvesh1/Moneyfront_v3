import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';
import OrderCard from '../../../Components/OrderCard'
import data from '../../../utils/data/index.json'
import Filter from '../../../Components/Filter';
const OrderHistory = () => {
  const [index, setIndex] = useState(0)
  const [type, setType] = useState()
  const [status, setStatus] = useState()
  const navigation = useNavigation()
  const handleClick = () => (
    setIndex(1)
  )
  return (
    <Container>
      <Menu>
        <Text style={{fontSize: 16, marginTop: 20}}>All</Text>
        <TouchableOpacity onPress={handleClick}>
        <Text style={{fontSize: 16, color:'#9bcf3c'}}>Filter</Text>
        </TouchableOpacity>
      </Menu>
      
      {/* {data.order.map((data)=>(
        <OrderCard date={data.date} title={data.title} purchase={data.purchase} 
        status={data.status} units={data.units} amount={data.amount} navigation={navigation}/>
      ))} */}
      <NativeViewGestureHandler disallowInterruption={true}>
      <FlatList
        data={data.order}
        renderItem={({item}) => <OrderCard date={item.date} title={item.title} purchase={item.purchase} 
        status={item.status} units={item.units} amount={item.amount} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
      </NativeViewGestureHandler>
      <Filter index={index}/>
      </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  backgroundColor: #efefef;
  height: 100%;
`;
const Menu = styled.View`
  width: 100%;
  padding: 10px;
  flexDirection: row;
  justifyContent: space-between;
`
export default OrderHistory;
