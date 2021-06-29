import React from 'react';
import { View,StyleSheet,TextInput,Button,Modal } from 'react-native';


function GoalInput(props) {
    return  <Modal style={styles.moadalStyle} visible={props.visiblity} animationType='slide'>
                <View style={styles.inputBox}>
                    <View style={styles.inputStyle}>
                        <TextInput value={props.goal} onChangeText={props.goalHandler} placeholder="YOUR GOAL" style={{borderBottomColor:'#007bff',borderBottomWidth:2}}/>
                    </View>
                    <View style={styles.buttonGroup}>
                        <View style={styles.buttonStyle}>
                            <Button title="ADD" onPress={props.addGoalHandler}/>
                        </View>
                        <View style={styles.buttonStyle}>
                            <Button title="CANCEL" onPress={props.addHandler} color='red'/>
                        </View>
                    </View>
                </View>
            </Modal>
}

const styles = StyleSheet.create({
    inputBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
        inputStyle:{
        width:'80%'
    },
        buttonStyle:{
        marginVertical:15,
        width:'40%'
    },
    buttonGroup:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'90%'
    }
})

export default GoalInput
