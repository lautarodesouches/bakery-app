import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation';
import { Provider } from 'react-redux'
import store from './src/store';

export default function App() {

  const [loaded] = useFonts({
    AnekRegular: require('./assets/fonts/AnekMalayalam-Regular.ttf'),
    AnekBold: require('./assets/fonts/AnekMalayalam-Bold.ttf'),
    AnekThin: require('./assets/fonts/AnekMalayalam-Thin.ttf'),
  });
  
  if (!loaded) return null;

  return(
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}