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
import { registerValidate as validate } from '../../../utils/validator/registerValidate';
import { register } from '../../../redux/features/authSlices';

const RegisterForm = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [inputData, setInputData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
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

    const submit = async () => {
        try {
            setLoading(true);
            const { username, email, password, confirmPassword } = inputData;
            const formErrors = validate({ username, email, password, confirmPassword });
            if (Object.keys(formErrors).length > 0) {
                Alert.alert('Lỗi', formErrors);
                setLoading(false);
                return;
            }
            await dispatch(register(username, email, password));
            navigation.navigate('VerifyEmail');
        } catch (error) {
            if (error.message === 'Request timeout') {
                Alert.alert('Error', 'Server does not response!');
            } else {
                Alert.alert('Error', error);
            }
            setLoading(false);
        }
    };

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
                <Ionicons name="ios-arrow-back" size={35} color={COLORS.lightGreen} />
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
                                onChangeText={(text) => setInputData({ ...inputData, username: text })}
                            />
                            <TextInput
                                label="Email"
                                name="email"
                                keyboardType="email-address"
                                icon="email"
                                theme={{ colors: { primary: COLORS.leaveGreen } }}
                                onChangeText={(text) => setInputData({ ...inputData, email: text })}
                            />
                            <TextInput
                                name="password"
                                keyboardType="default"
                                label="Password"
                                secureTextEntry={showPass ? false : true}
                                onToggleShowPass={toggleShowPass}
                                icon={showPass ? 'eye-off' : 'eye'}
                                onChangeText={(text) => setInputData({ ...inputData, password: text })}
                            />
                            <TextInput
                                name="confirmPassword"
                                keyboardType="default"
                                label="Confirm Password"
                                secureTextEntry={showConfirmPass ? false : true}
                                onToggleShowPass={toggleShowConfirmPass}
                                icon={showConfirmPass ? 'eye-off' : 'eye'}
                                onChangeText={(text) => setInputData({ ...inputData, confirmPassword: text })}
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
