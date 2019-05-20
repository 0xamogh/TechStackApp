import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import LibraryList from './components/librarylist'; 

const App =()=> {
    return (
            //provider is allowed only one child

     <Provider store={createStore(reducers)}>
        <View>
            <Header headerText="Tecc Stack"/>
            <LibraryList/>

        </View>  
     </Provider>
    );
  
};

export default  App ;