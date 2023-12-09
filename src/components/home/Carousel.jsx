import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';

const Carousel = () => {
    const sliders = [
        'https://file.hstatic.net/200000201143/article/chup_anh_my_pham__dea9c6ccbcac478ab445986be908c965_1024x1024.jpeg',
        'https://sadesign.vn/wp-content/uploads/2021/02/chinh-sua-anh-my-pham.jpg',
        'https://studiochupanhdep.com/Upload/Images/Album/anh-my-pham-02.jpg',
    ];
    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={sliders}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{ borderRadius: 15, width: '95%', marginTop: 8 }}
                autoplay
                circleLoop
            />
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
