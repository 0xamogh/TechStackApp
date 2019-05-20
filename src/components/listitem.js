import React, {Component} from 'react';
import {Text,View,UIManager,TouchableWithoutFeedback,LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';
//import console = require('console');
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }
    renderDesc(){
        if(this.props.expanded){
            return (
                <CardSection>
                <Text style={{flex:1},styles.cardText}>{this.props.library.item.description}</Text>
                </CardSection>
            );
        }
    }
    render(){
        //console.log(this.props);
        const {id,title,description } =this.props.library.item;
        console.log(this.props);
        return (
            <TouchableWithoutFeedback
            onPress={()=>this.props.selectLibrary(id)}>
            <View>          
            <CardSection>
                <Text style={styles.titleStyle}>{title}</Text>
            </CardSection>
            {this.renderDesc()}
            </View>

            
            </TouchableWithoutFeedback>
        );
    }
}
const mapStateToProps = (state,ownProps) =>{
    const expanded = state.selectedLibraryId===ownProps.library.item.id;

    return { expanded};

};
const styles = {
    titleStyle : {
         fontSize : 18,
         paddingLeft:15,
         color:"#000"
            },
    cardStyle:{
        height:0
    },
    cardText:{
        color:"#000"
    }
}
export default connect(mapStateToProps,actions)(ListItem);