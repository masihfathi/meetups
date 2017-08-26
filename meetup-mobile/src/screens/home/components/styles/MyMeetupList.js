import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
    root: {
        flex: 1
    },
    titleContainer: {
        flex: .1,
        paddingHorizontal: '2.5%',
        paddingVertical: '2.5%'
    },
    contentContainer: {
        flex: 1
    },
    title: {
        color: '$whiteColor',
        fontSize: 25,
        fontFamily: 'DancingBold'
    },
    meetupCard: {
        height: 200,
        width: 175,
        marginHorizontal: 2.625,
        backgroundColor: '$redColor'
    },
    meetupCardTopContainer: {
        flex: 1,
        position: 'relative'
    },
    meetupCardButtomContainer: {
        flex: .4,
        backgroundColor: '$whiteColor',
        justifyContent: 'center',
        paddingHorizontal: '2.5%'
    },
    meetupCardTitle: {
        position: 'absolute',
        color: '$whiteColor',
        top: '2%',
        left: '2.5%',
        fontFamily: 'DancingBold'
    },
    meetupCardMetaName: {
        fontSize: 15,
        fontFamily: 'DancingBold'
    },
    meetupCardMetaDate: {
        fontSize: 13,
        fontFamily: 'Dancing'
    }
});
export default styles;

