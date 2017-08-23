import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '$blackBlueColor'
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',
        alignItems: 'center'
    },
    buttomContainer: {
        flex: .8,
        justifyContent: 'center',
        backgroundColor: 'blue'
    }
});
export default styles;


