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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Info:</Text>
        <Text style={styles.sectionContent}>Email: test_github@gmail.com</Text>
        <Text style={styles.sectionContent}>Phone: +123 456 7890</Text>
      </View>
    
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interests:</Text>
        <Text style={styles.sectionContent}>Sleeping, Playing game</Text>
      </View>
    
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Skills:</Text>
        <Text style={styles.sectionContent}>- Web Development</Text>
        <Text style={styles.sectionContent}>- Mobile App Development</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: '#666',
  },
});
