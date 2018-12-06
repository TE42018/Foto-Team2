import { DrawerNavigator, DrawerItems, screenMapping } from 'react-navigation';
import CamScreen from './CamScreen';
import StartSettingScreen from './Views/StartSettingScreen';
import SettingsScreen from './SettingsScreen';
import EndScreen from './EndScreen';

export default createStackNavigator(
  {
    Camera: CamScreen,
    Start: StartSettingScreen,
    
    Settings: SettingsScreen,
    End: EndScreen,
  },
);


const App = DrawerNavigator({
  Settings: { screen: StartSettingScreen}
 
});

export default App;