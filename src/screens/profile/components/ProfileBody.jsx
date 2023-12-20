import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../../../components/customUI/CustomText';
import UploadButton from './UploadButton';
import Detail from './Detail';
import { EditButton } from './EditButton';

export const ProfileBody = ({ user, uploadButton, setUploadButton, setImageURL, UploadProfile }) => {
    return (
        <View style={styles.footer}>
            <View style={styles.titleContainer}>
                <CustomText style={styles.title}>Thông tin cá nhân</CustomText>
                <EditButton />
            </View>
            <Detail icon="person" content={user.username} />
            <Detail icon="email" content={user.email} />
            <Detail icon="phone" content={user.phoneNumber ? user.phoneNumber : 'Not added yet'} />
            <Detail icon="location-on" content={user.address.length === 0 ? 'Not added yet' : user.address} />
            <UploadButton
                uploadButton={uploadButton}
                setUploadButton={setUploadButton}
                setImageURL={setImageURL}
                UploadProfile={UploadProfile}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    titleContainer: {
        height: 30,
    },

    title: {
        fontWeight: '600',
        textTransform: 'uppercase',
    },
});
