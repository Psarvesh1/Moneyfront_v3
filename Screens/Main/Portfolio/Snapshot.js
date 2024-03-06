import styled from "styled-components";
import { Button } from "react-native-paper";
import React, { useState } from 'react'
import {StyleSheet} from 'react-native'
import SnapNoData from "../../../Components/SnapNoData";
import SnapData from "../../../Components/SnapData";
import { View, Text } from "react-native";
import data from '../../../utils/data/index.json'
import SnapCard from "./SnapCard";
import PieChart from 'react-native-pie-chart'

const Snapshot = () => {
  const [flag, setFlag] = useState(1)
  const widthAndHeight = 140
  const series = [123]
  const sliceColor = ['#bb4d43']

  return (
    <>
      {flag == 1 ? <SnapCard/> : <SnapNoData/>}
    </>
  );
}


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
export default Snapshot