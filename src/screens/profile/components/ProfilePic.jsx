import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../../constants/';
import { _pickImage } from '../../../utils/tools/tools';
import CustomText from '../../../components/customUI/CustomText';

export const ProfilePic = ({ user, imageURL, setImageURL, setFilename, setType, setUploadButton }) => {
    return (
        <View>
            <View style={{ height: 50, alignItems: 'center' }}>
                <Image
                    style={styles.profilePic}
                    source={
                        user.imageURL
                            ? {
                                  uri: user.imageURL,
                              }
                            : require('../../../../assets/Images/defaultProfile.png')
                    }
                />
                <View
                    style={{
                        width: '100%',
                        alignItems: 'flex-end',
                        transform: [{ translateY: -110 }, { translateX: -5 }],
                    }}
                >
                    <View style={styles.cameraContainer}>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome name="camera" size={15} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <CustomText style={styles.userName}>{user.username}</CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    profilePic: {
        resizeMode: Platform.OS === 'android' ? 'cover' : 'contain',
        width: 120,
        height: 120,
        borderRadius: 60,
        transform: [{ translateY: -70 }],
        borderWidth: 3,
        borderColor: '#fff',
    },
    cameraContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.leaveGreen,
    },
    userName: {
        fontSize: 20,
        marginTop: 10,
        color: COLORS.leaveGreen,
        textAlign: 'center',
    },
});
