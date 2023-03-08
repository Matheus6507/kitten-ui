import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { SafeAreaView, StatusBar } from 'react-native';
import { BottomTabNavigation } from './src/screens/BottomNavigation';
import { default as theme } from './src/theme/index.json';

export default function App() {

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <StatusBar translucent barStyle={"dark-content"} backgroundColor={"transparent"} />
        <BottomTabNavigation />
      </SafeAreaView>
    </ApplicationProvider>
  );
}