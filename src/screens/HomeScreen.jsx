import {  ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useProducts } from '../hooks/useProducts';
import { useCategories } from '../hooks/useCategories';

import { ListProducts } from '../components'
import { ButtonCategorie, SearchForm } from '../components/ui';


export const HomeScreen = () => {

    const { products, isLoading } = useProducts();
    const { categories } = useCategories();

    if( isLoading ){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color="#F1722E" size={100} />
            </View>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            <View style={{ marginBottom:20 }}>
                <Text style={ styles.title }>Tech Store</Text>
                <SearchForm/>
            </View>


            <View style={{ marginBottom:20 }}>
                <Text style={{...styles.title, marginBottom:5 }}>Categorias</Text>
                <View style={ styles.categoriesList}>
                    {
                        categories.map( category  => ( 
                            <ButtonCategorie key={ category.id }  category={ category }/> 
                            ))
                        }
                </View>
            </View>

            <View style={ styles.productTitleContainer }>
                <Text style={{ fontSize:20, fontWeight:'600' }}>
                    Todos los productos
                </Text>
            </View>
            <ListProducts products={ products }/>

        </ScrollView>
    )
}

const gap = 8;
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
    },
    categoriesList:{
        display:'flex',
        flexDirection:'row',
        // justifyContent:'space-around',
        flexWrap: 'wrap',
    }
});