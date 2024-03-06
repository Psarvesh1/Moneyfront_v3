import React from 'react'
import styled from 'styled-components'
import TransactCard from '../../../Components/TransactCard'
import data from '../../../utils/data/index.json'
const BuyMore = () => {
  return (
    <Container 
    contentContainerStyle={{paddingBottom: 40}}
    showsVerticalScrollIndicator={false}
    >
        {data.buymore.map((data, key)=>(
            <TransactCard
            title ={data.title}
            units ={data.units}
            market_value = {data.market_value}
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

export default BuyMore;