/**
 * Created by wang on 16/6/22.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


class RTRButton extends Component{

    render(){
        return(
            <TouchableOpacity style={[styles.buttonBox, this.props.style]} onPress={this.props.onPress}>
                <Text style={styles.buttonText}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )

    }

}

const styles = StyleSheet.create({

    buttonBox: {
        marginLeft:16,
        marginRight:16,
        alignItems:'center',
        backgroundColor: '#00a0f2'
    },


   buttonText: {
       color:'#fff',
       fontSize:14,
       marginTop:12,
       marginBottom:12
    }
});

module.exports = RTRButton;