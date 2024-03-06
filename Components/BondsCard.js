import React from 'react'
import styled from 'styled-components'
import { ImageBackground, Text, View } from 'react-native'
import interlaced from '../assets/images/interlaced.png' 
const BondsCard = ({bonds, desc, trending}) => {
  return (
    <Card source={interlaced} resizeMode="cover">
        <View>
        {trending == ''? null : 
            <Trending>
                <Text style={{color: '#fff'}}>{trending}</Text>
            </Trending>}
        <Title>
            {bonds}
        </Title>
        </View>
        
        <Desc>
            {desc}
        </Desc>
    </Card>
  )
}
const Card = styled.ImageBackground`
    borderRadius: 10px;
    width: 100%;
    borderWidth: 1px;
    height: 180px;
    flexDirection: column;
    justifyContent: space-between;
    overflow: hidden;
    marginBottom: 16px;
`
const Trending = styled.View`
    fontSize: 14px;
    alignSelf: flex-end;
    background: #0077fa;
    padding: 3px 14px;
    borderRadius: 10px;
    marginRight: 8px;    
    marginTop: 14px;
`
const Title = styled.Text`
    fontSize: 22px;
    fontWeight: 500;
    marginTop: 30px;
    marginLeft: 10px;
    position: absolute;
`
const Desc = styled.Text`
    fontSize: 14px;
    marginLeft: 10px;
    marginBottom: 10px;
`
export default BondsCard