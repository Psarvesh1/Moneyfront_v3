import React, {useState, useEffect}  from'react'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import { Modal, Portal, Text, PaperProvider, Button } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { PickerIOS } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'

import { useNavigation } from '@react-navigation/native';

const DOB = () => {
    const navigation = useNavigation()

    const [date, setDate] = useState(new Date())

    const [open, setOpen] = useState(false)
    
    
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    const fullDate = () =>(
        <>
        <InputText>{day}-</InputText>
        <InputText>{month}-</InputText>
        <InputText>{year}</InputText>
        </>
        
    )
    const [label, setLabel] = useState([day, month, year])
    const changeDate = (date) => {
        setOpen(false)
        setDate(date)
    }
    console.log(date)
  return (
    <LinearGradient
      useAngle
      angle={45}
      start={{x: -1, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}
      colors={['#21b361', '#08a490', '#12ab7f', '#01a09d']}>

        <Container>
            <Title>
                Enter your Date of Birth
            </Title>
            <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '95%',
          padding: 2,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginTop: 10,
          alignSelf: 'center',
          
        }}
        // alignItems="flex-start"
        labelStyle={{fontSize: 16, 
            color: '#000', 
            fontWeight: 700}}
        buttonColor="#fff"
        onPress={() => setOpen(true)}>
            {fullDate()}
      </Button>
            {/* <TouchableOpacity 
            style={[styles.input,{width: '95%'}]}
            onPress={() => setOpen(true)}
            >
            <DateInput/>
            </TouchableOpacity> */}

            <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
        onConfirm={changeDate}
        onCancel={() => {
          setOpen(false)
        }}
      />
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
        >
        NEXT
      </Button>
        </Container>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    input: {
        alignSelf: 'center', 
        marginTop: 10,
    },
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
const InputText = styled.Text`
    fontSize: 18px;
    fontWeight: 500
`
const DateInput = styled.TextInput`
    backgroundColor: #fff;
    padding: 10px;
    borderRadius: 5px;
`

export default DOB