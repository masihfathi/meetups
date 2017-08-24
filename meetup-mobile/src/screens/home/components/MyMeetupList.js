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
                     <ScrollView horizontal>
                     {meetups.map((meetup,i)=>(
                        <View key={i} style={styles.meetupCard}>                        
                            <View style={styles.meetupCardTopContainer}>
                                    <Text style={styles.meetupCardTitle}>{meetup.title}</Text>                              
                            </View>
                            <View style={styles.meetupCardButtomContainer}>
                                    <Text style={styles.meetupCardMetaName}>{meetup.group[0].name}</Text>  
                                    <Text style={styles.meetupCardMetaDate}>mar 2m 6:00pm</Text>  
                            </View>
                        </View>
                      ))}                       
                     </ScrollView>                     
                </View>
            </View>
            );
export default MyMeetupList;


