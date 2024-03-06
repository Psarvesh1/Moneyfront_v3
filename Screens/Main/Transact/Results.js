import React from 'react';
import {Divider} from 'react-native-paper';
import styled from 'styled-components';
import data from '../../../utils/data/index.json';
import { useNavigation } from '@react-navigation/native';
const Results = () => {
    const navigation = useNavigation()
  return (
    <Container>
      {data.results.map(data => (
        <>
          <Card onPress = {()=> navigation.navigate('result_detail') }>
            <Title>{data.title}</Title>
          </Card>
          <Divider />
        </>
      ))}
    </Container>
  );
};

const Container = styled.View`
  padding: 10px 0;
`;
const Card = styled.TouchableOpacity`
  padding: 10px 10px;
  backgroundColor: #fff;
`;
const Title = styled.Text`
  fontSize: 16px;
`;

export default Results;
