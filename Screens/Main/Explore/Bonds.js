import React from 'react'
import styled from 'styled-components'
import BondsCard from '../../../Components/BondsCard'
import data from '../../../utils/data/index.json'
const Bonds = () => {
  return (
    <Container>
        {data.bonds.map((data)=> (
            <BondsCard 
            bonds={data.bonds_name}
            desc={data.desc}
            trending={data.flag_trending}
            />
        ))}  
    </Container>
  )
}
const Container = styled.ScrollView`
    flex: 1;
    padding: 10px;
    backgroundColor: #454c66;
`
export default Bonds