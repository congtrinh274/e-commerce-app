import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        marginTop: height * 0.15,
        width: width,
        marginBottom: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        zIndex: 1,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: COLORS.lighterGreen,
        marginTop: 10,
    },
    title: {
        color: COLORS.lightGreen,
        fontSize: 40,
        letterSpacing: 5,
        fontFamily: 'bold',
        textAlign: 'center',
    },
    textSign: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'medium',
    },
    textSignSmall: {
        color: COLORS.lighterGreen,
        textAlign: 'center',
    },
    center: {
        alignItems: 'center',
    },
    loginDirection: {
        color: COLORS.red,
        fontFamily: 'medium',
        fontSize: SIZES.medium,
        marginBottom: 10,
    },
});

export default styles;
