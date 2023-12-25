import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Alert, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Ionicons } from '@expo/vector-icons';
import { ProfilePic } from './components';
import OptionList from '../../components/customUI/OptionList';
import { useNavigation } from '@react-navigation/native';
import { getStore } from '../../redux/features/storeSlices';

const { width, height } = Dimensions.get('window');

const Profile = () => {
    const user = useSelector((state) => state.auth.user);
    const accessToken = useSelector((state) => state.auth.accessToken);
    const loading = useSelector((state) => state.auth.isLoading);
    const [imageURL, setImageURL] = useState('');
    const [filename, setFilename] = useState('');
    const [type, setType] = useState('');
    const [uploadButton, setUploadButton] = useState(true);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const getHomeStoreHandler = async (userId) => {
        try {
            await dispatch(getStore(userId, accessToken));
            navigation.navigate('HomeStore');
        } catch (error) {
            // if (error.message === 'Request timeout') {
            //     Alert.alert('Error', 'Server does not response!');
            // } else {
            //     Alert.alert('Error', error);
            // }
            console.log(error);
        }
    };

    return (
        <ActionSheetProvider>
            <View style={styles.container}>
                <View style={styles.header}></View>
                {loading ? <Loader /> : <></>}
                <View style={styles.profileContainer}>
                    <View style={styles.profileBox}>
                        <ProfilePic
                            user={user}
                            imageURL={imageURL}
                            setImageURL={setImageURL}
                            setType={setType}
                            setFilename={setFilename}
                            setUploadButton={setUploadButton}
                        />
                        <View style={styles.OptionsContainer}>
                            <OptionList text={'My Account'} Icon={Ionicons} iconName={'person'} onPress={() => {}} />
                            <OptionList text={'Favorites'} Icon={Ionicons} iconName={'heart'} onPress={() => {}} />
                            <OptionList text={'My Orders'} Icon={Ionicons} iconName={'cart'} onPress={() => {}} />
                            <OptionList
                                text={user.store ? 'Your Store' : 'Register to open your store'}
                                Icon={Ionicons}
                                iconName={'megaphone-sharp'}
                                onPress={() =>
                                    user.store ? getHomeStoreHandler(user._id) : navigation.navigate('StoreRegister')
                                }
                            />
                            <OptionList text={'Logout'} Icon={Ionicons} iconName={'log-out'} onPress={async () => {}} />
                        </View>
                    </View>
                </View>
            </View>
        </ActionSheetProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width,
        flexDirection: 'row',
        height: 0.15 * height,
        justifyContent: 'center',
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileBox: {
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,
        width,
        alignItems: 'center',
    },
    OptionsContainer: {
        padding: 12,
        marginTop: 20,
        width: '100%',
    },
});

export default Profile;
