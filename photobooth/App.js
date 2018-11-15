import { createStackNavigator } from 'react-navigation';
import CamScreen from './CamScreen';
import SettingsScreen from './SettingsScreen';

export default createStackNavigator(
  {
    Camera: CamScreen,
    Settings: SettingsScreen,
  },
);
