import React from 'react';

import {Button, Text, View} from 'react-native';
import {useProductsStore} from '../../store/products/products';

export const Product = () => {
  const {products, addProduct, removeProduct} = useProductsStore();

  const product = {
    id: Math.floor(Math.random() * 100),
    price: 10,
    name: `Product ${Math.floor(Math.random() * 100)}`,
  };

  console.log('Render Product----');

  return (
    <View style={{marginTop: 50}}>
      <Text>Product</Text>

      <Button title="Add Product" onPress={() => addProduct(product)} />
      {products.length > 0 && (
        <Button
          title="Remove Product"
          onPress={() => removeProduct(products[0].id)}
        />
      )}

      {products.map((product, index) => (
        <View key={index} style={{flexDirection: 'row'}}>
          <Text>{product.id}</Text>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
        </View>
      ))}
    </View>
  );
};
