import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const AccountsTable = ({ data }) => {
  const tableHead = ['ID', 'USERNAME', 'PASSWORD', 'USERTYPE'];
  const tableData = data.map((account) => [account.ID, account.username, account.password, account.usertype]);

  return (
    <ScrollView>
       <Table borderStyle={{ borderWidth: 2, borderColor: '#ffb6c1' }}>
  <Row data={tableHead} style={{ height: 40, backgroundColor: '#ffcccc', borderBottomWidth: 1, borderBottomColor: '#ff6666' }} textStyle={{ margin: 6, color: '#2d3436', fontWeight: 'bold' }} />
  <Rows data={tableData} textStyle={{ margin: 6, color: '#57606f' }} />
    </Table>
    </ScrollView>
  );
};

export default AccountsTable;
