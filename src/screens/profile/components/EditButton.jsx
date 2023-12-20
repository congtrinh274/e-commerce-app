import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/';
import { FontAwesome5 } from '@expo/vector-icons';
export const EditButton = () => {
    return (
        <View style={styles.editButton}>
            <TouchableOpacity>
                <FontAwesome5 name="user-edit" size={20} color={COLORS.leaveGreen} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    editButton: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
});
