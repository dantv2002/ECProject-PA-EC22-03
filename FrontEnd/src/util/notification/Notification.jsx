

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
    }
}