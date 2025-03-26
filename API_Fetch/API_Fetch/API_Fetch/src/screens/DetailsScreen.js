import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.category}>Categoria: {product.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  price: { color: 'lightgreen', fontSize: 18 },
  description: { color: '#ccc', marginTop: 10 },
  category: { color: '#bbb', marginTop: 10, fontStyle: 'italic' }
});

export default DetailsScreen;