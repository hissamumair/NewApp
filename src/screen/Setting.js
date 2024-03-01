import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const Setting = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [profileEnabled, setProfileEnabled] = useState(true);
  const [homeEnabled, setHomeEnabled] = useState(true);
  const [accountEnabled, setAccountEnabled] = useState(true);
  const [languageEnabled, setLanguageEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [displayEnabled, setDisplayEnabled] = useState(true);
  const [storageEnabled, setStorageEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const toggleProfile = () => {
    setProfileEnabled(!profileEnabled);
  };

  const toggleHome = () => {
    setHomeEnabled(!homeEnabled);
  };

  const toggleAccount = () => {
    setAccountEnabled(!accountEnabled);
  };

  const toggleLanguage = () => {
    setLanguageEnabled(!languageEnabled);
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const toggleDisplay = () => {
    setDisplayEnabled(!displayEnabled);
  };

  const toggleStorage = () => {
    setStorageEnabled(!storageEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Notification Setting */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: '#ccc', true: '#007bff' }}
          thumbColor='#f4f4f4'
        />
      </View>

      {/* Dark Mode Setting */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#ccc', true: '#007bff' }}
          thumbColor='#f4f4f4'
        />
      </View>

      {/* Profile Setting */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Profile</Text>
        <Switch
          value={profileEnabled}
          onValueChange={toggleProfile}
          trackColor={{ false: '#ccc', true: '#007bff' }}
          thumbColor='#f4f4f4'
        />
      </View>

      {/* Home Setting */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Home</Text>
        <Switch
          value={homeEnabled}
          onValueChange={toggleHome}
          trackColor={{ false: '#ccc', true: '#007bff' }}
          thumbColor='#f4f4f4'
        />
      </View>

      {/* Account Setting */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Account</Text>
        <Switch
          value={accountEnabled}
          onValueChange={toggleAccount}
          trackColor={{ false: '#ccc', true: '#007bff' }}
          thumbColor='#f4f4f4'
        />
      </View>

      {/* Language Setting */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Language</Text>
        <Switch
          value={languageEnabled}
          onValueChange={toggleLanguage}
          trackColor={{ false: '#ccc', true: '#007bff' }}
          thumbColor='#f4f4f4'
        />
      </View>

      {/* Sound Setting */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Sound</Text>
        <Switch
          value={soundEnabled}
          onValueChange={toggleSound}
          trackColor={{ false: '#ccc', true: '#007bff' }}
          thumbColor='#f4f4f4'
        />
      </View>

      {/* Display Setting */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Display</Text>
        <Switch
          value={displayEnabled}
          onValueChange={toggleDisplay}
          trackColor={{ false: '#ccc', true: '#007bff' }}
          thumbColor='#f4f4f4'
        />
      </View>

      {/* Storage Setting */}
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Storage</Text>
        <Switch
          value={storageEnabled}
          onValueChange={toggleStorage}
          trackColor={{ false: '#ccc', true: '#007bff' }}
          thumbColor='#f4f4f4'
        />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: '#f00',
    padding: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
