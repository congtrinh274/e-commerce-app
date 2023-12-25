import React from 'react';
import { StyleSheet, TextInput, View, Platform } from 'react-native';
import { COLORS } from '../../constants';

const CustomInput = ({
    value,
    setValue,
    placeholder,
    secureTextEntry,
    placeholderTextColor,
    onFocus,
    radius,
    width = '100%',
    keyboardType,
    maxLength,
}) => {
    return (
        <View style={{ width: width }}>
            <TextInput
                placeholder={placeholder}
                onChangeText={setValue}
                value={value}
                secureTextEntry={secureTextEntry}
                style={styles.CustomInput}
                placeholderTextColor={placeholderTextColor}
                onFocus={onFocus}
                borderRadius={radius}
                maxLength={maxLength}
                keyboardType={keyboardType}
            />
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    CustomInput: {
        height: 46,
        marginBottom: 10,
        marginTop: 10,
        width: '100%',
        padding: 5,
        backgroundColor: COLORS.white,
        elevation: 5,
        paddingHorizontal: 20,
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
});
