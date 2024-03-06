import React,{useState} from 'react'
import styled from 'styled-components'
import { Modal, Portal, Text, PaperProvider, Button, Divider } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { PickerIOS } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome'
const BuyNow = () => {
    const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: '#fff', marginTop: 530, paddingTop: 0};
  const [selectedLanguage, setSelectedLanguage] = useState('New Folio');
  return (
    <Container>
        <PaperProvider>
        <Header>
            <Text style={{fontSize: 26, fontWeight: 'bold'}} >Lumpsum</Text>
        </Header>
        <TitleContainer>
            <Title>Axis Global Equity Alpha Fund of Fund Growth Direct Plan</Title>
        </TitleContainer>
        <InputContainer>
            <Icon name='rupee' size={22} style={{alignSelf: 'center', marginLeft: 10}}/>
            <TextInput 
                style={{fontSize: 22, marginLeft: 10, fontWeight: 'bold'}}
                placeholder='Enter Amount'
                placeholderTextColor='#899499'
                inputMode='numeric'
            />
        </InputContainer>
        <Portal>
          <Modal
            theme={{
              colors: {
                backdrop: 'transparent',
              },
            }}
            visible={visible}
            onDismiss={hideModal}
            style={{margin: 0}}
            contentContainerStyle={containerStyle}>
            <View> 
            <ButtonContainer>
                    <TouchableOpacity onPress={()=> {
                      hideModal();
                      setSelectedLanguage('New Folio')
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
            </View>
            
          </Modal>
        </Portal>
        <Dropdown>
        <Text style={{fontSize: 17, color: '#807d7d'}}>Folio</Text>
        <TouchableOpacity onPress={showModal} style={styles.dropdown}>
            <View style={{width: '80%'}}>
            <Text style={styles.dropdownText}>{selectedLanguage}</Text>
            </View>
            <View>
            <Icon name='angle-down' size={22} style={styles.dropdownIcon}/>
            </View>
        </TouchableOpacity>
        </Dropdown>
        <View style={{marginTop: 20}}>
        <Row>
            <Column>
              <Label>Category</Label>
              <Value>International</Value>
            </Column>
            <Column style={{marginRight: 40}}>
              <Label>Min Investment</Label>
              <Value>100</Value>
            </Column>
        </Row>
        <Divider/>
        <Row>
            <Column>
              <Label>NAV Rs.</Label>
              <Value>16.0143</Value>
            </Column>
            <Column style={{marginRight: 50}}>
              <Label>NAV Date</Label>
              <Value>23 Feb 2024</Value>
            </Column>
        </Row>
        <Divider/>
        </View>
        <View style={{backgroundColor: '#fff', padding: 10}}>
            <Label style={{fontSize: 16}}>Exit Load</Label>
            <Value style={{marginTop: 10}}>NIL upto 10% of Investment and 1% for remaining investments on or before 12M, Nil after 12M</Value>
        </View>
        <Divider/>
        <View style={{backgroundColor: '#fff', padding: 10, height: 200}}>
            <Label style={{fontSize: 16}}>Maximum Amount</Label>
            <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '80%',
          padding: 2,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          alignSelf: 'center',
          marginTop: 40
        }}
        labelStyle={{fontSize: 18}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate('mandate_form')}>
        Add to Basket
      </Button>
        </View>
        </PaperProvider>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
`

const Header = styled.View`
    padding: 10px 20px;
    backgroundColor: #fff;
`
const TitleContainer = styled.View`
    alignItems: center;
    padding: 16px;
    backgroundColor: #627593;
`
const Title = styled.Text`
    fontSize: 18px;
    fontWeight: 400;
    color: #fff;
    textAlign: center;
`
const InputContainer = styled.View`
    backgroundColor: #fff;
    padding: 20px 4px;
    flexDirection: row;
    marginTop: 10px;
`

const Dropdown = styled.View`
    backgroundColor: #fff;
    padding: 12px 10px;
    marginTop: 10px;
`

const Row = styled.View`
    padding: 10px 10px;
    flexDirection: row;
    justifyContent: space-between;
    backgroundColor: #fff;
`

const Column = styled.View`
    height: 50px;
    justifyContent: space-between
`

const Label = styled.Text`
    fontSize: 17px;
    color: #899499;
`
const Value = styled.Text`
    fontSize: 18px;
`

const ButtonContainer = styled.View`
    padding: 10px 15px;
    flexDirection: row;
    justifyContent: space-between;
    backgroundColor: #f7f7f7;
`
const ModalButton = styled.Text`
  fontSize: 16px;
  color: green;
`

const styles = StyleSheet.create({
    dropdown: {
        marginTop: 10,
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
      marginLeft: 5  
    },
    dropdownIcon:{
      alignSelf: 'flex-end',
      marginRight: 10
    }
})



export default BuyNow