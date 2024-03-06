import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {View,Text, StyleSheet} from 'react-native'
import { Divider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderHistory = ({date, title, purchase, status, units, amount}) => {
  const navigation = useNavigation()
  return (
    <Container>
      <Card>
        <Col1>
          <Date>{date}</Date>
          <PlanTitle>{title}</PlanTitle>
          <Highlight>{purchase}</Highlight>
          <Highlight style={{marginTop: 2, padding:'offset'}}>{status}</Highlight>
        </Col1>
        <Col2>
          <Amount>Units</Amount>
          <Number>{units}</Number>
          <Amount>Units</Amount>
          <Number>{amount}</Number>
        </Col2>
      </Card>
      <Divider style={{width: '100%'}}/>
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('historydetail')}>
        <Button>View Details</Button>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center'
  }
})


const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  alignItems: center;
  backgroundColor: #efefef;
  marginBottom: 20px;
`;

const Card = styled.View`
  backgroundColor: #fff;
  padding: 10px;
  width: 100%;
  flexDirection: row;
`
const Col1 = styled.View`
  width: 50%;
  flexDirection: column;
  justifyContent: space-evenly;
`
const Col2 = styled.View`
  width: 50%;
  flexDirection: column;
  alignItems: flex-end;
`
const Date = styled.Text`
  fontSize: 14px;
  marginTop: 2px;
  color: #6b6b6b
`
const PlanTitle = styled.Text`
  fontSize: 14px;
  marginTop: 15px;
  color: #040404
`
const Highlight = styled.Text`
  fontSize: 14px;
  backgroundColor: #f0eff4 ;
  marginTop: 10px;
  alignSelf: flex-start;
  color: #040404;
`
const Amount = styled.Text`
  fontSize: 14px;
  color: #acacac;
  marginTop: 5px;

`
const Number = styled.Text`
  fontSize: 16px;
  color: #2d9be6;
  marginTop: 7px;
`
const Button = styled.Text`
  fontSize: 16px;
  color: #03ab4a
`
export default OrderHistory;
