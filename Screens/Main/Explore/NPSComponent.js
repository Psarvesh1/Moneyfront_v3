import React from 'react'
import styled from 'styled-components'
import data from '../../../utils/data/index.json'
import nps from '../../../assets/images/nps-img.png'
import { Image, TouchableOpacity, Linking } from 'react-native'
const NPSComponent = () => {
  const openURI = async () => {
    const url = "https://secure.religareonline.com/MoneyFront"
    const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
    if (supported) {
    await Linking.openURL(url); // It will open the URL on browser.
    } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }
  const openURI2 = async () => {
    const url = "https://secure.religareonline.com/NPSInvestmentsmoneyfront"
    const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
    if (supported) {
    await Linking.openURL(url); // It will open the URL on browser.
    } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }
  return (
    <Container>
        <Image source={nps} resizeMode={'contain'} style={{width: 300, marginTop: -30, marginBottom: -30}}/>
        <Info>Saving for Retirement is an important aspect of 
            Financial Planning. It's not just about having a sizeable corpus
            to help cover your expenses at that age, but the corpus should
            also assure you a good, comfortable post-retirement life.
        </Info>
        <TouchableOpacity style={{marginTop: 60}} onPress={openURI}>
          <TextButton>New to NPS - Start Investing</TextButton>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 30}} onPress={openURI2}>
          <TextButton>Existing Investor - Additional Purchase</TextButton>
        </TouchableOpacity>
        <Meta>
        Please Note : Currently, your NPS investments will not be available for review on Moneyfront. 
        Once you begin investing, you will receive NSDL/CDSL CAS with your NPS details. 
        You can also log into NSDL/CDSL CAS and check your investments at anytime. 
        </Meta>
    </Container>
  )
}
const Container = styled.View`
    flex: 1;
    padding: 10px;
    alignItems: center;
    backgroundColor: #fff;
`
const Info = styled.Text`
    textAlign: center;
    fontSize: 16px;
    paddingLeft: 16;
    paddingRight: 16;
    color: #808080;
`

const TextButton = styled.Text`
  fontSize: 18px;
  color: #2d9be6;
`
const Meta = styled.Text`
  marginTop: 120px;
  fontSize: 14px;
  color: #808080
`

export default NPSComponent