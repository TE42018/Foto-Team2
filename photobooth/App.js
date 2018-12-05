import { DrawerNavigator, DrawerItems, screenMapping } from 'react-navigation';

import StartSettingScreen from './feature-start-setting/StartSettingScreen';

const App = DrawerNavigator({
  Settings: { screen: StartSettingScreen}
 
});

export default App;