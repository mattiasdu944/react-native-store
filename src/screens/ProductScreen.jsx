import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useProducts } from '../hooks/useProducts'

export const ProductScreen = ({ route }) => {

    const { product, isLoading } = useProducts(`/${ route.params }`)


    
    if( isLoading ){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color="#F1722E" size={100} />
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex:1, paddingTop:50, paddingHorizontal:15 }}>
            <View>
                <FlatList
                    data={ product.images }
                    keyExtractor={ image => image }
                    renderItem={({item}) => (
                        <View style={ styles.imageContainer }>
                            <Image
                                source={{ uri: item }}
                                style={{ width:350, height:350 }}
                            />
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={ styles.titleContent }>
                <Text style={ styles.titles }>{ product.name }</Text>
                <Text style={ styles.price }>${ product.price }.00</Text> 
            </View>

            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:10 }}>
                <View style={ styles.infoContent }>
                    <Text style={{ color:'#878787' }}>Categoria: </Text>
                    <Text style={{ color:'#878787' }}>{ product.category }</Text> 
                </View>
                <View style={ styles.infoContent }>
                    <Text style={{ color:'#878787' }}>Cantidad Disponible: </Text>
                    <Text style={{ color:'#878787' }}>{ product.inStock }</Text> 
                </View>
            </View>



            <View>
                <Text style={ styles.titles }>Detalles</Text>
                <Text style={{ color:'#878787' }}>{ product.description }</Text>
            </View>
            
            <TouchableOpacity style={ styles.button } activeOpacity={0.7}>
                <Text style={{ color:'#f3f3f3', textAlign:'center' }}>Comprar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        padding:10,
        backgroundColor:'#e9e9e9',
        borderRadius:15,
        marginRight:10,
    },
    titles:{
        fontSize:20,
        fontWeight:'bold'
    },
    titleContent:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    price:{
        fontSize:20,
        fontWeight:'bold',
        color:'#F1722E'
    },
    button:{
        width:'100%',
        backgroundColor:'#000',
        paddingVertical:15,
        borderRadius:20,
    },
    infoContent:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center'
    }
})
