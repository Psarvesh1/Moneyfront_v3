import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-paper'
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
const Approach = () => {
    const navigation = useNavigation()
  return (
    <Container>
      <Title>Investment Approach</Title>
      <Meta>On a scale of 1-5, how would you describe your approach to investment?</Meta>
      <SliderContainer>
        <TitleContainer>
          <SliderText>Conservative</SliderText>
          <SliderText>Aggressive</SliderText>
        </TitleContainer>
        <Slider
          style={{width: '100%', height: 40, marginTop: 10}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#a9a9a9"
          maximumTrackTintColor="#649e3e"
          inverted={true}
        />
        <SliderValue>
            <Value>1</Value>
            <Value>2</Value>
            <Value>3</Value>
            <Value>4</Value>
            <Value>5</Value>

        </SliderValue>
      </SliderContainer>
      <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '100%',
          alignSelf: 'center',
          padding: 0,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginTop: 200,
        }}
        labelStyle={{fontSize: 18}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate('RiskResult')}>
        Next
      </Button>
    </Container>
  );
};

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    padding: 30px 14px;
    justifyContent: 'center'
`

const Title = styled.Text`
    fontSize: 20px;
    fontWeight: 600;
    
`
const Meta = styled.Text`
    fontSize: 18px;
    marginTop: 16px;
`
const SliderContainer = styled.View`
    marginTop: 100px;
    width: 90%;
    alignContent: center;
    alignSelf: center;
`
const TitleContainer = styled.View`
    justifyContent: space-between;
    width: 100%;
    flexDirection: row;
`
const SliderText = styled.Text`
    fontSize: 15px;
`
const SliderValue = styled.View`
    flexDirection: row;
    justifyContent: space-around;
`

const Value = styled.Text`
    fontSize: 16px;
`

export default Approach