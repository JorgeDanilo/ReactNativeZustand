import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/setting/SettingsScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ HomeScreen } />
      <Tab.Screen name="Profile" component={ ProfileScreen } />
      <Tab.Screen name="Setting" component={ SettingsScreen } />
    </Tab.Navigator>
  );
};