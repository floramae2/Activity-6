import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import AccountsTable from './components/AccountsTable';
import UsersTable from './components/UsersTable';
import StudentsList from './components/StudentsList';

const App = () => {
  
  const accountsData = [
    { ID: 1, username: 'user1', password: 'pass1', usertype: 'teacher' },
    { ID: 2, username: 'user2', password: 'pass2', usertype: 'student' },
    { ID: 3, username: 'user3', password: 'pass3', usertype: 'student' },
    { ID: 4, username: 'user4', password: 'pass4', usertype: 'teacher' },
    { ID: 5, username: 'user5', password: 'pass5', usertype: 'student' },
    { ID: 6, username: 'user6', password: 'pass6', usertype: 'teacher' },
    { ID: 7, username: 'user7', password: 'pass7', usertype: 'student' },
    { ID: 8, username: 'user8', password: 'pass8', usertype: 'student' },
    { ID: 9, username: 'user9', password: 'pass9', usertype: 'student' },
    { ID: 10, username: 'user10', password: 'pass10', usertype: 'teacher' },
    
  ];

  const usersData = [
    { ID: 1, firstname: 'John', lastname: 'Taylor', course: 'Computer Science', year: '1st Year', section: 'A' },
    { ID: 2, firstname: 'Jane', lastname: 'Bond', course: 'Mathematics', year: '2nd Year', section: 'B' },
    { ID: 3, firstname: 'Jonathan', lastname: 'Williams', course: 'Computer Science', year: '2nd year', section: 'A' },
    { ID: 4, firstname: 'Isabella', lastname: 'Requillo', course: 'Psychology', year: '3rd Year', section: 'B' },
    { ID: 5, firstname: 'Gabriel', lastname: 'Smith', course: 'Electrical Engineering', year: '4th Year', section: 'C' },
    { ID: 6, firstname: 'Seraphine', lastname: 'Davis', course: 'Biology', year: '2nd Year', section: 'A' },
    { ID: 7, firstname: 'Michael', lastname: 'Brown', course: 'Linguistic', year: '2nd Year', section: 'C' },
    { ID: 8, firstname: 'Monaliza', lastname: 'Swift', course: 'Civil Engineering', year: '2nd Year', section: 'A' },
    { ID: 9, firstname: 'Raphael', lastname: 'Lee', course: 'Mathematics', year: '2nd Year', section: 'B' },
    { ID: 10, firstname: 'Dareen', lastname: 'Chen', course: 'Chemistry', year: '3rd Year', section: 'A' },
    
  ];

  const studentsData = [
    { ID: 1, name: 'John Taylor', course: 'Computer Science' },
    { ID: 2, name: 'Jane Bond', course: 'Mathematics' },
    { ID: 3, name: 'Jonathan Williams', course: 'Computer Science' },
    { ID: 4, name: 'Isabella Requillo', course: 'Psychology' },
    { ID: 5, name: 'Gabriel Smith', course: 'Electrical Engineering' },
    { ID: 6, name: 'Seraphine Davis', course: 'Biology' },
    { ID: 7, name: 'Michael Brown', course: 'Linguistic' },
    { ID: 8, name: 'Monaliza Swift', course: 'Civil Engineering' },
    { ID: 9, name: 'Raphael Lee', course: 'Mathematics' },
    { ID: 10, name: 'Dareen Chen', course: 'Chemistry' },
    
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>LIST OF USERS</Text>
        <UsersTable data={usersData} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>LIST OF ACCOUNTS</Text>
        <AccountsTable data={accountsData} />
      </View>

      <View style={styles.section}>
      <Text style={styles.sectionHeader}>LIST OF STUDENTS</Text>
      <StudentsList data={studentsData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa', // Light background
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#ffffff', // White background
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    fontSize: 18,
    backgroundColor: '#A9A9A9', // Blue background
    color: '#ffffff', // White text color
    fontWeight: 'bold',
    padding: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
export default App;
