import React from 'react';
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native'

function GoalItem(props) {
    return <TouchableOpacity onPress={() => props.deleteHandler(props.index)}>
                <View style={styles.listItem}>
                    <Text>
                        {props.item}
                    </Text>
                </View>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
    listItem:{
        padding:20,
        backgroundColor:'skyblue',
        borderColor:'#000',
        borderWidth:1,
        marginHorizontal:5,
        marginVertical:10
    }
})

export default GoalItem
