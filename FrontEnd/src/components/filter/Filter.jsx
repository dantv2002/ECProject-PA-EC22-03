import React, { useEffect } from 'react'
import { Slider, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {

    changeSearchType,
    changeSearchProducer,
    changeSearchPrice,
    changeSearchNecess,
    changeMidPrice,
    changeMaxPrice,
    getProducerList,
    getCategoryForFilter,
    cleanProducerList,
    fullSearch,
    getCategory
} from '../../redux/filter/filterSlice'
import {
    SearchOutlined
} from '@ant-design/icons';






export const Filter = () => {
    const {
        typeList,
        producerList,
        priceList,
        searchMinPrice,
        searchMidPrice,
        NecessitiesList,
        searchNecess,
        searchType,
        searchProducer,
        searchPrice,
        searchMaxPrice,
        searchWord
    } = useSelector((store) => store.filter)
    const { categoryList } = useSelector((store) => store.home)
    const dispatch = useDispatch()
    const renderProduceType = () => {
        return typeList.map((item) => {
            return <li
                key={item.typeName}
                className={item.displayStatus}
                onClick={() => {
                    dispatch(changeSearchType(item.typeName))
                    if (item.typeName !== "All")
                        dispatch(getProducerList(item.typeName))
                    else dispatch(cleanProducerList())
                }}
            >
                {item.typeName}
            </li>
        })
    }

    const renderProducer = () => {
        return producerList.map((item, index) => {
            return <li
                key={index}
                className={item.displayStatus}
                onClick={() => dispatch(changeSearchProducer(item.producerName))}
            >
                {item.producerName}
            </li>
        })
    }

    const renderPrice = () => {
        return priceList.map((item, index) => {
            return <li
                key={index}
                className={item.displayStatus}
                onClick={() => dispatch(changeSearchPrice(item.priceName))}
            >
                {item.priceName}
            </li>
        })
    }

    const renderNecess = () => {
        return NecessitiesList.map((item, index) => {
            return <li
                key={index}
                className={item.displayStatus}
                onClick={() => dispatch(changeSearchNecess(item.necessName))}
            >
                {item.necessName}
            </li>
        })
    }



    useEffect(() => {
        dispatch(getProducerList(searchType))
      
    }, [])

    return (
        <div className="filter">
            <div className="filter__product">
                <h2>Product</h2>
                <ul>
                    {renderProduceType()}
                </ul>
            </div>
            <div className="filter__producer">
                <h2>Producer</h2>
                <ul>
                    {renderProducer()}
                </ul>
            </div>
            <div className="filter__price" style={{ display: searchNecess == "Suggestion" ? "none" : "block" }}>
                <h2>Price</h2>
                <div className="my-flex">
                    <ul>
                        {renderPrice()}
                    </ul>
                    <div className="choose-price">
                        <InputNumber
                            style={{ width: "100px" }}
                            min={searchMinPrice}
                            onChange={(value) => dispatch(changeMidPrice(value))}
                            defaultValue={0}
                        />
                        <span className="middle-line">-</span>
                        <InputNumber
                            style={{ width: "110px" }}
                            min={searchMidPrice + 1}
                            onChange={(value) => dispatch(changeMaxPrice(value))}
                            defaultValue={1000000000}
                        />
                    </div>
                </div>
            </div>

            <div className="filter__producer">
                <h2>Necessities</h2>
                <ul>
                    {renderNecess()}
                </ul>

            </div>
            <button
                className="search-btn"
                onClick={() => {
                    const newObj = {
                        nameCategory: searchType.toLowerCase(),
                        nameManufacturer: searchProducer === "All" ? "all" : searchProducer,
                        statusProduct: searchNecess.toLowerCase(),
                        increase: searchPrice === "" ? "" : searchPrice === "Ascending" ? true : false,
                        maxPrice: searchMaxPrice,
                        minPrice: searchMidPrice,
                        keyValue: searchWord
                    }
                    dispatch(fullSearch(newObj))
                }}
            >
                <SearchOutlined />Search
            </button>
        </div>
    )
}
