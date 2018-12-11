import { createStackNavigator } from 'react-navigation';
import CamScreen from './Views/CamScreen';
import StartSettingScreen from './Views/StartSettingScreen';
import SettingsScreen from './Views/SettingsScreen';
import EndScreen from './Views/EndScreen';

export default createStackNavigator(
  {
    Camera: CamScreen,
    End: EndScreen,
    Start: StartSettingScreen,
    Settings: SettingsScreen,
  },
);
