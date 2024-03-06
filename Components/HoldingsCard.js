import styled from "styled-components";
import { Divider } from "react-native-paper";
import React from 'react'


const HoldingsCard = ({scheme, gainloss, value}) => {
  return (
    <>
        <Column>
          <Row>
            <SchemeTitle>{scheme}</SchemeTitle>
          </Row>
          <Row style={{justifyContent: 'center'}}>
            <GainLoss>{gainloss}</GainLoss>
         </Row>
          <Row>
            <Value>{value}</Value>
          </Row>
        </Column>
        <Divider
          style={{
            width: '100%',
            borderColor: '#000',
            borderBottomWidth: 0.5,
          }}
        />
    </>
  );
}

const Container = styled.View`
    flex: 1;
    flexDirection: column;
    alignItems: center;
    backgroundColor: #efefef;
`

const Column = styled.View`
    width: 100%;
    flexDirection: row;
`
const Row = styled.View`
    padding: 14px 10px;
    width: 33%;
    flexDirection: row;
`
const SchemeTitle = styled.Text`
    fontSize: 15px;
    fontWeight: 400;
`

const GainLoss = styled.Text`
    textAlign: center;
    fontSize: 15px;
    color: green;
`
const Value = styled.Text`
    fontSize: 15px;
    fontWeight: 500
`


export default HoldingsCard