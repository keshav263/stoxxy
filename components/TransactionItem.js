import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TransactionItem({item}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.date}>{new Date(item.date).toDateString()}</Text>
      </View>
      <View>
        <Text style={styles.price}>Rs. {item.price}</Text>
        <Text style={styles.qty}>Qty. {item.quantity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#123049',
    padding: 18,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#000',
  },
  date: {
    fontSize: 12,
  },
  price: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  qty: {
    fontSize: 12,
  },
});
