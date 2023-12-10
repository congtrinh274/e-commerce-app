export const loginValidate = (values) => {
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
    return errors;
};
