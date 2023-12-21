import React, { useState } from 'react';
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
import styles from './loginForm.styles';
import { loginValidate as validate } from '../../../utils/validator/loginValidate';
import { login } from '../../../redux/features/authSlices';

const LoginForm = () => {
    const navigation = useNavigation();
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const toggleShowPass = () => {
        setShowPass((prevShowPass) => !prevShowPass);
    };

    const submit = async () => {
        try {
            setLoading(true);
            const formErrors = validate({ email, password });
            if (Object.keys(formErrors).length > 0) {
                Alert.alert('Lỗi', formErrors);
                setLoading(false);
                return;
            }

            await dispatch(login(email, password));
            navigation.navigate('BottomNavigation');
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
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : 'height'}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 50, left: 20 }}>
                <Ionicons name="ios-arrow-back" size={35} color={COLORS.lightGreen} />
            </TouchableOpacity>

            <View style={styles.header}>
                <View>
                    <CustomText style={styles.title}>LOGIN</CustomText>
                </View>
            </View>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flexDirection: 'column', marginHorizontal: 10, zIndex: -1 }}>
                        <View>
                            <TextInput
                                label="Email"
                                keyboardType="email-address"
                                value={email}
                                style={styles.textInput}
                                selectionColor={COLORS.leaveGreen}
                                theme={{ colors: { primary: COLORS.leaveGreen } }}
                                onChangeText={(text) => setEmail(text)}
                            />
                            <TextInput
                                label="Password"
                                keyboardType="default"
                                secureTextEntry={!showPass}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                onToggleShowPass={toggleShowPass}
                                icon={showPass ? 'eye-off' : 'eye'}
                            />
                        </View>
                        <View style={styles.group}>
                            <TouchableOpacity onPress={() => {}}>
                                <CustomText style={{ ...styles.textSignSmall, fontFamily: 'medium' }}>
                                    Forget Password ?
                                </CustomText>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={submit} style={{ marginVertical: 10, alignItems: 'center' }}>
                            <View style={styles.signIn}>
                                {loading ? (
                                    <ActivityIndicator size="small" color="#fff" />
                                ) : (
                                    <CustomText style={styles.textSign}>Login</CustomText>
                                )}
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.center}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <CustomText style={styles.registerDirection}>Don't have an account yet? Sign Up</CustomText>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginForm;
