import { createStackNavigator } from 'react-navigation';
import CamScreen from './Views/CamScreen';
import StartSettingScreen from './Views/StartSettingScreen';
import SettingsScreen from './Views/SettingsScreen';
import EndScreen from './Views/EndScreen';
import DesignSettingScreen from './Views/DesignSettingScreen';

export default createStackNavigator(
  {
    Camera: CamScreen,
    Start: StartSettingScreen,
    Design: DesignSettingScreen,
    Settings: SettingsScreen,
    End: EndScreen,
  },
);
