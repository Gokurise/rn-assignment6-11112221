import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import ProductList from '../Components/ProductList';
import { storeData, getData } from '../Storage/storage';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    
    setProducts([
      { id: 1, name: 'Office Wear', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress1.png') },
      { id: 2, name: 'Black', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress2.png') },
      { id: 3, name: 'Church Wear', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress3.png') },
      { id: 4, name: 'Lamerei', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress4.png') },
      { id: 5, name: '21WN', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress5.png') },
      { id: 6, name: 'Lopo', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress6.png') },
      { id: 7, name: '21WN', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress7.png') },
      { id: 8, name: 'lame', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress3.png') },
      
      
    ]);
  }, []);

  const handleAddToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await storeData('cart', newCart);
  };

  return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <Header />
            <View style={styles.icons}>
                <Text style={styles.title}>OUR STORY</Text>
                <TouchableOpacity>
                <Image source={require('../assets/Listview.png')} style={styles.icon1} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require('../assets/Filter.png')} style={styles.icon2} />
                </TouchableOpacity>
            </View>
            <ProductList products={products} onAddToCart={handleAddToCart} />
        </ScrollView>
    
  );
};


export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop:20,
      
    },
    scrollContent: {
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      fontFamily: "crake test",
      fontWeight: '',
      margin: 10,
    },
    icons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginTop: -20,
    },
    icon1: {
      marginLeft: 100,
      padding: 10,
      height: 30,
      width: 30,
    },
  
    icon2:{
      padding: 10,
      height: 30,
      width: 30,
  
    },
  });
  