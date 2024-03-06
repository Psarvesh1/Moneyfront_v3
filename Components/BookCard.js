import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {Text} from 'react-native'


const BookCard = ({amount, installments, frequency, register,start_date,end_date}) => {
  return (
    <CardContainer>
        <Head>SIP</Head>
        <Title>HDFC Top 100 Fund Growth Direct Plan</Title>
        <Row>
            <Column>
                <Info>{amount}</Info>
                <Meta>Amount</Meta>
            </Column>
            <Column>
                <Info nav>{installments}</Info>
                <Meta nav>Installments</Meta>
            </Column>
            <Column>
                <Info>{frequency}</Info>
                <Meta>Frequency</Meta>
            </Column>
        </Row>
        <Row>
            <Column>
                <Info>{register}</Info>
                <Meta>Registered</Meta>
            </Column>
            <Column>
                <Info nav>{start_date}</Info>
                <Meta nav>Start Date</Meta>
            </Column>
            <Column>
                <Info>{end_date}</Info>
                <Meta>End Date</Meta>
            </Column>
        </Row>
    </CardContainer>
  );
};


const CardContainer = styled.View`
  flex: 1;
  padding: 10px 10px 50px 10px;
  backgroundColor: #fff;
  marginBottom: 20px;
  marginTop: 14px;
`
const Head = styled.Text`
    alignSelf: center;
    fontSize: 18px;
`
const Title= styled.Text`
    fontSize: 18px;
    fontWeight: 400;
    marginTop: 20px;
    marginBottom: 8px;
    marginLeft: 20px
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
    alignSelf: center;
`
const Meta = styled.Text`
    fontSize: 16px;
    marginTop: 4px;
    alignSelf: center;
    color: #9e9f9d;
`
export default BookCard;
