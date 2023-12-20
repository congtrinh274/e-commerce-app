import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';
import { Button } from 'react-native-paper';

const UploadButton = ({ uploadButton, setUploadButton, setImageURL, UploadProfile }) => {
    return (
        <View style={styles.button}>
            <Button
                icon="camera"
                mode="contained"
                onPress={UploadProfile}
                disabled={uploadButton}
                style={{
                    height: 50,
                    justifyContent: 'center',
                    backgroundColor: COLORS.leaveGreen,
                    color: '#fff',
                }}
            >
                Update Profile Picture
            </Button>
            {!uploadButton ? (
                <Button
                    mode="contained"
                    onPress={() => {
                        setUploadButton(true), setImageURL('');
                    }}
                    disabled={uploadButton}
                    style={{
                        height: 50,
                        marginTop: 10,
                        justifyContent: 'center',
                        backgroundColor: COLORS.leaveGreen,
                    }}
                >
                    Cancel
                </Button>
            ) : (
                <></>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
    },
});

export default UploadButton;
