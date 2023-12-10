import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from '../../../constants';
import CustomText from '../../../components/customUI/CustomText';

export default renderField = ({
    label,
    keyboardType,
    secureTextEntry,
    icon,
    showPass,
    passIcon,
    setShowPass,
    meta: { touched, error, warning },
    input: { onChange, ...restInput },
}) => {
    return (
        <View>
            <View>
                <TextInput
                    placeholder={label}
                    autoCapitalize="none"
                    mode="outlined"
                    clearButtonMode={passIcon ? 'never' : 'always'}
                    selectionColor={COLORS.leaveGreen}
                    theme={{ colors: { primary: COLORS.leaveGreen } }}
                    left={
                        <TextInput.Icon
                            name={icon}
                            size={24}
                            color={COLORS.lighterGreen}
                            style={{ paddingRight: 10 }}
                        />
                    }
                    style={{
                        fontSize: 14,
                        backgroundColor: 'transparent',
                        marginVertical: 5,
                        // paddingHorizontal: 5,
                    }}
                    keyboardType={keyboardType}
                    onChangeText={onChange}
                    secureTextEntry={secureTextEntry}
                    {...restInput}
                />
                {passIcon ? (
                    <MaterialCommunityIcons
                        name={showPass ? 'eye' : 'eye-off'}
                        size={24}
                        color={COLORS.lighterGreen}
                        onPress={() => {
                            setShowPass((prev) => !prev);
                        }}
                        style={{
                            position: 'absolute',
                            top: '40%',
                            right: 10,
                            zIndex: 100,
                        }}
                    />
                ) : (
                    <></>
                )}
            </View>
            {touched && error && (
                <CustomText style={{ color: 'red', marginHorizontal: 15, marginTop: 5 }}>{error}</CustomText>
            )}
        </View>
    );
};
