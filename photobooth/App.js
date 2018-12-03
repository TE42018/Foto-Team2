import { createStackNavigator } from 'react-navigation';
import CamScreen from './CamScreen';
import StartSettingScreen from './feature-start-setting/StartSettingScreen';
import SettingsScreen from './SettingsScreen';
import EndScreen from './EndScreen';

export default createStackNavigator(
  {
    Start: neger,
    Camera: CamScreen,
    Settings: SettingsScreen,
    End: EndScreen,
  },
);
