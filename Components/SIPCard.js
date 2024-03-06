import * as React from 'react';
import { View, useWindowDimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import styled from 'styled-components';
import { Button } from 'react-native';


const SIPCard = ({title, type, nav, min}) => {
  console.log(nav)
  return (
    <Container>
      <Title>{title}</Title>
      <Type>{type}</Type>
      <Divider />
      <SubContainer>
        <Box>
          <Label>Min Investment</Label>
          <Amount>{min}</Amount>
        </Box>
        <Box>
          <Label>Nav</Label>
          <Amount style={{color: '#367341'}}>{nav}</Amount>
        </Box>
        <Box style={{paddingLeft: 15, alignItems: 'flex-end'}}>
        <TouchableOpacity style={{ ...styles.button}}>
            <Text style={{ ...styles.text}} numberOfLines={1} adjustsFontSizeToFit={true}>
                Buy Now
            </Text>
        </TouchableOpacity>
        </Box>
      </SubContainer>
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
    padding: 20px;
    backgroundColor: #fff;
    flexDirection: column;
    marginTop: 8px;
    marginBottom: 15px;
`
const Title = styled.Text`
    fontSize: 18px;
    width: 90%;
    marginBottom: 5px;
`
const Type = styled.Text`
    fontSize: 16px;
    marginBottom: 10px;
    color: #6b6b6b;
`
const SubContainer = styled.View`
    flexDirection: row;
    width: 100%;
    justifyContent: space-between;
`
const Box = styled.View`
    marginTop: 20px;
    width: 33%;
    alignItems: center;
    justifyContent: center;
`
const Label = styled.Text`
    fontSize: 16px;
    color: #6b6b6b
`
const Amount = styled.Text`
    marginTop: 10px;
    fontSize: 18px;
`

const styles = StyleSheet.create({
  button: {
      backgroundColor: '#1A5A86',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      // padding: 20
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 14,
      paddingRight: 14
  },
  text: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'bold'
  },
});
export default SIPCard