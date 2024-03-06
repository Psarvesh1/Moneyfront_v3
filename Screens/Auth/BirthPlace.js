import React from 'react'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const BirthPlace = () => {
  const navigation=useNavigation()
  return (
        <LinearGradient
      useAngle
      angle={45}
      start={{x: -1, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}
      colors={['#21b361', '#08a490', '#12ab7f', '#01a09d']}>
        <Container>
        <Title>Enter Place of Birth</Title>
        <PanInput 
        autoFocus={true}
        keyboardType="default"/>
        <Button
        mode="contained"
        style={{
          borderRadius: 30,
          width: '30%',
          padding: 2,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginTop: 70,
          alignSelf: 'flex-end',
          marginRight: 10
        }}
        labelStyle={{fontSize: 16, color: '#000', fontWeight: 700}}
        buttonColor="#fff"
        onPress={() => navigation.navigate('BirthCountry')}>
        NEXT
      </Button>
        </Container>
      </LinearGradient>
    
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
})
const Container = styled.View`
    marginTop: 100px;
    padding: 12px
`
const Title = styled.Text`
    fontSize: 18px;
    color: #fff;
    fontWeight: bold;
`
const PanInput = styled.TextInput`
    width: 100%;
    padding: 14px 10px;
    backgroundColor: #fff;
    marginTop: 10px;
    borderRadius: 5px;
`
const Info = styled.Text`
    fontSize: 14px;
    color: #fff;
    marginTop: 10px;
`
export default BirthPlace