import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require('../assets/Menu.png')} style={styles.HamIcon} />
      </TouchableOpacity>
      <Image source={require('../assets/Logo.png')} style={styles.mainIcon} />
      <TouchableOpacity>
      <Image source={require('../assets/Search.png')} style={styles.icons} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30,
    marginTop: 10,
  },
  icons: {
    marginRight: -40,
  },

  mainIcon:{
    width: 150,
    height: 50,
    marginLeft: 20,
    alignItems:"center",
    resizeMode: "contain",

  },
  HamIcon:{
  width: 30,
  height: 30,
  marginLeft: 10,
  
  },


});

export default Header;