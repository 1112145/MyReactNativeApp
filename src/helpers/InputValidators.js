import v from 'validator';

const error_msg = {
    empty_pass: 'Password cannot be blank!',
    empty_username: 'User name cannot be blank!',
    password_not_enough: 'Password must be at least 8 characters!',
    password_mismatch: 'Password mismatch!',
    empty_email: 'Email cannot be blank',
    invalid_email: 'Invalid email'
}

export const validateUserName = function(userName){
    if(v.isEmpty(userName)){
        return error_msg.empty_email
    }
    return true;
}

export const validatePassword = function(password){
    if(v.isEmpty(password)){
        return error_msg.empty_pass;
    }
    if(password.length < 8){
        return error_msg.password_not_enough;
    }
    return true;
}

export const validateConfirmPassword = function(password, confirmPassword){
    if(password !== confirmPassword){
        return error_msg.password_mismatch;
    }
    return true;
}

export const validateEmail = function(email) {
    if(v.isEmpty(email)) {
        return error_msg.empty_email
    }
    if(!v.isEmail(email)) {
        return error_msg.invalid_email
    };
    return true;
}