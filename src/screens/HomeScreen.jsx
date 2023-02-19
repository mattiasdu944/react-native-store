import {  ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'

import { ListProducts } from '../components'
import { useProducts } from '../hooks/useProducts';


export const HomeScreen = () => {

    const { products, isLoading } = useProducts();


    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            <Text style={ styles.title }>Tech Store</Text>
            <Text style={{ color:'#878787', marginBottom:40 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>



            <View style={ styles.productTitleContainer }>
                <Text style={{ fontSize:20, fontWeight:'600' }}>Todos los productos</Text>
                <Text style={{ color:'#5479DF' }}>Ver Todos</Text>
            </View>

            {
                isLoading
                ? (
                    <>
                        <ActivityIndicator/>
                    </>
                )
                : <ListProducts products={ products }/>
            }
        
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '900',
    },

    productTitleContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        marginBottom:15 
    }
});