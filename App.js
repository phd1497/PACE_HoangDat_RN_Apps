import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>My Bio</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Full Name:</Text>
        <Text style={styles.sectionContent}>Hoang Dat Phan</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
});
