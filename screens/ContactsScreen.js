import React from 'react';
import { View, Text } from 'react-native';
import ContactList from '../components/ContactList';

const ContactsScreen = () => {
  return (
    <View>
      <Text>Contacts Screen</Text>
      <ContactList />
    </View>
  );
};

export default ContactsScreen;
