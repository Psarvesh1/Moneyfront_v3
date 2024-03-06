import React from 'react'
import styled from 'styled-components'
import { Divider } from 'react-native-paper'
const CartCard = ({date, months, installment, dividend, folio, title}) => {
  return (
    <CardContainer>
        <Title>{title}</Title>
        <Row>
            <Column>
                <Info>{date}</Info>
                <Meta>Start Date</Meta>
            </Column>
            <Column>
                <Info style={{alignSelf: 'center'}}>{months}</Info>
                <Meta style={{alignSelf: 'center'}}>Months</Meta>
            </Column>
            <Column>
                <Info style={{alignSelf: 'center', backgroundColor: '#42f54e', paddingLeft:4, paddingRight: 4}}>{installment}</Info>
                <Meta style={{alignSelf: 'center', textAlign: 'center'}}>Installment Amount</Meta>
            </Column>
        </Row>
        <Row>
            <Column>
                <Info>{dividend}</Info>
                <Meta>Dividend Type</Meta>
            </Column>
            <Column style={{marginRight: 80}} >
                <Info>{folio}</Info>
                <Meta>Folio</Meta>
            </Column>
        </Row>
    </CardContainer>
    )
}

const CardContainer = styled.View`
  flex: 1;
  padding: 10px 10px 50px 10px;
  backgroundColor: #fff;
  marginTop: 14px;
`
const Title= styled.Text`
    fontSize: 18px;
    fontWeight: 400;
    marginTop: 20px;
    marginBottom: 8px;
`
const Row = styled.View`
    width: 100%;
    flex: 0.14;
    flexDirection: row;
    justifyContent: space-between;
    marginTop: 20px;
`

const Column = styled.View`
    flexDirection: column;
    width: 33%
`
const Info = styled.Text`
    fontSize: 16px;
    fontWeight: 600;
`
const Meta = styled.Text`
    fontSize: 16px;
    marginTop: 4px;
    color: #9e9f9d;
`

export default CartCard