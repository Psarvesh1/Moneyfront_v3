import React from 'react'
import styled from 'styled-components'
import ReportCard from '../../../Components/ReportCard'
import data from '../../../utils/data/index.json'
const ReportDetail = () => {
  return (
    <Container>
        <ReportCard/>
    </Container>
  )
}

const Container = styled.ScrollView`
    flexDirection: column;
    padding: 20px;
`

export default ReportDetail