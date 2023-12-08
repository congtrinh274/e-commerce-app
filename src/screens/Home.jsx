import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import styles from './home.styles';

export class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.appBarWrapper}>
                    <View style={styles.appBar}>
                        <Ionicons name="location-outline" size={24} />
                        <Text style={styles.location}>Danang Vietnam</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;
