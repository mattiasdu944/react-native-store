
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const SearchForm = () => {
    return (
        <View style={ styles.formContainer }>
            <TextInput style={ styles.textInput }/>
            <TouchableOpacity style={ styles.button }>
                <Text style={{ color:'#f3f3f3', textAlign:'center', margin:'auto' }}>Buscar</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    formContainer: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
    },
    textInput:{
        borderColor:'#d6d6d6',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        width:'80%'
    },
    button:{
        backgroundColor:'#000',
        width:'18%',
        paddingVertical:10,
        borderRadius:10,
        marginLeft:5,
        alignItems: 'center',
    }
})