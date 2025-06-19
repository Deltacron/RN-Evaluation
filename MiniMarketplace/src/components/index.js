import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../assets/images'

export const ProductCard = ({ item, onPress, onPressBuy }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles?.card}>
            <Image source={{ uri: images?.product1 }} resizeMode='cover' style={styles?.productImage} />
            <View style={{ gap: 5 }}>
                <Text style={styles?.pName}>{'Product Name'}</Text>
                <Text style={styles?.pCategory}>{'Category'}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles?.price}>{'$20'}</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={onPressBuy} style={styles?.button}>
                        <Text style={[styles?.pCategory, { color: '#000' }]}>{'Buy'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export const CategoriesList = ({data=[], selected, setSelected})=>{
    return (
        <View style={styles?.categoriesContainer}>
            {data?.map((i, ind)=>{
                <TouchableOpacity key={ind} activeOpacity={0.8} onPress={()=>setSelected(i)} style={[styles?.categoryButton, selected==i && {borderWidth:1}]}>
                <Text style={[styles?.pCategory, { color: '#000' }]}>{'Category'}</Text>
            </TouchableOpacity>
            })}
        </View>
    )
}


// styles
const styles = StyleSheet.create({
    // ProductCard
    card: {
        flexDirection: 'row',
        gap: 5,
        width: '100%',
        backgroundColor: '#47B0F5',
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    productImage: {
        height: 150,
        width: 150,
        borderRadius: 10
    },
    pName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000'
    },
    pCategory: {
        fontSize: 14,
        fontWeight: '400',
        color: 'gray'
    },
    button: {
        borderRadius: 100,
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000000',
        backgroundColor: '#ffff',
        width: 40,
        paddingVertical: 10,
        borderRadius: 20
    },

    // categories list
    categoriesContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap: 10,
        marginVertical: 15
    },
    categoryButton:{
        borderRadius: 100,
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderColor:'#47B0F5'
    }
})