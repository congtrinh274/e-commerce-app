import { Dimensions, Platform } from 'react-native';
const { height, width } = Dimensions.get('window');

const COLORS = {
    primary: '#2A4D50',
    secondary: '#DDF0FF',
    tertiary: '#FF7754',

    gray: '#83829A',
    gray2: '#C1C0C8',
    gray2: '#dadade',

    offWhite: '#F3F4F8',
    white: '#FFFFFF',
    black: '#000000',
    red: '#e81e4d',
    muted: '#707981',
    green: ' #00C135',
    light: '#F5F5F5',
    lightWhite: '#FAFAFC',
    lightGreen: '#0f7e4a',
    lighterGreen: '#2ba56a',
    leaveGreen: '#18a561',

    text: '#707070',
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width,
};

const SHADOWS = {
    small: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
};

export { COLORS, SIZES, SHADOWS };
