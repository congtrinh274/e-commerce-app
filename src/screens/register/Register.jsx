import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import RegisterForm from './components/RegisterForm';

const { height, width } = Dimensions.get('window');

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ flex: 1, position: 'absolute', height, width }}
                source={require('../../../assets/Images/flower3.jpg')}
                blurRadius={10}
            ></ImageBackground>
            <RegisterForm navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Register;
