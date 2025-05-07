import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { setName, setEmail, setPhone, setAddress } from '@/store/reducer/profileSlice';
import { router } from 'expo-router';

export default function Profile() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
    
  const onSave = () => {
    router.push('/(tabs)/settings')
  }
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput
            value={profile.name}
            onChangeText={(value) => dispatch(setName(value))}
            style={styles.input}
            placeholder="Masukkan nama lengkap"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            value={profile.email}
            onChangeText={(value) => dispatch(setEmail(value))}
            style={styles.input}
            placeholder="Masukkan email"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Alamat</Text>
          <TextInput
            value={profile.address}
            onChangeText={(value) => dispatch(setAddress(value))}
            style={styles.input}
            placeholder="Masukkan alamat"
          />

          <Text style={styles.label}>Nomor HP</Text>
          <TextInput
            value={profile.phone}
            onChangeText={(value) => dispatch(setPhone(value))}
            style={styles.input}
            placeholder="Masukkan nomor HP"
            keyboardType="phone-pad"
          />

          <View style={styles.buttonContainer}>
            <Button title="Simpan" onPress={onSave} color="#4CAF50" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAF9',
  },
  form: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    height: 44,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 24,
  },
});
