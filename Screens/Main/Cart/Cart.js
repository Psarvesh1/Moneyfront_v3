import React from 'react'
import styled from 'styled-components'
import CartCard from '../../../Components/CartCard'
import { ScrollView } from 'react-native'
import { Button, Divider } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import data from '../../../utils/data/index.json'
const Cart = () => {
  const navigation = useNavigation()
  return (
    <Container>
        <Head>SIP</Head>
        <ScrollView showsVerticalScrollIndicator={false}>
        {data.cart.map((data)=>(
            <CartCard 
            title={data.title}
            date={data.start_date} 
            months={data.months} 
            installment={data.installment}
            dividend={data.dividend}
            folio={data.folio}
            />
        ))} 
        <Divider/>
        </ScrollView>
        <ButtonContainer>
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
        }}
        labelStyle={{fontSize: 18}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate('addcart')}>
        View Schemes
      </Button>
        </ButtonContainer>
    </Container>
    )
}

const Container = styled.View`
    flex: 1;
    flexDirection: column;
`
const Head = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    marginLeft: 10px;
    marginTop: 10px;
`
const ButtonContainer = styled.View`
    backgroundColor: #fff;
    padding: 26px 20px;
`


export default Cart