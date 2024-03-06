import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import data from '../../../utils/data/index.json';
import TransactIcons from '../../../Components/TransactIcons'
import Card from '../../../Components/Card'



const TransactNow = () => {
  console.log('me ahe pagal')
  console.log(data.Transact.name)
  return (
    <Container>
      <Header>Transact on Existing Portfolio</Header>
      <CardView>
      {data.Transact.map((data)=>(
        <TransactIcons name={data.name} title={data.title}/>
      ))}
      </CardView>
      <Meta>New Purchase</Meta>
      <CardViewX horizontal showsHorizontalScrollIndicator={false}>
      {data.transactCard.map((data) => (
        <Card
        key={Math.random()}
        title={data.title}
        meta={data.meta}
        style={{backgroundColor: data.background}}
        name ={data.name}
        screen={data.screen}
      />
      ))}
      </CardViewX>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 10px;
  backgroundColor: #efefef;
`;
const Header = styled.Text`
  fontSize: 16px;
  color: black;
  marginTop: 10px;
`;
const Meta = styled.Text`
  marginTop: 60px;
  fontSize: 16px;
`

const CardView = styled.View`
  flex: 0.2;
  justifyContent: space-around;
  flexDirection: row;
  marginTop: 20px;
`;

const CardViewX = styled.ScrollView`
  flex: 0.6; 
  flexDirection: row;
`;
export default TransactNow;
