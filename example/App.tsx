import { StyleSheet, Text, View } from 'react-native';

import * as ExpoRelatedDigital from 'expo-related-digital';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
