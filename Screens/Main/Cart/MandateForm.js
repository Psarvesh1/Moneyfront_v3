import React, {useState} from 'react'
import styled from 'styled-components'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Modal, Portal, Text, PaperProvider, Button, Divider } from 'react-native-paper';
import { PickerIOS } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MandateForm = () => {

    const navigation = useNavigation()

    const [visible, setVisible] = React.useState(false);
    const [bank, selectBank] = useState('Select Bank');

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'transparent'};

    const [selectedLanguage, setSelectedLanguage] = useState(
      'ICICI BANK LTD - (15000)',
    );
    
    return (
      <Container>
        <PaperProvider>
          <BankContainer style={{marginTop: 20}}>
            <Icon name="bank" size={32} />
            <TextContainer>
              <Label>Select Existing Bank Details</Label>
              <Portal>
                <Modal
                  theme={{
                    colors: {
                      backdrop: 'transparent',
                    },
                  }}
                  visible={visible}
                  onDismiss={hideModal}
                  contentContainerStyle={containerStyle}>
                  <ButtonContainer>
                    <TouchableOpacity onPress={()=> {
                      hideModal();
                      selectBank('Select Bank')
                    }}>
                      <ModalButton>Cancel</ModalButton>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {
                      hideModal()
                    }}>
                    <ModalButton>Done</ModalButton>
                    </TouchableOpacity>
                  </ButtonContainer>
                  <PickerIOS
                    selectedValue={selectedLanguage}
                    label="Select Mandate"
                    enabled={false}
                    onValueChange={(itemValue, itemIndex) => {
                      setSelectedLanguage(itemValue);
                      selectBank(itemValue);
                    }}>
                    <PickerIOS.Item
                      label="ICICI BANK LTD - (15000)"
                      value="ICICI BANK LTD - (15000)"
                    />
                    <PickerIOS.Item
                      label="AXIS BANK LTD - (20000)"
                      value="AXIS BANK LTD - (20000)"
                    />
                  </PickerIOS>
                </Modal>
              </Portal>
              <TouchableOpacity onPress={showModal}>
                <BankText>{bank}</BankText>
              </TouchableOpacity>
            </TextContainer>
          </BankContainer>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: 'black',
                height: 0.5,
                flex: 1,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{alignSelf: 'center', paddingHorizontal: 5, fontSize: 18}}>
              Or
            </Text>
            <View
              style={{
                backgroundColor: 'black',
                height: 0.5,
                flex: 1,
                alignSelf: 'center',
              }}
            />
          </View>
          <BankContainer>
            <Icon name="bank-plus" size={32} />
            <TextContainer>
              <Label>Add A New Bank Account</Label>
              <IFSC 
                style={{fontSize: 16}}
                autoCapitalize = {'characters'}
                autoCorrect= {false}
                placeholder="Enter IFCS Code"
                placeholderTextColor = '#899499'
              />
            </TextContainer>
          </BankContainer>
          <Divider/>
          <Button
        textColor="green"
        mode="outlined"
        style={{
          borderColor: '#fff',
          marginTop: 30,
          borderRadius: 5,
          borderColor: 'green',
          width: '80%',
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('mandate_detail_form')}>
        <BtnText>Done</BtnText>
      </Button>
        </PaperProvider>
        
      </Container>
    );
}


const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    padding: 14px 0;
`
const BankContainer = styled.View`
    flexDirection: row;
    padding: 8px 26px;
    alignItems: center;
`
const BtnText = styled.Text`
  font-size: 18px;
  letter-spacing: 1px;
`;

const TextContainer = styled.View`
    marginLeft: 20px;
`
const Label = styled.Text`
    fontSize: 16px;
`
const BankText = styled.Text`
    fontSize: 16px;
    marginTop: 8px;
    color: #899499;
`
const ModalButton = styled.Text`
  fontSize: 16px;
  color: green;
`
const IFSC = styled.TextInput`
    margin: 8px 2px 0px 0px;
`

const ButtonContainer = styled.View`
    padding: 10px 15px;
    flexDirection: row;
    justifyContent: space-between;
    backgroundColor: #f7f7f7;
    marginTop: 100px
`

const styles = StyleSheet.create({
    dropdown: {
        marginTop: 60,
        height: 40,
        backgroundColor: '#f3f2f6',
        borderRadius: 5,
        padding: 8,
        shadowColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    
        elevation: 2,
        width: '100%'
      },
    dropdownText:{
      fontSize: 18,
      alignSelf: 'flex-end'
    },
    dropdownIcon:{
      alignSelf: 'flex-end',
      marginRight: 10
    }
})

export default MandateForm