import React, {Component} from 'react';
import  EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import  {HomeScreen} from './src/screens';
import  {cachedFonts} from './helpers';
import {AppLoading} from 'expo';
EStyleSheet.build(Colors);
export default class App extends Component {
    state = {
        fontLoaded: false
    }
    async _loadAssetAsync() {
        const fontAssets = cachedFonts([
            {
                Dancing: require('./assets/fonts/Dancing/DancingScript-Regular.ttf')
            },
            {
                DancingBold: require('./assets/fonts/Dancing/DancingScript-Bold.ttf')
            }
        ]);
        await Promise.all(fontAssets);
        this.setState({
            fontLoaded: true
        });
    }
    componentDidMount() {
        this._loadAssetAsync();
    }
    render() {
        if (!this.state.fontLoaded) {
         return (<AppLoading/>);
         }
        return (
                <HomeScreen />
                );
    }
}
