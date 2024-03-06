import React, {useState} from 'react'
import styled from 'styled-components'
import { View, StyleSheet, Text } from 'react-native'
import RadioButton from '../../../../Components/RadioButton'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
const Investment = () => {
  const navigation = useNavigation()

    const [option, setOption] = useState(null);
  const data = [
    { value: 'Sell all of the investment' },
    { value: 'Sell Some' },
    { value: 'Hold & wait for better return' },
    { value: 'Buy More' },
  ];
    const [selected, setSelected] = useState()
  return (
    <Container>
        <Title>Hypothetically, What would you do?</Title>
        <Meta>Hypothetically, if Rs. 10,000 invested by you goes down
            to Rs. 8000 (down 20%) in one year, you would
        </Meta>
        <View style={styles.container}>
        <RadioButton data={data} onSelect={(value) => setOption(value)} width='100%' />
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
          marginTop: 120
        }}
        labelStyle={{fontSize: 18}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate('Learning')}>
        Next
      </Button>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    padding: 30px;
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


export default Investment