import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles/MyMeetupList';
const MyMeetupList = ({meetups}) => (
            <View style={styles.root}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        My meetups
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                </View>
            </View>
            );
export default MyMeetupList;


