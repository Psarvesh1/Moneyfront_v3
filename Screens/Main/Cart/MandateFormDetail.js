import React, {useState} from 'react'
import styled from 'styled-components'
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Modal, Portal, Text, PaperProvider, Button, Divider } from 'react-native-paper';
import { PickerIOS } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View } from 'react-native';
const MandateFormDetail = () => {

    return (
      <Container>
          <BankContainer style={{marginTop: 16}}>
            <Icon name="bank" size={28} />
            <TextContainer>
              <Label>Selected Bank</Label>
              <BankText>ICICI BANK LTD 341801001350</BankText>
            </TextContainer>
          </BankContainer>
          <Divider/>
          <ScrollView showsVerticalScrollIndicator={false}>
          <InputContainer>
          <Input
            style={{fontSize: 16}}
            autoCorrect= {false}
            placeholder="Bank A/C Holder Name*"
            placeholderTextColor = '#899499'
          />
          </InputContainer>
          <InputContainer>
          <Input
            style={{fontSize: 16}}
            autoCorrect= {false}
            placeholder="Maximum Mandate Amount*"
            placeholderTextColor = '#899499'
            keyboardType = 'number-pad'
            inputMode= 'numeric'
          />
          </InputContainer>
          <FixedInputContainer>
            <InputLabel>
                ACCOUNT NUMBER*
            </InputLabel>
            <FixedInput
                style={{fontSize: 16}}
                autoCorrect= {false}
                placeholder="341801001350"
                placeholderTextColor = '#000'
                editable={false}
            />
          </FixedInputContainer>
          <FixedInputContainer>
            <InputLabel>
                ACCOUNT TYPE*
            </InputLabel>
            <FixedInput
                style={{fontSize: 16}}
                autoCorrect= {false}
                placeholder="Savings"
                placeholderTextColor = '#000'
                editable={false}
            />
          </FixedInputContainer>
          <FixedInputContainer>
            <InputLabel>
                Bank Name*
            </InputLabel>
            <FixedInput
                style={{fontSize: 16}}
                autoCorrect= {false}
                placeholder="ICICI BANK LTD"
                placeholderTextColor = '#000'
                editable={false}
            />
          </FixedInputContainer>
          <FixedInputContainer>
            <InputLabel>
                CITY*
            </InputLabel>
            <FixedInput
                style={{fontSize: 16}}
                autoCorrect= {false}
                placeholder="VALSAD"
                placeholderTextColor = '#000'
                editable={false}
            />
          </FixedInputContainer>
          <FixedInputContainer>
            <InputLabel>
                BRANCH NAME*
            </InputLabel>
            <FixedInput
                style={{fontSize: 16}}
                autoCorrect= {false}
                placeholder="VAPI GUNJAN"
                placeholderTextColor = '#000'
                editable={false}
            />
          </FixedInputContainer>
          <FixedInputContainer>
            <InputLabel>
                IFSC*
            </InputLabel>
            <FixedInput
                style={{fontSize: 16}}
                autoCorrect= {false}
                placeholder="ICICI0003418"
                placeholderTextColor = '#000'
                editable={false}
            />
          </FixedInputContainer>
          <FixedInputContainer>
            <InputLabel>
                MICR*
            </InputLabel>
            <FixedInput
                style={{fontSize: 16}}
                autoCorrect= {false}
                placeholder="396229035"
                placeholderTextColor = '#000'
                editable={false}
            />
          </FixedInputContainer>
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
    );
}

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    padding: 14px 10px;
`
const BankContainer = styled.View`
    flexDirection: row;
    padding: 8px;
    alignItems: center;
`
const TextContainer = styled.View`
    marginLeft: 20px;
`
const Label = styled.Text`
    fontSize: 16px;
    color: #899499;
`
const BankText = styled.Text`
    fontSize: 16px;
    marginTop: 8px;
    color: green;
`
const InputContainer = styled.View`
    padding: 20px 10px;
`
const Input = styled.TextInput`
    margin: 8px 2px 0px 0px;
    borderBottomWidth: 0.2px;
    borderBottomColor: #899499;
    paddingBottom: 3px
`
const InputLabel = styled.Text`
    fontSize: 12px;
    color: #899499;
`
const FixedInputContainer = styled.View`
    padding: 10px;
`
const FixedInput = styled.TextInput`
    fontSize: 16px;
    marginTop: 10px;
    borderBottomWidth: 0.2px;
    borderBottomColor: #899499;
    paddingBottom: 3px
`

const ButtonContainer = styled.View`
    backgroundColor: #fff;
    padding: 26px 20px;
`

export default MandateFormDetail