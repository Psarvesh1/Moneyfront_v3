import styled from "styled-components";
import { Button } from "react-native-paper";
import React,{useState} from 'react'
import HoldingsNoData from "../../../Components/HoldingsData";
import HoldingsData from "../../../Components/HoldingsNoData";


const Holdings = () => {
  const [flag, setFlag] = useState(1)
  return (
    <>
    {flag==1? <HoldingsNoData/>: <HoldingsData/>}
    </>
  );
}

export default Holdings