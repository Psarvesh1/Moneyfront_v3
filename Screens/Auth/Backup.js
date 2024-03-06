import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import {TextInput, Button, Text, Icon} from 'react-native-paper';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 


  let phoneInput = useRef(<PhoneInput />);

  useEffect(() => { 
  
    // Trigger form validation when name,  
    // email, or password changes 
    validateForm(); 
  }, [name, email, password]); 

const validateForm = () => { 
  let errors = {}; 

  // Validate name field 
  if (!name) { 
      errors.name = 'Name is required.'; 
  } 

  // Validate email field 
  if (!email) { 
      errors.email = 'Email is required.'; 
  } else if (!/\S+@\S+\.\S+/.test(email)) { 
      errors.email = 'Email is invalid.'; 
  } 

  // Validate password field 
  if (!password) { 
      errors.password = 'Password is required.'; 
  } else if (password.length < 6) { 
      errors.password = 'Password must be at least 6 characters.'; 
  } 

  // Set the errors and update form validity 
  setErrors(errors); 
  setIsFormValid(Object.keys(errors).length === 0); 
  };

  const handleSubmit = () => { 
    if (isFormValid) { 
        // Form is valid, perform the submission logic 
        console.log('Form submitted successfully!'); 
    } else {    
        // Form is invalid, display error messages 
        console.log('Form has errors. Please correct them.'); 
    } 
}; 
  

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={['#57a284', '#535087']}
      style={styles.linearGradient}>
      <Header>Sign Up!</Header>
      <TextInput
        value={name}
        selectionColor="#fff"
        outlineColor="#FFF"
        theme={{colors: {onSurfaceVariant: 'white'}}}
        placeholder="Full Name"
        textColor="#fff"
        onChangeText={name => setName(name)}
        mode="outlined"
        style={[styles.input, styles, {marginTop: 40}]}
      />
      <TextInput
        value={email}
        selectionColor="#fff"
        outlineColor="#FFF"
        theme={{colors: {onSurfaceVariant: 'white'}}}
        placeholder="Email Address"
        textColor="#fff"
        onChangeText={email => setEmail(email)}
        mode="outlined"
        style={[styles.input, styles]}
      />
  
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="IN"
        containerStyle={{
          width: '100%',
          backgroundColor: 'transparent',
          border: '2px solid #fff',
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth:  1,
          marginTop: 20
        }}
        numberText={{
          color: '#fff'
        }}
        textInputProps={{ placeholderTextColor: 'white'}}
        textContainerStyle={{
          backgroundColor: 'transparent',
          borderRadius: 5,
          borderColor: '#fff',
          borderLeftColor: 'transparent',
          borderLeftWidth: 0,
        }}
        textInputStyle={{
          color: '#fff'
        }}
        codeTextStyle={{color:"#ffffff"}}
        flagButtonStyle={{width: 10, marginLeft: 15}}
        disabled={false}
        disableArrowIcon={true}
        layout="first"
        onChangeText={text => {
          setValue(text);
        }}
        renderDropdownImage= <Icon
        source="chevron-down"
        color='#fff'
        size={20}
      />    
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        withShadow
        autoFocus
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
      {Object.values(errors).map((error, index) => ( 
                <Text key={index} style={styles.error}> 
                    {error} 
                </Text> 
      ))} 
      <Button
        textColor="#fff"
        mode="outlined"
        style={{
          borderColor: '#fff',
          marginTop: 20,
          padding: 5,
          borderRadius: 5,
        }}
        onPress={handleSubmit}>
        <BtnText>Sign Up</BtnText>
      </Button>
      <TextContainer>
        <Text style={{color: '#fff'}}>Already have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
          <Text style={{color: '#fff', marginLeft: 5, fontWeight: 'bold'}}>
            Sign In
          </Text>
        </TouchableOpacity>
      </TextContainer>
    </LinearGradient>
  );
};
const Container = styled.View`
  flex: 1;
  background: green;
  align-content: center;
  justify-content: center;
  padding: 20px;
`;
const TextContainer = styled.View`
  marginTop: 20px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;
const Header = styled.Text`
  font-size: 22px;
  font-family: 'ARIAL ROUNDED MT BOLD';
  color: #fff;
  marginTop: 80px;
  letter-spacing: 0.5px;
`;
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
  textInputStyle: {
    backgroundColor: 'transparent',
  },
});

export default SignUp;
