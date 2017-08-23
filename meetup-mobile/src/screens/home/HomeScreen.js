import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MeetupApi from '../../../constants/api';
import styles from './styles/HomeScreen';
import {LoadingScreen} from '../../commons';
const MEETUPAPI = new MeetupApi();
class HomeScreen extends Component {
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
                    <Text> Home Screen</Text>
                </View>
                );
    }
}
;
export default HomeScreen;


