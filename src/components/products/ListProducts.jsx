import { StyleSheet, View } from 'react-native'

import { CardProduct } from './CardProduct'


export const ListProducts = ({ products }) => {
    

    return (
        <View style={ styles.listProducts }>
            {
                products.map( product => 
                    <CardProduct 
                        key={ product.id }
                        product={ product }
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    listProducts:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
