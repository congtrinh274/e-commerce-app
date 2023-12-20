export const _pickImage = async (action) => {
    try {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
            if (status !== 'granted') {
                return alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        const type =
            action === 'library'
                ? ImagePicker.launchImageLibraryAsync({
                      mediaTypes: ImagePicker.MediaTypeOptions.All,
                      allowsEditing: true,
                      aspect: [4, 4],
                      quality: 1,
                  })
                : ImagePicker.launchCameraAsync({
                      mediaTypes: ImagePicker.MediaTypeOptions.All,
                      allowsEditing: true,
                      aspect: [4, 4],
                      quality: 1,
                  });

        let result = await type;
        return result;
    } catch (E) {
        console.log(E);
    }
};
