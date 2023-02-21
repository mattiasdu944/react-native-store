
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const ButtonCategorie = ({ category }) => {
    return (
        <TouchableOpacity style={ styles.button }>
            <Text style={{ color:'#f3f3f3' }}>
                { category.name }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        padding:10,
        backgroundColor: '#000',
        borderRadius: 25,
        maxWidth: '100%',
        marginRight:10,
        marginBottom:10,
    }
})