import React from 'react'
import styled from 'styled-components';
import {View,Text, StyleSheet} from 'react-native'
import { Divider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
// import data from '../../../utils/data/index.json'

const HistoryDetails = () => {
    return (
      <Container>
        <Header>
          <Title>360 ONE Balanced Hybrid Fund IDCW Direct Plan</Title>
        </Header>
        <Box>
          <Box1>
            <Label>Date:</Label>
            <Data>2024-01-17</Data>
          </Box1>
          <Box1>
            <Label>Folio Number:</Label>
            <Data>NEW</Data>
          </Box1>
        </Box>
        <Divider style={{width: '100%'}}/>
        <Box>
          <Box1>
            <Label>Units:</Label>
            <Data>0</Data>
          </Box1>
          <Box1>
            <Label>Amount:</Label>
            <Data>2000</Data>
          </Box1>
        </Box>
        <Box>
          <Box1>
            <Label>Transaction Type:</Label>
            <Data>0</Data>
          </Box1>
          <Box1>
            <Label>Status:</Label>
            <Data>Failure</Data>
          </Box1>
        </Box>
        <Box>
          <Box1>
            <Label>Divident Type:</Label>
            <Data>Re Invest</Data>
          </Box1>
        </Box>
      </Container>
    );
}

const Container = styled.View`
    flex: 1
`
const Header = styled.View`
    backgroundColor: #667691;
    padding: 15px;
`
const Title = styled.Text`
    color: #fff;
    fontSize: 22px;
    textAlign: center;
`
const Box = styled.View`
    width: 100%;
    flex: 0.14;
    flexDirection: row;
`
const Box1 = styled.View`
    width: 50%;
    flexDirection: column;
    padding: 20px;
    justifyContent: space-between;
`
const Label = styled.Text`
    color: #acacac;
    fontSize: 18px;
`
const Data = styled.Text`
    fontSize: 18px;
`
export default HistoryDetails