export const registerValidate = (values) => {
    const errors = {};
    if (!values.email) {
        return 'Email không được bỏ trống';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        return 'Email không hơp lệ';
    }
    if (!values.password) {
        return 'Mật khẩu không được bỏ trống';
    } else if (values.password.length < 6) {
        return 'Mật khẩu phải nhiều hơn hoặc bằng 6 ký tự';
    }
    if (!values.confirmPassword) {
        return 'Mật khẩu không được bỏ trống';
    } else if (values.confirmPassword !== values.password) {
        return 'Mật khẩu xác nhận không trùng khớp';
    }
    if (!values.username) {
        return 'Tên không được bỏ trống';
    } else if (values.username.length > 20) {
        return 'Tên không vượt quá 20 ký tự';
    } else if (values.username.length < 6) {
        return 'Tên phải nhiều hơn 6 ký tự';
    }

    return errors;
};
