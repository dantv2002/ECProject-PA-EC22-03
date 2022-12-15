const mainDomain = 'http://localhost:8080'


export const categoryUrl = () => {
    return  `${mainDomain}/api/categories`
}

export const auctioningUrl = (amount) => {
    return  `${mainDomain}/api/auctions/auctionings?amount=${amount}  `
}

export const productsUrl = (pageNumber,amount) => {
    return  `${mainDomain}/api/products?pagenumber=${pageNumber}&amount=${amount} `
    
}
