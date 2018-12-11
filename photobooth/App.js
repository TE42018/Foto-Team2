import { createStackNavigator } from 'react-navigation';
import CamScreen from './Views/CamScreen';
import StartSettingScreen from './Views/StartSettingScreen';
import SettingsScreen from './Views/SettingsScreen';
import EndScreen from './Views/EndScreen';

export default createStackNavigator({
  Start: { screen: StartSettingScreen},
  Camera: { screen: CamScreen},
  Settings: { screen: SettingsScreen},
  End: { screen: EndScreen }
});
