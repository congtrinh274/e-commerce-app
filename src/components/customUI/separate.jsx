import { StyleSheet, View } from 'react-native';
import React from 'react';

const Separate = () => {
    return <View style={styles.separator}></View>;
};

export default Separate;

const styles = StyleSheet.create({
    separator: {
        height: 4,
        backgroundColor: '#ccc',
    },
});
