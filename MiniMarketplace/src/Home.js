import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import useHome from './hook';
import { CategoriesList, ProductCard } from './components';

const Home = () => {
  // calling hooks
  const {
    // states
    products, categories,
    selectedCategory, setSelectedCategory
  } = useHome()
  
  return (
    <View style={styles?.mainContainer}>
      <Text style={styles?.title}>All Products</Text>
      <CategoriesList data={[1,2,3,4]} selected={selectedCategory} setSelected={setSelectedCategory}/>
      <FlatList
        data={products}
        keyExtractor={(i, index)=>index?.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index})=>{
          return (
            <ProductCard item={item} />
          )
        }}
      />
    </View>
  );
};

export default Home;

 const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#ffffff',
    paddingHorizontal:10,
    paddingTop:10
  },
  title:{
    fontSize: 20,
    fontWeight:'600',
    color:'#000000',
    alignSelf:'center'
  }
 })