import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
        }}>
        <View
          style={{
            backgroundColor: 'purple',
            borderRadius: 20,
            height: 40,
            width: 40,
            borderColor: 'black',
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color: 'white',
            }}>
            {cartItem}
          </Text>
        </View>
      </Text>
    </View>
  );
};

export default Header;
