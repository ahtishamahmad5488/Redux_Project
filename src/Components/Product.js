import {View, Text, StyleSheet, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeToCart} from './Redux/action';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdd, setIsAdd] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  const handleRemoveToCart = item => {
    dispatch(removeToCart(item.name));
  };

  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdd(true);
    } else {
      setIsAdd(false);
    }
  }, [cartItems]);

  return (
    <View style={styles.productContainer}>
      <Text style={styles.productText}>{item.name}</Text>
      <Text style={styles.productText}>{item.color}</Text>
      <Text style={styles.productText}>{item.price}</Text>
      <Image style={styles.productImage} source={item.Image} />
      {isAdd ? (
        <Button
          title="Remove To Cart"
          onPress={() => handleRemoveToCart(item)}
        />
      ) : (
        <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    padding: 10,
    margin: 80,
    marginTop: -10,
    marginBottom: 50,
  },
  productText: {
    fontSize: 24,
  },
  productImage: {
    height: 100,
    width: 100,
    marginBottom: 5,
    borderRadius: 25,
    // resizeMode: 'contain', // Ensure the image is contained within the bounds
  },
});
export default Product;
