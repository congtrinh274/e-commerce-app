import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    topBarContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: COLORS.text,
        fontSize: SIZES.medium,
        fontFamily: 'medium',
        textAlign: 'center',
    },
    iconContainer: {
        marginRight: 8,
    },
    headerContainer: {
        width: '100%',
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageBox: {
        resizeMode: Platform.OS === 'android' ? 'cover' : 'contain',
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#fff',
    },
    shopInfoContainer: {
        marginLeft: 8,
    },
    shopNameText: {
        color: COLORS.black,
        fontSize: SIZES.medium,
        fontFamily: 'bold',
        textAlign: 'center',
    },
    bioText: {
        color: COLORS.text,
        fontSize: SIZES.small,
        fontFamily: 'medium',
    },
    ShowShopBtn: {
        justifyContent: 'flex-end',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: COLORS.lighterGreen,
    },
    textSign: {
        fontSize: SIZES.small,
        color: '#fff',
        fontFamily: 'medium',
    },
});

export default styles;
