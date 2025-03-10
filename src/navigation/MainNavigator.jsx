import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddProdcutNavigator from './AddProductNavigator'
import ProfileNavigator from './ProfileNavigator'
import ProductsNavigator from './ProductsNavigator'

const Tab = createBottomTabNavigator()

function MainNavigator () {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Products' component={ProductsNavigator} options={{ headerShown: false }} />
      <Tab.Screen name='Camera' component={AddProdcutNavigator} options={{ headerShown: false }} />
      <Tab.Screen name='Profil' component={ProfileNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default MainNavigator
