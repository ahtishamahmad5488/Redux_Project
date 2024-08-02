import {View, ScrollView, Button} from 'react-native';
import React from 'react';
import Header from './Header';
import Product from './Product';
import {useNavigation} from '@react-navigation/native';

const ProductWrapper = () => {
  const navigation = useNavigation();

  const products = [
    {
      id: 1,
      name: 'realMe',
      color: 'black',
      price: 32000,
      Image: require('../Images/realMe.jpeg'),
    },
    {
      id: 2,
      name: 'Vivo',
      color: 'Green',
      price: 36000,
      Image: require('../Images/vivo.jpeg'),
    },
    {
      id: 3,
      name: 'OPPO',
      color: 'white',
      price: 22000,
      Image: require('../Images/opPo.jpeg'),
    },
    {
      id: 4,
      name: 'SamSung',
      color: 'Gray',
      price: 39000,
      Image: require('../Images/samSung.jpeg'),
    },
    {
      id: 5,
      name: 'Techno',
      color: 'black',
      price: 31000,
      Image: require('../Images/techno.jpeg'),
    },
  ];
  return (
    <View>
      <Button
        title="Go to User List"
        onPress={() => {
          navigation.navigate('User');
        }}
      />
      <Header />
      <ScrollView>
        {products.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductWrapper;
