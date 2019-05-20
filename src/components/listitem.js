import React, {Component} from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';
//import console = require('console');

class ListItem extends Component {
    render(){
        //console.log(this.props);
        const {id,title } =this.props.library;
        return (
            <TouchableWithoutFeedback
            onPress={()=>this.props.selectLibrary(id)}>

            <View>
            <CardSection>
                <Text style={styles.titleStyle}>{title}</Text>
            </CardSection>
            </View>
            
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    titleStyle : {
         fontSize : 40,
         paddingLeft:15,
         color:"black"
            },
    cardStyle:{
        height:0
    }
}
export default connect(null,actions)(ListItem);