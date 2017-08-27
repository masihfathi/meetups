import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class NotificationScreen extends Component {
    static navigationOptions = {
      tabBarIcon: ()=> (
          <MaterialIcons name="notifications" size={25}/>
      )
    }  
    render() {
        return (<View style={{flex: 1}}>
            <Text style={{justifyContent: 'center'}}>Notifications</Text>
        </View>);
    }
 };
        export default NotificationScreen;

