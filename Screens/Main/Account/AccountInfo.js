import React from 'react'
import styled from 'styled-components'
import UserIcon from '../../../assets/images/user-icon.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Divider } from 'react-native-paper'
const AccountInfo = () => {
  return (
    <Container>
        <AccounntCard>
            <Background></Background>
            <ImageContainer>
            <Image source={UserIcon} style={styles.icon}/>
            </ImageContainer>
            <Name>
                <Title>Mr. SHRENIK ALPESH SHAH</Title>
            </Name>
            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 8}}>
                <Text style={{fontSize: 18, color: '#03ab4a'}}>Account # 490237</Text>
                <Text style={{fontSize: 18}}>  |  Individual</Text>
            </View>
            <Divider style={{marginTop: 10}}/>
            <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                <Box>
                    <Info>MQXPS3023E</Info>
                    <Meta>Pan</Meta>
                </Box>
                <Box>
                    <Info>MAYURI SHAH</Info>
                    <Meta>Nominee Details</Meta>
                </Box>
            </View>
        </AccounntCard> 
        <Box2 style={{marginTop: 16}}>
                <Text style={{fontSize: 18, color: 'green', fontWeight: 400}}>shahshrenik6@gmail.com</Text>
                <Label>Email</Label>
            </Box2>
            <Divider/>
            <Box2>
                <Text style={{fontSize: 18, fontWeight: 500}}>91-9727664198</Text>
                <Label>Phone Number</Label>
        </Box2>
        <CardContainer>
            <Card>
                <View>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: 500}}>
                    Membership Info
                </Text>
                <Divider style={{height:2, backgroundColor: '#fff', width: 50, marginTop: 2}} width='4'/>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection:'column'}}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: 500}}>
                    Free
                </Text>
                <Text style={{color: '#fff', fontSize: 14}}>
                    Subscription Package
                </Text>
                </View>
                <View style={{flexDirection:'column'}}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: 500}}>
                    19 Mar 2023
                </Text>
                <Text style={{color: '#fff', fontSize: 14}}>
                    Expiration Date
                </Text>
                </View>
            </View>
            </Card>
        </CardContainer>
        <CardContainer style={{height: 300, marginTop: 20}}>

        </CardContainer>
    </Container>
  ) 
}


const Container = styled.View`
    flex: 1;
    flexDirection: column;
    backgroundColor: #efefef;
`
const AccounntCard = styled.View`
    flexDirection: column;
    height: 300px;
    backgroundColor: #fff
`
const Background = styled.View`
    backgroundColor: #3dc0b0;
    height: 100px;
`
const Name = styled.View`
    flexDirection: column;
    marginTop: 10px;
`
const ImageContainer = styled.View`
    borderRadius: 100px;
    backgroundColor: #fff;
    position: absolute;
    alignSelf: center;
    marginTop: 60px;
    padding: 10px
`
const Title = styled.Text`
    fontSize: 22px;
    fontWeight: 400;
    textAlign: center;
    marginTop: 50px;
`
const Box = styled.View`
    flexDirection: column;
    alignItems: center;
    width: 50%;
    justifyContent: center;
    height: 70px
`
const Info = styled.Text`
    fontSize: 18px;
    fontWeight: 300;
    fontWeight: 500
`
const Meta = styled.Text`
    fontSize: 16px;
    marginTop: 6px;
    color: #949191
`
const Box2 = styled.View`
    padding: 10px 20px;
    backgroundColor: #fff;
`
const Label = styled.Text`
    fontSize: 17px;
    marginTop: 6px;
`

const CardContainer = styled.View`
    padding: 10px;
    width: 100%;
    backgroundColor: #fff;
    marginTop: 10px;
`
const Card = styled.View`
    flexDirection: column;
    backgroundColor: #49bac3;
    width: 100%;
    padding: 10px 10px;
    height: 130px;
    justifyContent: space-between;
`

const styles = StyleSheet.create({
    icon: {
        height: 80,
        width: 80,
    }
})

export default AccountInfo