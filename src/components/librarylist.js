import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import ListItem from './listitem';
//import console = require('console');

class LibraryList extends Component {

    renderItem(library){
        return <ListItem library={library}/>;
    }

    render(){
     //   console.log(this.props.data);
        return(
            <FlatList
            data={this.props.data}
            renderItem={this.renderItem}
            keyExtractor={library=>library.id.toString()}
            />
        );
    }
}

 const mapStateToProps = state => {
    //maps the stuff stored in the redux store to props that can be passed to the component
    return { data : state.libraries};

};
export default connect(mapStateToProps)(LibraryList);