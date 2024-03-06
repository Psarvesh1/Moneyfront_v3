import React, {useState, useEffect}  from'react'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import { Modal, Portal, Text, PaperProvider, Button } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { PickerIOS } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { useNavigation } from '@react-navigation/native';

const AccountType = () => {
    const navigation = useNavigation()

  const [visible, setVisible] = React.useState(false);
  const [bank, selectBank] = useState('Select Bank');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: '#fff', marginTop: 600};
  const [selectedLanguage, setSelectedLanguage] = useState('Savings');

  useEffect(()=>{
    console.log(selectedLanguage)
  }, [selectedLanguage])
  return (
    <LinearGradient
      useAngle
      angle={45}
      start={{x: -1, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}
      colors={['#21b361', '#08a490', '#12ab7f', '#01a09d']}>
                <PaperProvider>

        <Container>
            <Title>
                Select Account Type
            </Title>
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
              <PickerIOS.Item label="Savings" value="Savings" />
              <PickerIOS.Item label="Current" value="Current" />
              <PickerIOS.Item label="NRE" value="NRE" />
              <PickerIOS.Item label="NRO" value="NRO" />


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
        <Button
        mode="contained"
        style={{
          borderRadius: 30,
          width: '30%',
          padding: 2,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginTop: 70,
          alignSelf: 'flex-end',
          marginRight: 10
        }}
        labelStyle={{fontSize: 16, color: '#000', fontWeight: 700}}
        buttonColor="#fff"
        onPress={() => navigation.navigate('IncomeSource')}>
        NEXT
      </Button>
        </Container>
        </PaperProvider>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    dropdown: {
        marginTop: 7,
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
      alignSelf: 'flex-start'
    },
    dropdownIcon:{
      alignSelf: 'flex-end',
      marginRight: 10
    }
})

const Container = styled.View`
    flex: 1;
    marginTop: 100px;
`

const Title = styled.Text`
    color: #fff;
    fontSize: 18px;
    fontWeight: 600;
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

export default AccountType