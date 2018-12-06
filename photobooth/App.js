import { createStackNavigator } from 'react-navigation';
import CamScreen from './Views/CamScreen';
import StartSettingScreen from './Views/StartSettingScreen';
import SettingsScreen from './Views/SettingsScreen';
import EndScreen from './Views/EndScreen';

export default createStackNavigator(
  {
    Start: StartSettingScreen,
    Settings: SettingsScreen,
    Camera: CamScreen,
    End: EndScreen,
  },
);
