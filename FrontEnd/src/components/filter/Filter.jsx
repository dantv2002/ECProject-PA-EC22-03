import React from 'react'
import { Slider } from 'antd';

export const Filter = () => {
    return (
        <div className="filter">
            <div className="filter__product">
                <h2>Product</h2>
                <ul>
                    <li className="active">All</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                </ul>
            </div>
            <div className="filter__producer">
                <h2>Producer</h2>
                <ul>
                    <li className="active">Lenovo</li>
                    <li>Lenovo</li>
                    <li>Lenovo</li>
                    <li>Lenovo</li>
                    <li>Lenovo</li>
                    <li>Lenovo</li>
                    <li>Lenovo</li>
                </ul>
            </div>
            <div className="filter__price">
                <h2>Price</h2>
                <div className="my-flex">
                    <ul>
                        <li className="active">Ascending</li>
                        <li>Decrease</li>

                    </ul>
                    <Slider
                        range={{
                            draggableTrack: true,
                        }}
                        defaultValue={[20, 50]}
                    />
                </div>
            </div>
        </div>
    )
}
