import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';
import MeetupApi from '../../../constants/api';
import styles from './styles/HomeScreen';
import {LoadingScreen} from '../../commons';
import {MyMeetupList} from './components';
import { FontAwesome } from '@expo/vector-icons';
const MEETUPAPI = new MeetupApi();
class HomeScreen extends Component {
    static navigationOptions = {
      tabBarIcon: ()=> (
        <FontAwesome name="home" size={25}/>      
      )        
    }
    static defaultProps = {
        MEETUPAPI
    }
    state = {
        loading: false,
        meetups: []
    }
    async componentDidMount() {
        this.setState({
            loading: true
        });
        const MEETUPS = await this.props.MEETUPAPI.fetchGroupMeetups();
        this.setState({
            loading: false,
            meetups: MEETUPS
        });
    }
    render() {
        if (this.state.loading) {
            return <LoadingScreen />;
        }
        return (
                <View style = {styles.root}>
                    <View style={styles.topContainer}>
                        <Text style={styles.textContainer}> Home Screen</Text>
                    </View>
                    <View style={styles.buttomContainer}>
                        <MyMeetupList meetups={this.state.meetups}/>                            
                    </View>                    
                </View>
                );
    }
}
;
export default HomeScreen;


