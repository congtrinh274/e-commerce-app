import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated, StatusBar } from 'react-native';

//Slides
import { Slide, SubSlide, Ticker, Pagination } from './components';

import { INTRO_SLIDES } from '../../constants/';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

export const Splash = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollClick = useRef(null);
    const unmounted = useRef(false);
    const navigation = useNavigation();

    useEffect(() => {
        return () => {
            unmounted.current = true;
        };
    }, []);
    const backgroundColor = scrollX.interpolate({
        inputRange: [0, width, width * 2],
        outputRange: ['#BFEAF5', '#BEECC4', '#FFE4D9'],
        extrapolate: 'clamp',
    });
    const textTranslate = scrollX.interpolate({
        inputRange: [0, width, width * 2],
        outputRange: [0, width * -1, width * -2],
        extrapolate: 'clamp',
    });

    const getLoginScreen = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Ticker scrollX={scrollX} />
                <Animated.ScrollView
                    ref={scrollClick}
                    horizontal
                    snapToInterval={width}
                    scrollTo={{ x: scrollClick, animated: true }}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }, //
                    )}
                >
                    {INTRO_SLIDES.map((slide) => {
                        return <Slide key={slide.id} imageUrl={slide.imageUrl} />;
                    })}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Pagination slides={INTRO_SLIDES} scrollX={scrollX} />
                <Animated.View style={[StyleSheet.absoluteFillObject, { backgroundColor }]}></Animated.View>
                <Animated.View style={styles.footerContent}>
                    <Animated.View
                        style={{
                            flexDirection: 'row',
                            width: width * INTRO_SLIDES.length,
                            transform: [{ translateX: textTranslate }],
                        }}
                    >
                        {INTRO_SLIDES.map(({ subtitle, des }, index) => {
                            return (
                                <SubSlide
                                    key={subtitle}
                                    last={index === INTRO_SLIDES.length - 1}
                                    EnterApp={getLoginScreen}
                                    subtitle={subtitle}
                                    des={des}
                                    scrollX={scrollX}
                                    NextSlide={() => {
                                        if (scrollClick.current) {
                                            scrollClick.current.scrollTo({ x: width * (index + 1) });
                                        }
                                    }}
                                />
                            );
                        })}
                    </Animated.View>
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    slider: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
        height: 0.61 * height,
        borderBottomEndRadius: 75,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        borderTopLeftRadius: 75,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
});

export default Splash;
