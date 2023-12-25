import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import StoreRegisterForm from './components/StoreRegisterForm';

const { height, width } = Dimensions.get('window');

const StoreRegister = () => {
    return (
        <View>
            <ImageBackground
                style={{ flex: 1, position: 'absolute', height, width }}
                source={require('../../../../assets/Images/flower3.jpg')}
                blurRadius={10}
            ></ImageBackground>
            <StoreRegisterForm />
        </View>
    );
};

export default StoreRegister;

const styles = StyleSheet.create({});
