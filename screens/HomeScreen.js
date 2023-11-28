import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
      <Button
        title="Go to Gallery"
        onPress={() => navigation.navigate('Gallery')}
      />
    </View>
  );
};

export default HomeScreen;
