import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const StudentsList = ({ data }) => {
  const tableHead = ['ID', 'NAME', 'COURSE'];
  const tableData = data.map((item) => [item.ID.toString(), item.name, item.course]);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#000' }}>
        <Row data={tableHead} style={styles.header} textStyle={styles.headerText} />
        {tableData.map((rowData, index) => (
          <Row key={index} data={rowData} style={styles.row} textStyle={styles.text} />
        ))}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#ffcccc', // Light pink background
  },
  header: {
    height: 40,
    backgroundColor: '#ff6666', // Dark pink background
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ff4d4d', // Slightly darker pink border
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2d3436', // Dark gray text color
  },
  row: {
    height: 40,
    backgroundColor: '#ffe6e6', // Lighter pink background
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffcccc', // Light pink border
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#57606f', // Slate gray text color
  },
});



export default StudentsList;
