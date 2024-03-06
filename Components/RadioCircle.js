import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Newbie from '../assets/images/Newbie.png';
import NewbieSelected from '../assets/images/Newbie_Selected.png';
import Knowledgeable from '../assets/images/Knowledgeable.png';
import Knowledgeable_selected from '../assets/images/Knowledgeable_Selected.png';
import Proficient from '../assets/images/Proficient.png';
import ProficientSelected from '../assets/images/Proficient_Selected.png';
import Expert from '../assets/images/Expert.png';
import ExpertSelected from '../assets/images/Expert_Selected.png';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import styled from 'styled-components';
import { SimpleGrid } from 'react-native-super-grid';

export default function RadioCircle({data, data1, data2, onSelect}) {
    console.log(data1)
//   const data = data1.concat(data2)
  const [userOption, setUserOption] = useState(null);

  const [img, setImg] = useState(null);
  const selectHandler = value => {
    onSelect(value);
    setUserOption(value);
    setImg(value);
  };

  console.log(userOption);

  const renderImage = item => {
    if (item === 'Newbie') {
      return renderNewbie(userOption);
    } else if (item === 'knowledge') {
      return renderKnowledge(userOption);
    } else if (item === 'proficient') {
      return renderProficient(userOption);
    } else if (item === 'expert') {
      return renderExpert(userOption);
    }
  };
  const renderNewbie = item => {
    if (item === 'Newbie') {
      return <Icon source={NewbieSelected} />;
    } else {
      return <Icon source={Newbie} />;
    }
  };
  const renderKnowledge = item => {
    if (img === 'knowledge') {
      return <Icon source={Knowledgeable_selected} />;
    } else {
      return <Icon source={Knowledgeable} />;
    }
  };
  const renderProficient = item => {
    if (img === 'proficient') {
      return <Icon source={ProficientSelected} />;
    } else {
      return <Icon source={Proficient} />;
    }
  };
  const renderExpert = item => {
    if (img === 'expert') {
      return <Icon source={ExpertSelected} />;
    } else {
      return <Icon source={Expert} />;
    }
  };
  const renderIcon = ()=> {
    {data.map(item => (
        <TouchableOpacity onPress={() => selectHandler(item.value)}>
          <View>
            {renderImage(item.value)}
            <Text>{item.value}</Text>
          </View>
        </TouchableOpacity>
      ))}
}
  return (
    <IconContainer>
      <IconRow>
        <SimpleGrid
        itemContainerStyle={{alignItems: 'center'}}
          itemDimension={130}
          data={['Newbie', 'knowledge', 'proficient', 'expert' ]}
          renderItem={({ item })=> (
            <TouchableOpacity onPress={() => selectHandler(item)}>
          <View style={{marginTop: 20, alignItems: 'center'}}>
            {renderImage(item)}
            <Text style={{marginTop: 10, fontSize: 18}}>{item}</Text>
          </View>
        </TouchableOpacity>
          )}
        />
      </IconRow>
    </IconContainer>
  );
}

const Icon = styled.Image`
  width: 90;
  height: 90;
`;
const IconContainer = styled.View`
  width: 100%;
  flexDirection: column;
`;
const IconRow = styled.View`
  flexDirection: row;
  justifyContent: space-evenly;
`;
//item.value === userOption ? styles.selected : styles.unselected
const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  unselected: {
    borderRadius: 10,
    width: '90%',
    padding: 0,
    borderColor: '#649e3e',
    alignSelf: 'center',
  },
  selected: {
    backgroundColor: '#649e3e',
    borderRadius: 10,
    width: '90%',
    padding: 0,
    alignSelf: 'center',
  },
  textSelected: {
    color: '#fff',
  },
  textUnselected: {
    color: '#649e3e',
  },
  radiocircle: {},
});
