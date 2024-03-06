import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-native-paper'
import {StyleSheet} from 'react-native'
const NFOCard = ({title, type, min_amount}) => {
  return (
    <Container>
      <TitleView>
        <Title>{title}</Title>
      </TitleView>
      <OptionView>
        <FirstOption>
          <Box>
            <Name>{type}</Name>
            <Meta>Type</Meta>
          </Box>
          <Box>
            <Name>{min_amount}</Name>
            <Meta>Min Amount</Meta>
          </Box>
        </FirstOption>
        <Button
          mode="outlined"
          style={{
            borderRadius: 5,
            borderColor: '#2d9be6',
            shadowColor: '#171717',
            padding: 6,
            paddingLeft: 20,
            paddingRight: 20,
            shadowOffset: {width: -2, height: 3},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
          labelStyle={[
            styles.btn,
            {
              fontSize: 16,
              color: '#2d9be6',
              marginHorizontal: 0,
              marginVertical: 0,
            },
          ]}
          onPress={() => console.log('Pressed')}>
          Buy
        </Button>
      </OptionView>
    </Container>
  );
}

const styles = StyleSheet.create({
    btn: {
        padding: '20px 10px'
    }
})

const Container = styled.View`
    flex:1;
    marginBottom: 20px;
`
const TitleView = styled.View`
    backgroundColor: #627593;
    padding: 20px 10px;
    borderTopLeftRadius: 10px;
    borderTopRightRadius: 10px;
`
const Title = styled.Text`
    color: #fff;
    fontSize: 18px;
`
const FirstOption = styled.View`
    width: 50%;
    flexDirection: row;
    justifyContent: space-between;
`
const OptionView = styled.View`
    backgroundColor: #fff;
    borderBottomLeftRadius: 10px;
    borderBottomRightRadius: 10px;
    padding: 20px 10px;
    flexDirection: row;
    justifyContent: space-between;
`
const Box = styled.View`
    flexDirection: column;
`

const Name = styled.Text`
    fontSize: 16px;
    fontWeight: 500;
`
const Meta = styled.Text`
    color: #98a2a9;
    fontSize: 16px;
    marginTop: 5px;
`

export default NFOCard