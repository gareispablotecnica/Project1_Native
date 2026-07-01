import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import img1 from './assets/Productos/2.png'
import img2 from './assets/Productos/5.png'
import img3 from './assets/Productos/1.png'

import fondo from './assets/Fondo/fondo.jpg'

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ImageBackground
        source={fondo}
        style={styles.fondo}
        resizeMode='contain'
      ></ImageBackground>

      {/* div ---> tarjetas:clase css */}
      <View style={styles.Tarjetas}>
        <Text style={styles.Nombre}>Charizard</Text>
        <Image
          source={img1}
          alt='Producto'
          style={styles.imgTarjetas}
        />
        <Text style={styles.precio}>$10.000</Text>
        {/* <Button
          title='Agregar al Carrito'
          onPress={()=>{alert("Agregado")}}
          color={'#555'}
        ></Button> */}

        <TouchableOpacity
          onPress={() => { alert('Producto Agregado') }}
          style={styles.btnAgregar}
        >
          <Text style={styles.CarritoTitulo}>Agregar al Carrito</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.Tarjetas}>
        <Text style={styles.Nombre}>Charizard</Text>
        <Image
          source={img2}
          alt='Producto'
          style={styles.imgTarjetas}
        />
        <Text style={styles.precio}>$10.000</Text>
        {/* <Button
          title='Agregar al Carrito'
          onPress={()=>{alert("Agregado")}}
          color={'#555'}
        ></Button> */}

        <TouchableOpacity
          onPress={() => { alert('Producto Agregado') }}
          style={styles.btnAgregar}
        >
          <Text style={styles.CarritoTitulo}>Agregar al Carrito</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.Tarjetas}>
        <Text style={styles.Nombre}>Charizard</Text>
        <Image
          source={img3}
          alt='Producto'
          style={styles.imgTarjetas}
        />
        <Text style={styles.precio}>$10.000</Text>
        {/* <Button
          title='Agregar al Carrito'
          onPress={()=>{alert("Agregado")}}
          color={'#555'}
        ></Button> */}

        <TouchableOpacity
          onPress={() => { alert('Producto Agregado') }}
          style={styles.btnAgregar}
        >
          <Text style={styles.CarritoTitulo}>Agregar al Carrito</Text>
        </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Tarjetas: {
    width: 350,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    elevation: 5,
  },
  imgTarjetas: {
    width: 250,
    height: 250,
  },
  precio: {
    color: '#105030',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 20,
    alignContent: 'center',
  },
  btnAgregar: {
    padding: 10,
    backgroundColor: '#2b308c',
    borderRadius: 10,
    width: 180,
    height: 40,
    marginTop: 5,
    marginBottom: 5,
  },
  CarritoTitulo: {
    color: '#fff',
    textAlign: 'center',
  },
  fondo:{
    width:'100%',
  },
});
