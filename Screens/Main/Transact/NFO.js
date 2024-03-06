import React from 'react'
import styled from 'styled-components'
import NFOCard from '../../../Components/NFOCard'
import data from '../../../utils/data/index.json'
const NFOScreen = () => {
  return (
    <Container contentContainerStyle={{paddingBottom: 40}}>
        {data.NFO.map((data, key)=>(
            <NFOCard
            title ={data.title}
            type ={data.type}
            min_amount = {data.min_amount}
            key={key}
        />
        ))}
        
    </Container>
  )
}

const Container = styled.ScrollView`
    flex: 1;
    backgroundColor: #efefef;
    padding: 10px 10px 60px 10px;
`

export default NFOScreen;