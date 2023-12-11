import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Text } from 'react-native';

const { height, width } = Dimensions.get('window');

const VerifyEmail = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flex: 1, position: 'absolute', height, width }}
                source={require('../../../assets/Images/flower3.jpg')}
                blurRadius={10}
            ></ImageBackground>
            <Text>Verify Email</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default VerifyEmail;
