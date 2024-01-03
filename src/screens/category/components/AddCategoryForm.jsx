import { Platform, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../../../components/customUI/CustomInput';
import { COLORS, SIZES } from '../../../constants';
import CustomButton from '../../../components/customUI/CustomButton';
import CategoryBox from './CategoryBox';
import { createCategory } from '../../../redux/features/storeSlices';

const AddCategoryForm = () => {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const store = useSelector((state) => state.store.store);
    const dispatch = useDispatch();
    const [iconUri, setIconUri] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const pickIcon = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        if (!result.canceled) {
            const iconUri = result.assets[0].uri;
            setIconUri(iconUri);
        }
    };

    const submit = async () => {
        try {
            await dispatch(createCategory(title, description, iconUri, accessToken));
            Alert.alert('Notify', 'Add new category successfully!');
            setIconUri('');
            setTitle('');
            setDescription('');
        } catch (error) {
            if (error.message === 'Request timeout') {
                Alert.alert('Error', 'Server does not response!');
            } else {
                Alert.alert('Error', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Add new category</Text>
            <View style={styles.iconContainer}>
                {iconUri ? (
                    <TouchableOpacity style={styles.imageHolder} onPress={pickIcon}>
                        <Image source={{ uri: iconUri }} style={{ width: 120, height: 120 }} />
                    </TouchableOpacity>
                ) : (
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={styles.subTitle}>category icon</Text>
                        <TouchableOpacity style={styles.imageHolder} onPress={pickIcon}>
                            <Ionicons name="add-circle" size={48} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <View style={styles.inputContainer}>
                <CustomInput
                    value={title}
                    setValue={setTitle}
                    placeholder={'Title'}
                    placeholderTextColor={COLORS.muted}
                    radius={5}
                />
                <CustomInput
                    value={description}
                    setValue={setDescription}
                    placeholder={'Description'}
                    placeholderTextColor={COLORS.muted}
                    radius={5}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton text={'Add Category'} onPress={submit} />
            </View>
            <CategoryBox />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 24,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    headingText: {
        textAlign: 'center',
        fontFamily: 'bold',
        fontSize: SIZES.xLarge,
        color: COLORS.lightGreen,
        marginBottom: 24,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        width: 120,
        height: 120,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginBottom: 12,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    subTitle: {
        textAlign: 'center',
        fontFamily: 'medium',
        fontSize: SIZES.xSmall,
        color: COLORS.lightGreen,
        marginBottom: 12,
    },
    inputContainer: {
        width: '100%',
    },
    buttonContainer: {
        marginTop: 16,
        width: '100%',
    },
});

export default AddCategoryForm;
