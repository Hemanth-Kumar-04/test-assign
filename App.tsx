import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Qr from './images/Qr.jpg';
import Iconcard from './images/Share.png';
import Wallet from './images/Wallet.png';
import HomeScreen from './images/Screenshot.png';
import Mail from './images/Mail.png';
import Pic from './images/Picture.png';
import Down from './images/Down.png'; 
import Airdrop from './images/Airdrop.png'; 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
        <Image source={Down} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Share My Card</Text>
      </TouchableOpacity>
      <Image source={Qr} style={styles.image} />
      <View style={styles.box}>
        <View style={styles.iconRow}>
          <Image source={Iconcard} style={styles.icon} />
          <Text>Share my card</Text>
        </View>
        <View style={styles.iconRow}>
          <Image source={Wallet} style={styles.icon} />
          <Text>Add to card wallet</Text>
        </View>
        <View style={styles.iconRow}>
          <Image source={HomeScreen} style={styles.icon} />
          <Text>Add card to homescreen</Text>
        </View>
        <View style={styles.iconRow}>
          <Image source={Mail} style={styles.icon} />
          <Text>Create email signature</Text>
        </View>
        <View style={styles.iconRow}>
          <Image source={Pic} style={styles.icon} />
          <Text>Virtual background</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => alert('Another Button Pressed!')}>
        <Image source={Airdrop} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Share With Airdrop</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
  },
  box: {
    width: '80%',
    backgroundColor: '#d3d3d3', // Light gray color
    borderRadius: 10,
    padding: 16,
    alignItems: 'flex-start',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF612F',
    padding: 15,
    paddingLeft:65,
    paddingRight:65,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:17,
    marginLeft: 8,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
});

export default App;
