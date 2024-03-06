import styled from "styled-components";
import { Button } from "react-native-paper";
import React, { useState } from 'react'
import {StyleSheet} from 'react-native'
import { View } from "react-native";
const SnapNoData = () => {
  return (

    <Container>
      <Title>Good Afternoon, User!</Title>
      <Title style={{marginTop: 10, marginBottom: 30}}>Account #490237</Title>
      <Button
        mode="outlined"
        style={{borderRadius: 5, padding: 4, borderColor: '#649e3e'}}
        labelStyle={{
              fontSize: 16,
              color: '#649e3e',
              marginHorizontal: 0,
              marginVertical: 0,
        }}
        onPress={() => console.log('Pressed')}>
        Switch Account
      </Button>
      <Invest>There are no investments on your profile currently</Invest>
      <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '90%',
          marginTop: 40,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
        labelStyle={{fontSize: 18}}
        buttonColor="#649e3e"
        onPress={() => console.log('Pressed')}>
        Start Investing Now
      </Button>
      </Container>
  );
}

const Container = styled.View`
    flex: 1;
    flexDirection: column;
    alignItems: center;
    backgroundColor: #efefef;
`

const Title = styled.Text`
    fontSize: 22px;
    marginTop: 30px;
`
const Invest = styled.Text`
    fontSize: 20px;
    marginTop: 30px;
    textAlign: center;
    width: 80%;
`



export default SnapNoData