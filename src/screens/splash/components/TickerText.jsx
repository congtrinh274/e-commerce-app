import React from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { INTRO_SLIDES } from '../../../constants';

const TICKER_HEIGHT = 50;
const { height, width } = Dimensions.get('window');

export const Ticker = ({ scrollX }) => {
    const inputRange = [0, width, width * 2];
    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [0, -TICKER_HEIGHT, -TICKER_HEIGHT * 2],
    });
    return (
        <View style={styles.tickerContainer}>
            <Animated.View style={{ transform: [{ translateY }] }}>
                {INTRO_SLIDES.map(({ label }) => {
                    return (
                        <Text key={label} style={styles.tickerText}>
                            {label}
                        </Text>
                    );
                })}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    tickerContainer: {
        position: 'absolute',
        width,
        top: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : height > 667 ? 50 : 35,
        alignItems: 'center',
        overflow: 'hidden',
        height: TICKER_HEIGHT,
    },
    tickerText: {
        fontFamily: 'medium',
        textAlign: 'center',
        fontSize: 30,
        lineHeight: TICKER_HEIGHT,
        textTransform: 'uppercase',
        fontWeight: '800',
        color: '#2CB9B0',
    },
});
