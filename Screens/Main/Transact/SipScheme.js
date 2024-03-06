import React, {useState} from 'react';
import {Searchbar, Divider, Button} from 'react-native-paper';
import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Dropdown from '../../../Components/Dropdown';

const SipScheme = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [tab, setTab] = useState(0);
  const [tab2, setTab2] = useState(0);

  return (
    <Container>
      <Searchbar
        placeholder="Search Schemes"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.search}
        inputStyle={{color: '#c2c3c2', fontSize: 18, marginVertical:-10, paddingVertical: -30}}
      />
      <Divider style={{width: '100%'}} />
      <Title>Asset Type</Title>
      <SegmentedControl
        values={['Equity', 'Cash', 'Debt', 'Others']}
        selectedIndex={tab}
        onChange={event => {
          setTab(event.nativeEvent.selectedSegmentIndex);
        }}
        style={{width: '100%', alignSelf: 'center', color: '#080808'}}
      />
      <Title>Fund Category</Title>
      <Dropdown width='100%' />
      <Title>Select AMC Name</Title>
      <Dropdown width='100%' />
      <Title>Options</Title>
      <SegmentedControl
        values={['All', 'Growth', 'Dividend']}
        selectedIndex={tab2}
        onChange={event => {
          setTab2(event.nativeEvent.selectedSegmentIndex);
        }}
        style={{width: '100%', alignSelf: 'center', color: '#080808'}}
      />
      <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '100%',
          padding: 5,
          marginTop: 60,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
        labelStyle={{fontSize: 18}}
        buttonColor="#649e3e"
        onPress={() => console.log('Pressed')}>
        View Schemes
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  backgroundColor: #fff;
  padding: 10px;
  alignItems: center;
`;
const Title = styled.Text`
  fontSize: 20px;
  marginTop: 20px;
  marginBottom: 20px;
  color: #505050;
  fontWeight: 500;
  alignSelf: flex-start;
`;
const styles = StyleSheet.create({
  search: {
    marginTop: 10,
    width: '100%',
    marginBottom: 10,
    padding: 0,
    borderRadius: 10,
    paddingVertical: -12,
    backgroundColor: '#f3f2f6',
    color: '#c2c3c2'
  },
});

//#4d4d4f
//#080808 tab

export default SipScheme;
