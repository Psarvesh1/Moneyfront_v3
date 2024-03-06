import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Modal, Portal, Text, PaperProvider, Button } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { PickerIOS } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { useNavigation } from '@react-navigation/native';

const AddCart = () => {
  const navigation = useNavigation()

  const [visible, setVisible] = React.useState(false);
  const [bank, selectBank] = useState('Select Bank');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: '#fff', marginTop: 430};
  const [selectedLanguage, setSelectedLanguage] = useState('ICICI BANK LTD - (15000)');

  useEffect(()=>{
    console.log(selectedLanguage)
  }, [selectedLanguage])
  return (
    <Container>
      <Head>Select Mandate</Head>
      <PaperProvider>
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
              }}>
              <PickerIOS.Item label="ICICI BANK LTD - (15000)" value="ICICI BANK LTD - (15000)" />
              <PickerIOS.Item label="AXIS BANK LTD - (20000)" value="AXIS BANK LTD - (20000)" />
            </PickerIOS>
          </Modal>
        </Portal>
        <View style={{paddingLeft: 10, paddingRight: 10}}>
        <TouchableOpacity onPress={showModal} style={styles.dropdown}>
            <View style={{width: '80%'}}>
            <Text style={styles.dropdownText}>{selectedLanguage}</Text>
            </View>
            <View>
            <Icon name='angle-down' size={22} style={styles.dropdownIcon}/>
            </View>
        </TouchableOpacity>
        </View>
        <Meta>
          Start early! Your first payment will be debited today to purchase the scheme(s)
          selected. Subsequent monthly installments will begin from your preferred start due
        </Meta>
        <View style={{marginTop: 200, paddingLeft: 10,paddingRight: 10}}> 
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
        onPress={() => navigation.navigate('mandate_form')}>
        Proceed
      </Button>
      <TouchableOpacity style={{alignItems: 'center', marginTop: 30}}>
        <Text style={{color: 'green', fontSize: 18}}>Create New Mandate</Text>
      </TouchableOpacity>
        </View>
      </PaperProvider>
    </Container>
  );
};
const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
`
const Head = styled.Text`
    fontSize: 20px;
    fontWeight: 500;
    marginTop: 40px;
    marginLeft: 10px;
`

const Meta = styled.Text`
    fontSize: 15px;
    textAlign: center;
    marginTop: 50px;
`
const ModalButton = styled.Text`
  fontSize: 16px;
  color: green;
`

const ButtonContainer = styled.View`
    padding: 10px 15px;
    flexDirection: row;
    justifyContent: space-between;
    backgroundColor: #f7f7f7;
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

export default AddCart