import { createStackNavigator } from 'react-navigation';
import CamScreen from './CamScreen';
import SettingsScreen from './SettingsScreen';
import EndScreen from './EndScreen';

export default createStackNavigator(
  {
    Camera: CamScreen,
    Settings: SettingsScreen,
    End: EndScreen,
  },
);
