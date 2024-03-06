import React from 'react';
import styled from 'styled-components/native';
import {TextInput, Button, Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const EmailVerify = ({navigation}) => {
  const [text, setText] = React.useState('');

  return (
    <LinearGradient
    useAngle
    angle={45}
    start={{ x: -1, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={['#58aa82','#548484','#536387' ,'#535087']}
    style={styles.linearGradient}>
      <Header>What is your Email?</Header>
      <TextInput
        value={text}
        selectionColor="#fff"
        outlineColor="#FFF"
        theme={{colors: {onSurfaceVariant: 'white'}}}
        placeholder="Full Name"
        textColor="#fff"
        onChangeText={text => setText(text)}
        mode="outlined"
        style={[styles.input, styles, {marginTop: 40}]}
      />
      <Info>You'll need to confirm this email later.</Info>
      <TouchableOpacity onPress={() => console.log('pressed')}>
            <Text style = {{color: '#fff', marginTop: 20, fontWeight: 500}}>Resend OTP</Text>
        </TouchableOpacity>
      <Button
        textColor="#fff"
        mode="outlined"
        style={{
          borderColor: '#fff',
          marginTop: 20,
          padding: 5,
          borderRadius: 5,
          width: 120,
          alignSelf: 'flex-end'
        }}
        onPress={() => navigation.navigate('PhoneVerify')}>
        <BtnText>Next</BtnText>
      </Button>
    </LinearGradient>
  );
};
const Container = styled.View`
  flex: 1;
  background: green;
  align-content: center;
  padding: 20px;
`;
const TextContainer = styled.View`
    marginTop: 20px;
    flex: 1;
    flex-direction: row;
    justify-content: center;
`
const Header = styled.Text`
  font-size: 22px;
  font-family: 'ARIAL ROUNDED MT BOLD';
  color: #fff;
  marginTop: 80px;
  letter-spacing: 0.5px;
`;
const Info = styled.Text`
    marginTop: 5px;
    color: #fff;
    font-size: 13px;
`
const BtnText = styled.Text`
  font-size: 18px;
  letter-spacing: 1px;
`;

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  linearGradient: {
    flex: 1,
    background: 'green',
    alignContent: 'center',
    padding: 20,
  },
});

export default EmailVerify;
