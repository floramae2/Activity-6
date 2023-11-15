import React from 'react';
import { View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const UsersTable = ({ data }) => {
  const tableHead = ['ID', 'FIRSTNAME', 'LASTNAME', 'COURSE', 'YEAR', 'SECTION'];
  const tableData = data.map((user) => [user.ID, user.firstname, user.lastname, user.course, user.year, user.section]);

  return (
    <View>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#ffb6c1' }}>
  <Row data={tableHead} style={{ height: 40, backgroundColor: '#ffcccc', borderBottomWidth: 1, borderBottomColor: '#ff6666' }} textStyle={{ margin: 6, color: '#2d3436', fontWeight: 'bold' }} />
  <Rows data={tableData} textStyle={{ margin: 6, color: '#57606f' }} />
</Table>

    </View>
  );
};

export default UsersTable;
