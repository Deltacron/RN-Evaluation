import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

function Header({handleSearch}) {
  return (
    <View style={{ padding: 20 }}>
      <View>
        <Text style={styles.matchText} >Match Your Style</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}> 
                <Fontisto name="search" size={26} color="#c0c0c0"/>
            </View>
          <TextInput style={styles.textInput}  onChangeText={(search) => handleSearch(search)} placeholder="Search" />
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    matchText: {
        fontSize: 28,
        color: '#000000',
        marginTop: 35,
        marginVertical: 10,
    },
    iconContainer : {
        marginHorizontal: 15
    },
    inputContainer: {
        backgroundColor: "#ffffff",
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20,
    },
    textInput: {
        flex: 1
    }
});