import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './Screens/Landing';
import SignUp from './Screens/Auth/SingUp';
import SignIn from './Screens/Auth/SignIn';
import EmailVerify from './Screens/Auth/EmailVerify';
import PhoneVerify from './Screens/Auth/PhoneVerify';
import ForgotPassword from './Screens/Auth/ForgotPassword';
import Navigation from './Screens/Main/Home';
import BottomSheetModal from './Screens/Auth/BottomSheetModal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import EnterOTP from './Screens/Auth/EnterOTP';
import Home from './Screens/Main/Home';
import HistoryDetails from './Screens/Main/Transact/HistoryDetails';
import OrderHistory from './Screens/Main/Transact/OrderHistory';
import BottomTab from './Components/BottomTab';
import Equity from './Screens/Main/Explore/Equity';
import SipScheme from './Screens/Main/Transact/SipScheme';
import NFOScreen from './Screens/Main/Transact/NFO';
import Bonds from './Screens/Main/Explore/Bonds';
import NPSComponent from './Screens/Main/Explore/NPSComponent';
import ReportDetail from './Screens/Main/Portfolio/ReportDetail';
import Reports from './Screens/Main/Portfolio/Reports';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import bondconvo from './assets/images/bondconvo.png';
import Account from './Screens/Main/Account/Account';
import AccountInfo from './Screens/Main/Account/AccountInfo';
import Mandate from './Screens/Main/Account/Mandate';
import ContactUs from './Screens/Main/Account/ContactUs';
import Cart from './Screens/Main/Cart/Cart';
import Filter from './Components/Filter';
import BondsFaq from './Components/BondsFaq';
import AddCart from './Screens/Main/Cart/AddCart';
import MandateForm from './Screens/Main/Cart/MandateForm';
import MandateFormDetail from './Screens/Main/Cart/MandateFormDetail';
import BuyMore from './Screens/Main/Transact/BuyMore';
import Results from './Screens/Main/Transact/Results';
import ResultDetail from './Screens/Main/Transact/ResultDetail';
import BuyNow from './Screens/Main/Cart/BuyNow';
import Blog from './Components/Blog';
import Terms from './Screens/Main/Account/Terms';
import Debt from './Screens/Main/Explore/Debt';
import Hybrid from './Screens/Main/Explore/Hybrid';
import HighRisk from './Screens/Main/Explore/HighRisk';
import RiskHome from './Screens/Main/Account/Risk-Assesment/RiskHome';
import AnnualIncome from './Screens/Main/Account/Risk-Assesment/AnnualIncome';
import Investment from './Screens/Main/Account/Risk-Assesment/Investment';
import Learning from './Screens/Main/Account/Risk-Assesment/Learning';
import Approach from './Screens/Main/Account/Risk-Assesment/Approach';
import RiskResult from './Screens/Main/Account/Risk-Assesment/RiskResult';
import RStatus from './Screens/Auth/RStatus';
import DOB from './Screens/Auth/DOB';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import BankAccount from './Screens/Auth/BankAccount';
import AccountType from './Screens/Auth/AccountType';
import IncomeSource from './Screens/Auth/IncomeSource';
import BirthPlace from './Screens/Auth/BirthPlace';
import BirthCountry from './Screens/Auth/BirthCountry';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EmailVerify"
            component={EmailVerify}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RStatus"
            component={RStatus}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DOB"
            component={DOB}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BankAccount"
            component={BankAccount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AccountType"
            component={AccountType}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="IncomeSource"
            component={IncomeSource}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BirthPlace"
            component={BirthPlace}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BirthCountry"
            component={BirthCountry}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PhoneVerify"
            component={PhoneVerify}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: true,headerTitle: '', headerBackTitle: 'Back', headerTintColor: '#068015'}}
          />
          <Stack.Screen
            name="modal"
            component={BottomSheetModal}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="enterOtp"
            component={EnterOTP}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="orderhistory"
            component={OrderHistory}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="historydetail"
            component={HistoryDetails}
            options={{headerShown: true,headerTitle: '', headerBackTitle: 'Transact'}}
          />
          <Stack.Screen
            name="blog"
            component={Blog}
            options={{headerShown: true,headerTitle: 'Blog', headerBackTitle: 'Back'}}
          />
          <Stack.Screen
            name="bottomtab"
            component={BottomTab}
            options={{headerShown: true, }}
          />
          <Stack.Screen
            name="Equity"
            component={Equity}
            options={{headerShown: true, headerBackTitle: 'Explore'}}
          />
          <Stack.Screen
            name="Debt"
            component={Debt}
            options={{headerShown: true, headerBackTitle: 'Explore'}}
          />
          <Stack.Screen
            name="Hybrid"
            component={Hybrid}
            options={{headerShown: true, headerBackTitle: 'Explore'}}
          />
          <Stack.Screen
            name="highrisk"
            component={HighRisk}
            options={{headerShown: true, headerBackTitle: 'Explore'}}
          />
          <Stack.Screen
            name="SIP"
            component={SipScheme}
            options={{headerShown: true, headerBackTitle: 'Transact'}}
          />
          <Stack.Screen
            name="NFO"
            component={NFOScreen}
            options={{headerShown: true, headerBackTitle: 'Transact'}}
          />
          <Stack.Screen
            name="buymore"
            component={BuyMore}
            options={{headerShown: true, headerBackTitle: 'Transact', headerTitle:''}}
          />
          <Stack.Screen
            name="results"
            component={Results}
            options={{headerShown: true, headerBackTitle: 'Back', headerTitle:'Results'}}
          />
          <Stack.Screen
            name="buy_now"
            component={BuyNow}
            options={{headerShown: true, headerBackTitle: 'Back', headerTitle:'',
            headerTintColor: '#068015',
          }}
          />
          <Stack.Screen
            name="terms"
            component={Terms}
            options={{headerShown: true, headerBackTitle: 'Back', headerTitle:'Terms & Policies',
            headerTintColor: '#068015',
          }}
          />
          <Stack.Screen
            name="result_detail"
            component={ResultDetail}
            options={({navigation}) => ({
              
            headerShown: true, 
            headerBackTitle: 'Result', 
            headerTitle:'', 
            headerBackTitleStyle:{
              color: '#068015'
            },
            headerTintColor: '#068015',
            headerRight: () => (
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  onPress={() => navigation.navigate('buy_now')}>
                  <Text style={{fontSize: 16, color: '#068015', fontWeight: 'bold'}}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
            ),
          })}
          />
          <Stack.Screen
            name="report"
            component={Reports}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="filter"
            component={Filter}
            options={{headerShown: false, headerBackTitleStyle:{}}}
          />
          <Stack.Screen
            name="BondsFaq"
            component={BondsFaq}
            options={{
              headerShown: true,
              headerBackTitle: 'Bonds',
              headerTitle: () => (
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>FAQ</Text>
              ),
            }}
          />

          <Stack.Screen
            name="reportdetail"
            component={ReportDetail}
            options={{
              headerShown: true,
              headerTitle: () => (
                <Text style={{fontSize: 18, fontWeight: 500}}>Scheme</Text>
              ),
            }}
          />
          <Stack.Screen
            name="Explore"
            component={Navigation}
            options={({navigation}) => ({
              headerBackVisible:false,
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: '',
              headerShadowVisible: false,
              headerRight: () => (
                <View style={{marginBottom: 10}}>
                  <TouchableOpacity
                    style={{marginLeft: 10}}
                    onPress={() => navigation.navigate('Cart')}>
                    <Icon
                      name="shopping-cart"
                      color="green"
                      style={{alignSelf: 'flex-end'}}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="Bonds"
            component={Bonds}
            options={({navigation}) => ({
              headerShown: true,
              headerBackTitle: 'Explore',
              headerTitle: () => (
                <Text style={{fontSize: 24, fontWeight: 500}}>Bonds</Text>
              ),
              headerRight: () => (
                <View style={{marginBottom: 10}}>
                  <TouchableOpacity
                    style={{marginLeft: 10}}
                    onPress={() => navigation.navigate('BondsFaq')}>
                    <Image source={bondconvo} style={{height: 34, width: 34}} />
                  </TouchableOpacity>
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="NPSScreen"
            component={NPSComponent}
            options={({navigation}) => ({
              headerShown: true,
              headerBackTitle: 'Explore',
              headerTitle: () => (
                <Text style={{fontSize: 18, fontWeight: 500}}>
                  National Pension Scheme
                </Text>
              ),
              headerRight: () => (
                <View style={{marginBottom: 10}}>
                  <TouchableOpacity style={{marginLeft: 10}}>
                    <Image source={bondconvo} style={{height: 34, width: 34}} />
                  </TouchableOpacity>
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="account"
            component={Account}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AccountInfo"
            component={AccountInfo}
            options={{
              headerShown: true,
              headerBackTitle: 'Account',
              headerTintColor: '#068015',
              headerTitle: () => (
                <Text style={{fontSize: 18, fontWeight: 500}}>
                  Account Information
                </Text>
              ),
            }}
          />
          <Stack.Screen
            name="Mandate"
            component={Mandate}
            options={{
              headerShown: true,
              headerBackTitle: 'Account',
              headerTitle: () => (
                <Text style={{fontSize: 18, fontWeight: 500}}>Mandate</Text>
              ),
            }}
          />
          <Stack.Screen
            name="mandate_form"
            component={MandateForm}
            options={{
              headerBackTitle: 'Back',
              headerShown: true,
              headerTitle: () => (
                <Text style={{fontSize: 18, fontWeight: 500}}>Bank Mandate Form</Text>
              ),
            }}
          />
          <Stack.Screen
            name="mandate_detail_form"
            component={MandateFormDetail}
            options={{
              headerShown: true,
              headerBackTitle: 'Back',
              headerTitle: () => (
                <Text style={{fontSize: 18, fontWeight: 500}}>Bank Mandate Form</Text>
              ),
            }}
          />
          <Stack.Screen
            name="Contact"
            component={ContactUs}
            options={{
              headerShown: true, headerBackTitle: 'Account',
              headerTintColor: '#068015',
              headerTitle: () => (
                <Text style={{fontSize: 18, fontWeight: 500}}>Contact US</Text>
              ),
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: true,
              headerBackTitle: 'Portfolio',
              headerTitle: () => (
                <Text style={{fontSize: 18, fontWeight: 500}}>Cart</Text>
              ),
            }}
          />
          <Stack.Screen
            name="addcart"
            component={AddCart}
            options={{
              headerShown: true,
              headerTitle: () => (
                <Text style={{fontSize: 18, fontWeight: 500}}>Select Mandate</Text>
              ),
            }}
          />
          <Stack.Screen
            name="RiskHome"
            component={RiskHome}
            options={{headerShown: true,headerTitle: 'Risk Assessment', headerBackTitle: 'Account', headerTintColor: '#068015'}}
          />
          <Stack.Screen
            name="AnnualIncome"
            component={AnnualIncome}
            options={{headerShown: true,headerTitle: 'Risk Assessment', headerBackTitle: 'Account', headerTintColor: '#068015'}}
          />
          <Stack.Screen
            name="Investment"
            component={Investment}
            options={{headerShown: true,headerTitle: 'Risk Assessment', headerBackTitle: 'Account', headerTintColor: '#068015'}}
          />
          <Stack.Screen
            name="Learning"
            component={Learning}
            options={{headerShown: true,headerTitle: 'Risk Assessment', headerBackTitle: 'Account', headerTintColor: '#068015'}}
          />
          <Stack.Screen
            name="Approach"
            component={Approach}
            options={{headerShown: true,headerTitle: 'Risk Assessment', headerBackTitle: 'Account', headerTintColor: '#068015'}}
          />
          <Stack.Screen
            name="RiskResult"
            component={RiskResult}
            options={{headerShown: true,headerTitle: 'Risk Assessment', headerBackTitle: 'Account', headerTintColor: '#068015'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
