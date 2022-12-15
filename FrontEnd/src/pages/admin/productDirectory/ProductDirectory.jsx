import { Button, Col, Input, Row, Space, Table } from 'antd'
import React, { useRef, useState } from 'react'
import { ProducerTable } from '../../../components/admin/producerTable/ProducerTable'
import { ProductTypeTable } from '../../../components/admin/productTypeTable/ProductTypeTable'



export const ProductDirectory = () => {
  return (
    <div className="directory-container">
        <div>
            <Row gutter={48}>
                <Col span={12}>
                    <ProductTypeTable/>

                </Col>
                <Col span={12}>
                    <ProducerTable/>
                </Col>
            </Row>
        </div>
    </div>
  )
}
