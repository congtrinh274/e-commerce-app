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
import { storeRegisterValidator as validate } from '../../../utils/validator/storeRegisterValidator';
import { registerStore } from '../../../redux/features/storeSlices';
import styles from './storeRegisterForm.styles';

const StoreRegisterForm = () => {
    const user = useSelector((state) => state.auth.user);
    const accessToken = useSelector((state) => state.auth.accessToken);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [shopName, setShopName] = useState(`Shop của ${user.username}`);
    const [bio, setBio] = useState('');
    const [wareHouseAddress, setWareHouseAddress] = useState(user.address || '536 Điện Biên Phủ');
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '0799164654');

    const dispatch = useDispatch();

    const submit = async () => {
        try {
            setLoading(true);
            const formErrors = validate({ shopName, wareHouseAddress, email, phoneNumber });
            if (Object.keys(formErrors).length > 0) {
                Alert.alert('Lỗi', formErrors);
                setLoading(false);
                return;
            }

            await dispatch(registerStore(shopName, bio, phoneNumber, wareHouseAddress, accessToken));
            navigation.navigate('HomeStore');
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
                    <CustomText style={styles.title}>Open your store</CustomText>
                </View>
            </View>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flexDirection: 'column', marginHorizontal: 10, zIndex: -1 }}>
                        <View>
                            <TextInput
                                label="Shop name"
                                keyboardType="default"
                                value={shopName}
                                style={styles.textInput}
                                selectionColor={COLORS.leaveGreen}
                                theme={{ colors: { primary: COLORS.leaveGreen } }}
                                onChangeText={(text) => setShopName(text)}
                            />
                            <TextInput
                                label="Bio"
                                keyboardType="default"
                                value={bio}
                                style={styles.textInput}
                                selectionColor={COLORS.leaveGreen}
                                theme={{ colors: { primary: COLORS.leaveGreen } }}
                                onChangeText={(text) => setBio(text)}
                            />
                            <TextInput
                                label="Warehouse address"
                                keyboardType="default"
                                value={wareHouseAddress}
                                style={styles.textInput}
                                selectionColor={COLORS.leaveGreen}
                                theme={{ colors: { primary: COLORS.leaveGreen } }}
                                onChangeText={(text) => setWareHouseAddress(text)}
                            />
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
                                label="Phone number"
                                keyboardType="default"
                                value={phoneNumber}
                                style={styles.textInput}
                                selectionColor={COLORS.leaveGreen}
                                theme={{ colors: { primary: COLORS.leaveGreen } }}
                                onChangeText={(text) => setPhoneNumber(text)}
                            />
                        </View>
                        <TouchableOpacity onPress={submit} style={{ marginVertical: 10, alignItems: 'center' }}>
                            <View style={styles.Register}>
                                {loading ? (
                                    <ActivityIndicator size="small" color="#fff" />
                                ) : (
                                    <CustomText style={styles.textSign}>Register</CustomText>
                                )}
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default StoreRegisterForm;
