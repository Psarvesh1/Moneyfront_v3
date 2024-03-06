import React, { useState } from "react"
import { Button } from "react-native-paper"
import styled from "styled-components"
import DropdownComponent from "../../../Components/Dropdown"
import { useNavigation } from "@react-navigation/native"

const Reports = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(undefined)
  const data = [
    { label: "Disha", acc: "Account # 488942" },
  ]

  return (
    <Container>
      <Title>
        User, Account # 488942
      </Title>
      <DropdownComponent placeholder= 'Select Account' width= '70%' />
      <Title>
        Select Type
      </Title>
      <DropdownComponent placeholder= 'Year Wise' width= '70%' />
      <Title>
        Financial Year
      </Title>
      <DropdownComponent placeholder= '2020-2021' width= '70%' />
      <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '90%',
          padding: 5,
          marginTop: 40,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
        labelStyle={{fontSize: 18}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate('reportdetail')}>
        Show
      </Button>
    </Container>
  );
}


const Container = styled.View`
  flex: 1;
  backgroundColor: #fff;
  flexDirection: column;
  alignItems: center;
`
const Title = styled.Text`
  fontSize: 20px;
  fontWeight: 400;
  margin: 20px 0;
`
export default Reports
