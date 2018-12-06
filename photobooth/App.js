import { createStackNavigator } from 'react-navigation';
import CamScreen from './Views/CamScreen';
import StartSettingScreen from './Views/StartSettingScreen';
import SettingsScreen from './Views/SettingsScreen';
import EndScreen from './Views/EndScreen';
import SendOption from './SendOption'

export default createStackNavigator(
  {
    Start: SendOption,
    
    Settings: StartSettingScreen,
    Camera: CamScreen,
    
    
    Settings: SettingsScreen,
    End: EndScreen,
  },
);
