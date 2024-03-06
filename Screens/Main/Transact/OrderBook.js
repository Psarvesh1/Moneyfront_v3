import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {Text} from 'react-native'
import BookCard from '../../../Components/BookCard';
import data from '../../../utils/data/index.json'
const OrderBook = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      {data.orderBook.map((data, key)=> (
      <BookCard 
        key={key}
        amount={data.amount}
        installments={data.installments}
        frequency={data.frequency}
        register={data.register}
        start_date={data.start_date}
        end_date={data.end_date}
        />
      ))}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  backgroundColor: #efefef;
  height: 100%;
`;


export default OrderBook;
