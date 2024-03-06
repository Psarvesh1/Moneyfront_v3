import React, { useCallback, useMemo, useRef } from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import whitelogo from '../assets/images/white-logo.png'
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, View, Text} from 'react-native';
import BottomSheetModal from './Auth/BottomSheetModal';

const Landing = ({navigation}) => {  
  return (
    <View style={{flex: 1}}>
      <LinearGradient
      useAngle
      angle={45}
      start={{ x: -1, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.linearGradient}
      colors={['#543787','#3d6ea8','#289cc3','#23afd2']}
      >
        <Logo source={whitelogo} alt="moneyfront logo" />
        <Header>
          Welcome to Moneyfront.
        </Header>
        <Button
          style={{marginTop: 70, width: 300, padding: 5, borderRadius: 40}}
          buttonColor="#fff"
          mode="contained"
          onPress={() => navigation.navigate('SignUp')
        }>
          <BtnText style= {{color: '#6e9656'}}>Create Account</BtnText>
        </Button>
        <Button
          textColor="#fff"
          mode="outlined"
          style={{borderColor: '#fff', marginTop: 20, width: 300, padding: 5, borderRadius: 40}}
          onPress={() => navigation.navigate('SignIn')
          }>
          <BtnText>Log In</BtnText>
        </Button>
        <Condition>
        Mutual fund investments are subject to market risks. Please read all Scheme Information Documents (SID) /Key Information Memorandum (KIM) and addendums issued thereto from time to time information and other related documents carefully before investing. 
        </Condition>
       
        </LinearGradient>
      <BottomSheetModal/>
    </View>
  );
};

const Header = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  align-self: flex-start;
  font-family: 'ARLRDBD';
  marginTop: 25px;
  marginLeft: 7px;
  letter-spacing: 1px;
`;
const Logo = styled.Image`
  width: 60px;
  height: 60px;
  align-self: flex-start;
  marginTop: 50px;
  marginLeft: 10px;
`;

const BtnText = styled.Text`
  font-size: 18px;
  font-family: 'proxima-nova'
`

const Condition = styled.Text`
  font-size: 13px;
  color: #fff;
  font-family: 'proxima-nova';
  marginTop: 200px;
`;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    padding: 10
  }
})

export default Landing;
