import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

class ProfileScreen extends Component {    
    static navigationOptions = {
      headerStyle: {
         backgroundColor: Colors.purpleColor
      },        
      tabBarIcon: ({tintColor})=>(
          <FontAwesome name="user-circle" size={25} color={tintColor}/>
      )
    }
    render() {
        return (<View style={{flex: 1}}>
            <Text style={{justifyContent: 'center'}}>Profile</Text>
        </View>);
    }
 };
        export default ProfileScreen;

