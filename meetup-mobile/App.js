import React, {Component} from 'react';
import  EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import  Root from './src/Roots';
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
            },
            {
                fanteziFarsi: require('./assets/fonts/fantezi-farsi/Far_Fantezy.ttf')
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
                <Root />
                );
    }
}
