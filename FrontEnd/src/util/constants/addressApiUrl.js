
export const getDistrictUrl = (cityId) => {
    return `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${cityId}&limit=-1`
}

export const getWardUrl = (districtId) => {
    return `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${districtId}&limit=-1`
}