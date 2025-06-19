import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductCard = ({item ,handleLiked}) => {

  return (
      <View style={styles.container}>
        <Image 
          source={{ uri: item.images[0] }} 
          style={styles.coverImage}
        />
        <View style={styles.content}>
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
        </View>
        
        <TouchableOpacity onPress={() => handleLiked(item)}
             style={styles.likeContainer}>
            {
                item?.isLiked ? 
                <AntDesign name={"heart"} size={20} color={"#E55B5B"}  />
                : 
                <AntDesign name={"hearto"} size={20} color={"#E55B5B"} />
            }
        </TouchableOpacity>
      </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom: 10,
        position: "relative",
        // borderWidth: 1,
        // borderColor: '#E0E0E0',
    },
    content: {
        paddingLeft: 15
    },
    coverImage: {
        height: 256,
        width: "97%",
        borderRadius: 20,
        marginVertical: 10
    },
    productName: {
        fontSize: 18,
        color: "#444444",
        fontWeight: "600",
    },
    productPrice: {
       fontSize: 18,
       color: "#9c9c9c",
        fontWeight: "600" 
    },
    likeContainer : {
        height: 34,
        width: 34,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
        position: "absolute",
        top: 20,
        right: 20
    }
})
