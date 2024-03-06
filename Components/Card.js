import React from 'react';
import styled from 'styled-components';
//import Icon from '../Components/Icon'
import {StyleSheet, Image} from 'react-native';
import Icons from './Icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Card = ({ title, meta, style, name, titleStyle, metaStyle, screen}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=> navigation.navigate(screen)}>
    <CardContainer style={[style, styles.shadowProp]}>
      <IconImage source={Icons[name]}/>
    {/* <Image source={certificate} /> */}
    <CardTitle style={titleStyle}>{title}</CardTitle>
    <CardMeta style={metaStyle}>{meta}</CardMeta>
    </CardContainer>
    </TouchableOpacity>
  );
}

//<WebView source={{ uri: 'https://invest9.in/' }} style={{ flex: 1, marginTop: 40 }} />



const CardContainer = styled.View`
    marginTop: 20px;
    height: 80%;
    width: 300px;
    border-radius: 12px;
    padding: 10px;
    margin-right: 20px;
    paddingHorizontal: 2px;
    paddingVertical: 2px;
`
const IconImage = styled.Image`
    height: 40px;
    width: 40px;
`
const CardTitle = styled.Text`
    color: #fff;
    fontWeight: 600;
    fontSize: 18px;
    marginTop: 30px;
`
const CardMeta = styled.Text`
    marginTop: 5px;
    color: #fff;
`
const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})

export default Card;
