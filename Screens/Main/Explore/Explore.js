import React from 'react';
import styled from 'styled-components';
import {Searchbar, Divider} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Card from '../../../Components/Card';
import data from '../../../utils/data/index.json';

const Explore = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  console.log(data.Transact.name)
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header>Explore</Header>
      <Searchbar
        placeholder="Search Mutual Funds"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.search}
        containerStyle={{ padding: 0 }} 
      />
      <Divider />
      <Title>Our Picks!</Title>
      <Desc>
        Save time on research and go with our expert data science driven
        recommendations in each category.
      </Desc>
    <CardView horizontal showsHorizontalScrollIndicator={false} >
      {data.card1.map((data) => (
        <Card
        key={Math.random()}
        title={data.title}
        meta={data.meta}
        style={{backgroundColor: data.background}}
        name ={data.name}
        screen = {data.screen}
      />
      ))}
      </CardView>
      <Divider />
      <Title>Recommended for you!</Title>
      <Desc>
        Pick  based on the risks you are willing to take and the expected return.
      </Desc>
      <CardView horizontal showsHorizontalScrollIndicator={false} >
      {data.card2.map((data) => (
        <Card
        key={Math.random()}
        icon={data.icon}
        title={data.title}
        meta={data.meta}
        name={data.name}
        style={{backgroundColor: data.background}}
        iconType={data.type}
        screen = {data.screen}
      />
      ))}
      </CardView>
      <Divider />
      <Title>Alternate Products</Title>
      <Desc>
        Moneyfront brings you a list of alternative products you can purchase.
      </Desc>
      <CardView horizontal showsHorizontalScrollIndicator={false} >
      {data.card3.map((data) => (
        <Card
        key={Math.random()}
        icon={data.icon}
        title={data.title}
        meta={data.meta}  
        name={data.name}
        style={{backgroundColor: data.background}}
        titleStyle={{color: '#000000'}}
        metaStyle={{color: '#808080'}}
        iconType={data.type}
        screen = {data.screen}
      />
      ))}
      </CardView>
    </Container>
  );
};


const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 10px;
  flex-direction: column;
`;
const Header = styled.Text`
  fontSize: 28px;
  color: black;
  font-weight: bold;
`;
const Title = styled.Text`
  fontSize: 22px;
  color: black;
  font-weight: bold;
  marginTop: 15px;
`;
const Desc = styled.Text`
  fontSize: 16px;
  color: grey;
  marginTop: 5px;
`;
const CardView = styled.ScrollView`
    flex: 1;
    height: 200px;
`
const styles = StyleSheet.create({
  search: {
    marginTop: 10,
    width: '100%',
    marginBottom: 10,
    padding: -20,
    borderRadius: 10
  },
});

export default Explore;
