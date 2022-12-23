

import { message} from "antd";

const notiBody = (text, type) => {
    message[type](text)
}

export const poppupNoti = {

    paymentFail: () => {
        notiBody("Payment fail, Please try again","error")
    },

    changeAddressSuccess: () => {
        notiBody("Your address detail have been change","success")
    },

    addAddressSuccess: () => {
        notiBody("A new address have been added","success")
    },

    deleteAddressSuccess: () => {
        notiBody("Delete address success","success")
    },

    loginSuccess: () => {
        notiBody("Login Success", "success")
    },

    loginFail: () => {
        notiBody("Username or Password is incorrect","error")
    },

    alreadyLoggedIn: () => {
        notiBody("You have already logged in","warning")
    },

    logoutSuccess: () => {
        notiBody("Logout Success", "success")
    },

    passwordIncorrect: () => {
        notiBody("Password and Retype Password are not the same", "error")
    },
    
    userNameAlrearyExists: () => {
        notiBody("User Name Alreary Exists","error")
    },

    registerSuccess: () => {
        notiBody("Register Success","success")
    },

    adminLoginFail: () => {
        notiBody("You are not the Admin","fail")
    },
    adminLoginsuccess: () => {
        notiBody("Welcom Admin","success")
    },
}