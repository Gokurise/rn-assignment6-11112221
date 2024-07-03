import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getData, storeData } from '../Storage/storage';

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const storedCart = await getData('cart');
      if (storedCart) {
        setCart(storedCart);
      }
    };
    fetchCart();
  }, []);

  const handleRemoveFromCart = async (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    await storeData('cart', newCart);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <Image source={require('../assets/Search.png')} style={styles.searchIcon} />
      </View>
      <Text style={styles.title}>CHECKOUT</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
              <Image source={require('../assets/remove.png')} style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};



export default CartScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 45,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    logo: {
      width: 150,
      height: 50,
      resizeMode: 'contain',
      marginLeft: 100,
    },
    searchIcon: {
      width: 24,
      height: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: '',
      fontFamily: 'crake test',
      textAlign: 'center',
      marginVertical: 20,
    },
    cartItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
    },
    itemImage: {
      width: 80,
      height: 120,
      marginRight: 10,
    },
    itemDetails: {
      flex: 1,
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    itemDescription: {
      fontSize: 14,
      color: '#666',
      marginBottom: 5,
    },
    itemPrice: {
      fontSize: 16,
      color: '#f60',
      fontWeight: 'bold',
    },
    removeIcon: {
      width: 24,
      height: 24,
    },
  });