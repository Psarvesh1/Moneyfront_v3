import styled from "styled-components";
import { Divider } from "react-native-paper";
import React from 'react'
import HoldingsCard from "./HoldingsCard";
import data from '../utils/data/index.json'
import HoldingsBottomSheet from "../Screens/Main/Portfolio/HoldingsBottomSheet";

const HoldingsData = () => {
  return (
    <Container>
      <TitleContainer>
        <Equity>Equity!</Equity>
      </TitleContainer>
      <Header>
      <HeadColumn>
            <HeadTitle>Scheme</HeadTitle>
          </HeadColumn>
          <HeadColumn style={{borderBottomWidth: 4, borderBottomColor: '#4abc64'}}>
            <HeadTitle>Unrealised {'\n'}GainLoss(Rs.)</HeadTitle>
          </HeadColumn>
          <HeadColumn style={{borderBottomWidth: 4,borderBottomColor: '#4abc64', marginLeft: 10, marginRight: 10, width: '32%'}}>
            <HeadTitle>Current {'\n'}Value</HeadTitle>
      </HeadColumn>
      </Header>
      <Divider
          style={{
            width: '100%',
            borderColor: '#000',
            borderBottomWidth: 0.5,
            marginTop: 0.8
          }}
      />
      <Table showsVerticalScrollIndicator={false}>
      {data.holdings.map((data) => (
        <HoldingsCard scheme={data.scheme} gainloss={data.gain_loss} value={data.current_value} />
      ))}
      </Table>
      <HoldingsBottomSheet/>
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
    flexDirection: column;
    alignItems: center;
    backgroundColor: #efefef;
`
const TitleContainer = styled.View`
    padding: 10px 0;
    width: 100%;
    alignItems: center;
    backgroundColor: #667691
`
const Equity = styled.Text`
    fontSize: 16px;
    textAlign: center;
    width: 100%;
    color: #fff;
    fontWeight: 500
`
const Table = styled.ScrollView`
    width: 100%;
    backgroundColor: #fff
`
const Header = styled.View`
width: 100%;
backgroundColor: #fff ;
   flexDirection: row;

`
const TableHead = styled.View`
    flexDirection: row;
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
const HeadTitle = styled.Text`;
    fontSize: 16px;
    textAlign: left;
    fontWeight: 400;
`
const HeadColumn = styled.View`
    padding: 10px 10px;
    width: 33%;
    writingDirection: rtl
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


export default HoldingsData