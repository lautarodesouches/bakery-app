import { useFonts } from 'expo-font';
import { Categories, ProductDetail, Products } from './src/screens';

export default function App() {

  const [loaded] = useFonts({
    AnekRegular: require('./assets/fonts/AnekMalayalam-Regular.ttf'),
    AnekBold: require('./assets/fonts/AnekMalayalam-Bold.ttf'),
    AnekThin: require('./assets/fonts/AnekMalayalam-Thin.ttf'),
  });
  
  if (!loaded) return null;

  return (
    <>
      <Categories />
      <ProductDetail />
      <Products />
    </>
  );
}