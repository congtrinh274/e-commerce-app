import React from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import CustomText from '../../components/customUI/CustomText';
import styles from './verifyEmail.styles';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const VerifyEmail = () => {
    const auth = useSelector((state) => state.auth);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={{ flex: 1, position: 'absolute', height, width }}
                source={require('../../../assets/Images/flower3.jpg')}
                blurRadius={10}
            ></ImageBackground>
            <View style={styles.wrapper}>
                <CustomText style={styles.title}>Registered successfully!</CustomText>
                <CustomText style={styles.subTitle}>Check your email for verification and then</CustomText>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                >
                    <CustomText style={styles.link}>Click here to Login!</CustomText>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default VerifyEmail;
