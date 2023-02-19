import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native'

export const CardProduct = ({ product }) => {

    return (
        <View style={{
            marginBottom:10,
        }}>
            <TouchableOpacity>
                <View style={{
                    padding:10,
                    backgroundColor:'#e9e9e9',
                    borderRadius:15
                }}>
                    <Image
                        source={{ uri: product.images[0] }}
                        style={ styles.image }
                    />
                </View>
            </TouchableOpacity>

            <Text numberOfLines={1} style={ styles.title }>{ product.name }</Text>
            <Text style={ styles.price }>${ product.price }.00</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 150,
    },
    title:{
        marginTop:10,
        fontWeight:'bold',
    },
    price:{
        color:'#878787'
    }
});
