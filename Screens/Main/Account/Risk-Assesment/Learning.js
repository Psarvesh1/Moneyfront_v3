import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { View, StyleSheet, Text } from 'react-native'
import RadioCircle from '../../../../Components/RadioCircle'
import { Button } from 'react-native-paper'
import Newbie from '../../../../assets/images/Newbie.png'
import NewbieSelected from '../../../../assets/images/Newbie_Selected.png'
import { useNavigation } from '@react-navigation/native'
const Learning = () => {
const [option, setOption] = useState(null);
  const data = [
    {value: 'Newbie'}, {value: 'knowledge'},
    {value: 'proficient'}, {value: 'expert'}
  ]
  const navigation = useNavigation()
  const [btnState, setBtnState] = useState()
  const handleClick = () => {
    if(option===null){
      setBtnState(true)
    }else{
      setBtnState(false)
    }
  }
  useEffect(()=> {
    if(option===null){
      setBtnState(true)
    }else{
      setBtnState(false)
    }
  },[option])
  console.log('ha maza option' +option)
  return (
    <Container>
        <Title>The more you learn, the more you earn</Title>
        <Meta>How much do you know about financial planning?
        </Meta>
        <View style={styles.container}>
        <RadioCircle data={data} onSelect={(value) => setOption(value)} width='100%' />
    </View>
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
          marginTop: 80
        }}
        disabled={btnState}
        labelStyle={{fontSize: 18}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate('Approach')}>
        Next
      </Button>
    </Container>
  )
}

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
    marginTop: 16;
`

const styles = StyleSheet.create({
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container: {
        marginTop:22,
    }
  });


export default Learning