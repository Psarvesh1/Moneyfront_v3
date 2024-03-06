import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Explore from '../Screens/Main/Explore/Explore';
import TransactPage from '../Screens/Main/Transact/Transact';
const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="explore" component={Explore}/>
            <Tab.Screen name="transact" component={TransactPage}/>
        </Tab.Navigator>
    )
}
export default BottomTab