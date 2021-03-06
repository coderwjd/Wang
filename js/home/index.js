/**
 * Created by wang on 16/6/21.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import HandlePage from '../handle';
import AcceptancePage from '../acceptance';
import Header from '../common/RTRHeader';
import HomeListView from './HomeListView';

class HomePage extends Component{

    render() {
        return(
          <View style={{flex:1, backgroundColor:"#f5f5f5"}}>
              <Header title="抢修养护"/>

              <View style={styles.ActionButtonBox}>

                  <ActionButton
                      name="受理"
                      icon={require('./img/ic_repair_module_add.png')}
                      onPress={() => {this.onPress("acceptance")}}/>

                  <ActionButton
                      name="统计"
                      icon={require('./img/ic_repair_module_statistics.png')}/>

                  <ActionButton
                      name="已完成"
                      icon={require('./img/ic_repair_module_completed.png')}/>

              </View>

              <HomeListView navigator={this.props.navigator}/>
          </View>
        )
    }

    onPress(tag){
        console.log("tag:"+tag);
        let component;
        switch (tag)
        {

            case "acceptance":
                component = {
                    name:"Acceptance",
                    component:AcceptancePage
                };
                break;

        }

        if (component)
            this.props.navigator.push(component)
    }

}

class ActionButton extends Component{
    render(){
        return (
            <TouchableOpacity
                style={styles.ActionButtonItemBox}
                onPress={this.props.onPress}>
                <Image style={styles.ActionButtonImg} source = {this.props.icon}/>
                <Text style={styles.ActionButtonText}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    ActionButtonBox: {
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:16,
        paddingRight:16,
        backgroundColor: '#00a0f2',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    ActionButtonItemBox: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ActionButtonImg: {
        height: 36,
        width:36,
        padding:5
    },

    ActionButtonText: {
        color:'#fff',
        fontSize:14,
        marginTop:8
    }
});

module.exports = HomePage;