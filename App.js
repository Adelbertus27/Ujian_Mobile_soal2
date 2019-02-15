import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import axios from 'axios'

export default class App extends Component {
  state={makan:''}

  ambildata = () =>{
    var url = 'https://developers.zomato.com/api/v2.1/search?q=';

  var config = {
    headers:{'user-key':'fd8884a6b2fe363f4feb75da39beb927'}
  };

  axios.get(url, config).then((ambilData)=>{
    this.setState({
      resto: ambilData.data.restaurants.restaurant.name,
      kota: ambilData.data.restaurants.restaurant.location.city,
      alamat: ambilData.data.restaurants.restaurant.location.address,
      harga2: ambilData.data.restaurants.restaurant.average_cost_for_two,
      gambar: ambilData.data.restaurants.restaurant.thumb
    })
  })

  

  }
  render() {
    return (
      <View style={styles.container}>
       <Text> halo gaes, apa kabar??</Text>        
      
      <TextInput 
        style={{height: 50, width:25}} 
        placeholder='Cari makanan...' 
        keyboardType= 'default' 
        onChangeText= {(e)=>{this.setState({makan:e})}}
      />

      keluardata = ()=>{
        axios.post(url,config).then(()=>{
          this.setState(resto)
          this.setState(kota)
          this.setState(alamat)
          this.setState(harga2)
          this.setState(gambar)
        })
      }

      <Button 
      color='red'
      onPress= {()=>{keluardata}}
      >Cari Daftar Resto</Button>
      </View>
    );
  }
}
