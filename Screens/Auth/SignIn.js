import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TextInput, Button, Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [showPassword, setShowPassword] = useState(true);

  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  
  return (
    <LinearGradient
      useAngle
      angle={45}
      start={{ x: -1, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#543787','#3d6ea8','#289cc3','#23afd2']}
      style={styles.linearGradient}>
      <Header>“Time is the friend of the wonderful company, the enemy of the mediocre”</Header>
      <HeadMeta>- Warren Buffet</HeadMeta>
      <TextInput
        value={email}
        selectionColor="#fff"
        outlineColor="#FFF"
        theme={{colors: {onSurfaceVariant: 'white'}}}
        placeholder="Email Address"
        textColor="#fff"
        onChangeText={email => setEmail(email)}
        mode="outlined"
        style={[styles.input, styles, {marginTop: 40}]}
      />
      <TextInput
        value={password}
        selectionColor="#fff"
        outlineColor="#FFF"
        theme={{colors: {onSurfaceVariant: 'white'}}}
        placeholder="Password"
        textColor="#fff"
        secureTextEntry={showPassword}
        right={
          <TextInput.Icon
            icon="eye"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChangeText={password => setPassword(password)}
        mode="outlined"
        style={[styles.input, styles]}
      />
      <Button
        textColor="#fff"
        mode="outlined"
        style={{
          borderColor: '#fff',
          marginTop: 20,
          padding: 5,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate('EmailVerify')}>
        <BtnText>Log In</BtnText>
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style = {{color: '#fff', marginTop: 15, fontWeight: 'bold'}}>Forgot Password?</Text>
      </TouchableOpacity>
      <TextContainer>
      <Text style = {{color: '#fff'}}>
        Are you new to MoneyFront? 
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style = {{color: '#fff', marginLeft: 5, fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
      </TextContainer>
      
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
  text-align: center;
`;
const HeadMeta = styled.Text`
  fontSize: 18px;
  font-family: 'ARIAL ROUNDED MT BOLD';
  color: #fff;
  marginTop: 16px;
  text-align: center;
`
const Input = styled.TextInput``;
const BtnText = styled.Text`
  font-size: 18px;
  letter-spacing: 1px;
`;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    background: 'green',
    alignContent: 'center',
    padding: 20,
  },
  input: {
    marginTop: 20,
    backgroundColor: 'transparent',
    color: '#fff',
  },
});

export default SignUp;
