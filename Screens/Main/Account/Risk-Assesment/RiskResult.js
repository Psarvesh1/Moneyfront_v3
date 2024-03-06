import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
const RiskResult = () => {
  const navigation = useNavigation()
  return (
    <Container>
        <Title>
            Hello User,
        </Title>
        <Meta>
        Your current risk profile is :
        </Meta>
        <ResultText>
            Moderately Conservative
        </ResultText>
        <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '100%',
          padding: 5,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginTop: 200
        }}
        labelStyle={{fontSize: 18}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate('account')}>
        Close
      </Button>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    padding: 20px 16px
`
const Title = styled.Text`
    fontSize: 26px;
    fontWeight: bold;
    marginTop: 10px;
`
const Meta = styled.Text`
    fontSize: 16px;
    marginTop: 10px;
`
const ResultText = styled.Text`
    fontSize: 25px;
    fontWeight: 700;
    alignSelf: center;
    marginTop: 200
`
export default RiskResult