import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    View,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';
import CustomText from '../../../components/customUI/CustomText';
import TextInput from './Field';
import styles from './registerForm.styles';
import { registerValidate as validate } from '../../../utils/registerValidate';

const RegisterForm = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const unmounted = useRef(false);

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        return () => {
            unmounted.current = true;
        };
    }, []);

    const toggleShowPass = () => {
        setShowPass((prevShowPass) => !prevShowPass);
    };

    const toggleShowConfirmPass = () => {
        setShowConfirmPass((prevShowPass) => !prevShowPass);
    };

    const submit = async () => {};

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'position' : 'height'}
            // keyboardVerticalOffset={40} // adjust the value here if you need more padding
            // style={{ flex: 1 }}
        >
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={{ position: 'absolute', top: 50, left: 20, zIndex: 10 }}
            >
                <Ionicons name="ios-arrow-back" size={35} color={COLORS.light_green} />
            </TouchableOpacity>

            <View style={styles.header}></View>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View
                        style={{
                            flexDirection: 'column',
                            marginHorizontal: 10,
                            zIndex: 0,
                        }}
                    >
                        <View>
                            <CustomText style={styles.title}>REGISTER</CustomText>
                        </View>
                        <View>
                            <TextInput
                                label="Your Name"
                                keyboardType="default"
                                name="username"
                                icon="id-card"
                                tyle={styles.textInput}
                                theme={{ colors: { primary: COLORS.leaveGreen } }}
                            />
                            <TextInput
                                label="Email"
                                name="email"
                                keyboardType="email-address"
                                icon="email"
                                theme={{ colors: { primary: COLORS.leaveGreen } }}
                            />
                            <TextInput
                                name="password"
                                keyboardType="default"
                                label="Password"
                                secureTextEntry={showPass ? false : true}
                                onToggleShowPass={toggleShowPass}
                                icon={showPass ? 'eye-off' : 'eye'}
                            />
                            <TextInput
                                name="confirmPassword"
                                keyboardType="default"
                                label="Confirm Password"
                                secureTextEntry={showConfirmPass ? false : true}
                                onToggleShowPass={toggleShowConfirmPass}
                                icon={showConfirmPass ? 'eye-off' : 'eye'}
                            />
                        </View>

                        <TouchableOpacity onPress={submit} style={{ marginVertical: 10, alignItems: 'center' }}>
                            <View style={styles.signIn}>
                                {loading ? (
                                    <ActivityIndicator size="small" color="#fff" />
                                ) : (
                                    <CustomText style={styles.textSign}>Register</CustomText>
                                )}
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.center}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <CustomText style={styles.loginDirection}>Already have account? Sign In</CustomText>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RegisterForm;
