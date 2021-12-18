/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import TransactionItem from '../components/TransactionItem';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons name="planet" size={24} color="#900" />
        <Text
          style={{
            width: '70%',
            paddingLeft: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Alex Julia
        </Text>
        <Feather name="search" size={24} color="#000" />
        <Feather name="bell" size={24} color="#000" />
      </View>
      <View style={styles.box}>
        <Text style={styles.subtitle}>Portfolio Value</Text>
        <Text style={styles.price}>$15,136.32</Text>
        <Text style={styles.investedPrice}>$14,567.21</Text>

        <View
          style={[styles.row, {justifyContent: 'flex-start', marginTop: 30}]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {marginLeft: 10}]}>
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.marketValueContainer}>
        <View style={[styles.market]}>
          <Text style={[styles.item, {color: '#B2B9C3'}]}>Nifty</Text>
          <Text style={[styles.value, {color: '#123049'}]}>16985.20</Text>
          <Text style={{color: 'red'}}>-1.53%</Text>
        </View>
        <View style={[styles.market, {backgroundColor: '#123049'}]}>
          <Text style={[styles.item, {color: '#B2B9C3'}]}>Sensex</Text>
          <Text style={[styles.value, {color: '#fff'}]}>57011.74</Text>
          <Text style={{color: 'red'}}>-1.54%</Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#000',
          marginTop: 20,
        }}>
        List of transactions
      </Text>
      <FlatList
        Li
        data={transactionItems}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          return <TransactionItem item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    backgroundColor: '#123049',
    height: '30%',
    borderRadius: 24,
    width: '100%',
    marginVertical: 20,
    padding: 20,
  },
  subtitle: {
    color: '#6A849C',
  },
  price: {
    color: '#fff',
    fontSize: 42,
    marginTop: 12,
  },
  investedPrice: {
    color: '#6A849C',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#60C99B',
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  marketValueContainer: {
    flexDirection: 'row',
  },
  market: {
    width: '50%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#B2B9C3',
    borderRadius: 10,
    marginRight: 10,
    padding: 18,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
  },
  value: {
    fontSize: 22,
  },
});

export default HomeScreen;

const transactionItems = [
  {
    name: 'Adani Power',
    quantity: 130,
    price: 99,
    date: '12/12/2019',
    type: 'Buy',
  },
  {
    name: 'Adani Power',
    quantity: 130,
    price: 99,
    date: '12/12/2019',
    type: 'Buy',
  },
  {
    name: 'Adani Power',
    quantity: 130,
    price: 99,
    date: '12/12/2019',
    type: 'Buy',
  },
  {
    name: 'Adani Power',
    quantity: 130,
    price: 99,
    date: '12/12/2019',
    type: 'Buy',
  },
  {
    name: 'Adani Power',
    quantity: 130,
    price: 99,
    date: '12/12/2019',
    type: 'Buy',
  },
  {
    name: 'Adani Power',
    quantity: 130,
    price: 99,
    date: '12/12/2019',
    type: 'Buy',
  },
];
