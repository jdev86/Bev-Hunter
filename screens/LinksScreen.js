import React from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View, TouchableOpacity, Alert  } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    tableHead: ['Name', 'Type', 'Store', 'Price', 'Navigate'],
    tableData: [
        ['Bud Light', 'Beer', 'Specs', '9.99', 'googlemaps/route'],
        ['Budweiser', 'Beer', 'Total Wine', '10.99', 'googlemaps/route'],
        ['Sam Adams', 'Beer', '7-Eleven', '12.99', 'googlemaps/route'],
        ['Modelo', 'Beer', 'QT', '9.99', 'googlemaps/route'],
        ['Red Bull', 'Energy', 'QT', '2.99', 'googlemaps/route']
      ]
    }
  }
  static navigationOptions = {
    title: 'Finder',
  };

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingRight: 5, paddingLeft: 5}}
    onChangeText={(text) => this.setState({text})}
    value={this.state.text}
  />

  <Table style={styles.table} borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
  table: {
    paddingTop: 15,
    paddingBottom: 15
  },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});
