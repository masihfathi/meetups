import {TabNavigator} from 'react-navigation';
import {
HomeScreen,
        NotificationScreen,
        ProfileScreen
        } from '../screens';

export default TabNavigator({
    Home: {
        screen: HomeScreen
    },
    Notification: {
        screen: NotificationScreen
    },
    profile: {
        screen: ProfileScreen
    }
}, {
    tabBarOptions: {
        showIcon: true,
        showLabel: false
    }
});

