export const storeRegisterValidator = (values) => {
    const errors = {};
    if (!values.shopName) {
        return 'Vui lòng Nhập tên cửa hàng!';
    }
    if (!values.wareHouseAddress) {
        return 'Vui lòng Nhập địa chỉ lấy hàng!';
    }
    if (!values.email) {
        return 'Vui lòng Nhập email!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        return 'Email không hơp lệ';
    }
    if (!values.phoneNumber) {
        return 'Vui lòng Nhập Số điện thoại!';
    } else if (!/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(values.phoneNumber)) {
        return 'Số điện thoại không hợp lệ';
    }
    return errors;
};
