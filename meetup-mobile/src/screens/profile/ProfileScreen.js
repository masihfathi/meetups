import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class ProfileScreen extends Component {    
    static navigationOptions = {         
      tabBarIcon: ()=>(
          <FontAwesome name="user-circle" size={25}/>
      )
    }
    render() {
        return (<View style={{flex: 1}}>
            <Text style={{justifyContent: 'center'}}>Profile</Text>
        </View>);
    }
 };
        export default ProfileScreen;

