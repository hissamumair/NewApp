import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>

      
        <TouchableOpacity style={styles.link} onPress={() => console.log("Navigate to Expedition Planning")}>
          <Text style={styles.linkText}>Expedition Planning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => console.log("Navigate to Communication Hub")}>
          <Text style={styles.linkText}>Communication Hub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => console.log("Navigate to Safety Dashboard")}>
          <Text style={styles.linkText}>Safety Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => console.log("Navigate to Information Hub")}>
          <Text style={styles.linkText}>Information Hub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => console.log("Navigate to Integration with External Services")}>
          <Text style={styles.linkText}>Integration with External Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => console.log("Navigate to Sustainability Dashboard")}>
          <Text style={styles.linkText}>Sustainability Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => console.log("Navigate to Settings")}>
          <Text style={styles.linkText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={()=>
console.log("Navigation to profile")}>
            <Text style={styles.linkText}>Profile</Text>
        </TouchableOpacity>
      </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"black",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  placeholderText: {
    color: '#666',
  },
  link: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
});

export default Home;

