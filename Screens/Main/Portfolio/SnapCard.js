import React from 'react'
import SnapData from '../../../Components/SnapData'
import styled from 'styled-components'
import { View, Text } from "react-native";
import data from '../../../utils/data/index.json'
import PieChart from 'react-native-pie-chart'

const SnapCard = () => {
    const widthAndHeight = 140
  const series = [123]
  const sliceColor = ['#bb4d43']
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Title>Good Afternoon, User!</Title>
      <Title style={{marginTop: 10, marginBottom: 30}}>Account #490237</Title>
      {data.snapshot.map(data => (
        <SnapData
          amount={data.invested_amount}
          current={data.current_value}
          amount_invested={data.amount}
          current_value={data.current}
          title={data.title}
          flag={data.button}
        />
      ))}
      <Profile>
        <View style={{backgroundColor: '#8392ab', padding: 12}}>
          <Head>Profile Allocation</Head>
        </View>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.55}
          coverFill={'#fff'}
          style={{alignSelf: 'center', marginTop: 20}}
        />
        <View
          style={{
            backgroundColor: '#7f7f7f',
            width: 120,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 12}}>🔴</Text>
          <Text style={{textAlign: 'center'}}>Equity : 100%</Text>
        </View>
        <Meta>Recommended: 50% Equity | 30% Debt | 15% Cash | 5% Hybrid</Meta>
        <View
          style={{flexDirection: 'row', marginBottom: 30, alignSelf: 'center'}}>
          <Info>Risk Profile :</Info>
          <Info style={{color: '#2d9be6'}}> Moderate</Info>
        </View>
      </Profile>
    </Container>
  );
}

const Container = styled.ScrollView`
    flex: 1;
    backgroundColor: #fff;
`

const Title = styled.Text`
    fontSize: 22px;
    marginTop: 30px;
    textAlign: center;
    color: #05445E;
`

const Profile = styled.View`
  flexDirection: column;
  height: 350px;
`
const Head = styled.Text`
  fontSize: 18px;
  textAlign: center;
  alignSelf: center;
  color: white;
`
const Meta = styled.Text`
  fontSize: 14px;
  textAlign: center;
  marginTop: 20px;
  paddingLeft: 10px;
  paddingRight: 20px;
`
const Info = styled.Text`
  fontSize: 14px;
  marginTop: 10px;
`

export default SnapCard