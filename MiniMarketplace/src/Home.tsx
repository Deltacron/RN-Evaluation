import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './components/Header'; 
import ProductCard from './components/ProductCard';
import data from './data/data.json';
import { getProducts } from './services/ProductService';

const Home = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();

  useEffect(() => {
    loadProducts()
  }, []);

  const loadProducts = () => {
    getProducts(page)
    .then((response) => {
      const productsWithLikes = response.map(item => ({
        ...item,
        isLiked: false 
      }));
      if (products?.length > 0) {
        setProducts(prevData => [...prevData, ...productsWithLikes]);
      } else {
        setProducts(productsWithLikes);
      }
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const loadMoreProducts = () => {
    if( !loading) {
      setPage(prevPage => prevPage + 1);
      console.log("Loading more products, current page:", page);
      setLoading(true);
      loadProducts();
    }
  }

  const handleLiked = (item) => {
    const newProducts = products?.map(product => {
      if (product.id === item.id) {
        return { ...product, isLiked: !product.isLiked };
      }
      return product;
    })
    setProducts(newProducts);
  }


  const handleSearch = (searchText) => {
    console.log("Search text:", searchText);
    if (searchText.trim() !== "") {
      const filteredProducts = products?.filter(product => product?.title?.toLowerCase().includes(searchText.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      loadProducts();
       setProducts(data);
    }
  }
  return (
   <LinearGradient 
   colors={["#FDF0F3", "#FFFBFC"]} 
   style={styles.container}>
    <Header handleSearch={handleSearch}/>
    <FlatList 
      data={products} 
      numColumns={2}
      renderItem={({item, index}) => <ProductCard key={index} item={item} handleLiked={handleLiked} />} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 150 }}
      keyExtractor={(item) => item.id?.toString()} 
      onEndReached={loadMoreProducts}
    />
  </LinearGradient>
  ) 
};

export default Home;

const styles = StyleSheet.create({ 
  container: {
    flex:1
  }
})
