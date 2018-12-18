import { createStackNavigator } from 'react-navigation';
import CamScreen from './Views/CamScreen';
import StartSettingScreen from './Views/StartSettingScreen';
import SettingsScreen from './Views/SettingsScreen';
import EndScreen from './Views/EndScreen';
import DesignSettingScreen from './Views/DesignSettingScreen';

export default createStackNavigator(
  {
    Design: DesignSettingScreen,
    Start: StartSettingScreen,
    Camera: CamScreen,
    Settings: SettingsScreen,
    End: EndScreen,
  },
);
