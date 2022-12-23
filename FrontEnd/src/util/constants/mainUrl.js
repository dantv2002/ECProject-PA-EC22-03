export const mainDomain = 'http://localhost:8090'

//////////////////////////////////////////////
export const categoryUrl = () => {
    return  `${mainDomain}/api/categories`
}

export const auctioningUrl = (amount) => {
    return  `${mainDomain}/api/auctions/auctionings?amount=${amount}  `
}

export const productsUrl = (pageNumber,amount) => {
    return  `${mainDomain}/api/products?pagenumber=${pageNumber}&amount=${amount}`
    
}
export const getSellerProductUrl = ({sellerName,categoryName}) => {
    return  `${mainDomain}/api/userstore/products?categoryName=${categoryName}&accountName=${sellerName}`
    
}

///////////////////////////////////////////////
export const producerUrl = (itemType) => {
    return `${mainDomain}/api/categories/manufacturers?name=${itemType}`
}

export const wordSearchUrl = (word) => {
    return `${mainDomain}/api/products/search/?keyValue=${word}`
}

export const fullSearchUrl = () => {
    return `${mainDomain}/api/products/filter`
}

////////////////////////////////////////////////
export const productDetailUrl = (productId) => {
    return `${mainDomain}/api/products/displayDetail?id=${productId}`
}

export const auctionDetailUrl = (auctionid,accountName) => {
    return `${mainDomain}/api/auctions/infoauctioning?id=${auctionid}&accountName=${accountName}`
}

////////////////////////////////////////////////
export const userLoginUrl = () => {
    return `${mainDomain}/login`
}

export const userRegisterUrl = () => {
    return `${mainDomain}/register`
}

export const userInfoUrl = () => {
    return `${mainDomain}/api/auth/user/users/info`
}
export const updateUserInfoUrl = () => {
    return `${mainDomain}/api/auth/user/users/info`
}

export const userNotiUrl = () => {
    return `${mainDomain}/api/auth/user/users/notification`
}

export const deleteNotiUrl = (notiid) => {
    return `${mainDomain}/api/auth/user/users/notification/delete?id=${notiid}`
}

export const getUserOrderUrl = () => {
    return `${mainDomain}/api/auth/user/users/orders`
}

export const getUserOrderInfoUrl = (orderId) => {
    return `${mainDomain}/api/auth/user/users/detailorders?id=${orderId}`
}

/////////////////////////////////////////////////
export const cartItemsUrl = (accountName) => {
    return `${mainDomain}/api/auth/user/cart?accountName=${accountName}`
}

/////////////////////////////////////////////
export const getDistrictUrl = () => {
    return `${mainDomain}/api/auth/user/shippingaddress/district`
}

export const getWardUrl = (districtId) => {
    return `${mainDomain}/api/auth/user/shippingaddress/ward?districtId=${districtId}`
}

export const getAddressListUrl = (accountName) => {
    return `${mainDomain}/api/auth/user/shippingaddress?accountName=${accountName}`
}

export const addAddressUrl = () => {
    return `${mainDomain}/api/auth/user/shippingaddress`
}

export const deleteAddressUrl = (addressId) => {
    return `${mainDomain}/api/auth/user/shippingaddress?id=${addressId}`
}

export const updateAddressUrl = (addressId) => {
    return `${mainDomain}/api/auth/user/shippingaddress?id=${addressId}`
}

//////////////////////////////////////////////////////
export const totalRevenue = ({month,year}) => {
    return `${mainDomain}/api/auth/admin/a-month-stactistics?month=${month}&year=${year}`
}

export const totalUserUrl = () => {
    return `${mainDomain}/api/auth/admin/count-user`
}

export const allUserUrl = () => {
    return `${mainDomain}/api/auth/admin/get-all-user`
}

export const changeStatusUserUrl = () => {
    return `${mainDomain}/api/auth/admin/change-user-status`
}

export const updateCategoryUrl = () => {
    return `${mainDomain}/api/auth/admin/add-or-update-category`
}

export const getTotalOrderInCurrentMonthUrl = () => {
    return `${mainDomain}/api/auth/admin/count-curent-month-orders`
}

export const getTotalOrderIn7MonthUrl = ({curentMonth,currentYear}) => {
    return `${mainDomain}/api/auth/admin/count-last-7months-orders?month=${curentMonth}&year=${currentYear}`
}
//////////////////////////////////////////////////////////
export const getAllProductUrl = () => {
    return `${mainDomain}/api/auth/user/userstore/products?categoryName=all`
}
export const getAllAuctionUrl = () => {
    return `${mainDomain}/api/auth/user/userstore/auctions`
}

export const getAllProductByCategoryUrl = (getCategoryname) => {
    return `${mainDomain}/api/auth/user/userstore/products?categoryName=${getCategoryname}`
}

export const getShippingFeeUrl = () => {
    return `${mainDomain}/api/auth/admin/get-all-shipping-fee`
}

export const getShippingFeeListUrl = () => {
    return `${mainDomain}/api/auth/user/payment`
}

export const changeDolaUrl = (amount) => {
    return `${mainDomain}/api/payment/currencyexchange?VND=${amount}`
}

export const createOrderUrl = () => {
    return `${mainDomain}/api/auth/user/payment/orders`
}