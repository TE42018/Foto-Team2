import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

export default createStackNavigator(
  {
    Cam: CamScreen,
    Settings: SettingsScreen,
  },
);
