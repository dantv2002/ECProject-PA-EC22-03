const mainDomain = 'http://localhost:8080'

//////////////////////////////////////////////
export const categoryUrl = () => {
    return  `${mainDomain}/api/categories`
}

export const auctioningUrl = (amount) => {
    return  `${mainDomain}/api/auctions/auctionings?amount=${amount}  `
}

export const productsUrl = (pageNumber,amount) => {
    return  `${mainDomain}/api/products?pagenumber=${pageNumber}&amount=${amount} `
    
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