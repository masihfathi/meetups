import {StackNavigator} from 'react-navigation';
import HomeNavigator from './HomeNavigation';

export default StackNavigator({
    Home: {
        screen: HomeNavigator
    }
});

