import {TabNavigator} from 'react-navigation';
import {
HomeScreen,
        NotificationScreen,
        ProfileScreen
} from '../screens';
import Colors from '../../constants/Colors';
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
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: Colors.lightBlueColor,
        showIcon: true,
        showLabel: false,
        pressColor:Colors.redColor,
        indicatorStyle: {
            backgroundColor: Colors.redColor            
        },
        style: {
            backgroundColor: Colors.purpleColor
        }
    }
});

