import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber
} from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import { addNewAddressDetail, changeAddressDetail, getAddressList, getdistrictList, getWardList } from '../../redux/paymentAddress/paymentAddressSlice';
import { useEffect } from 'react';
import { poppupNoti } from '../../util/notification/Notification';




const FormDisabledDemo = ({componentDisabled, setComponentDisabled}) => {
  const dispatch = useDispatch()
  const { districtList,wardList, chosenAddress, addingMoreAddress } = useSelector((store) => store.paymentAddress);

  const [form] = Form.useForm();

  const [addressInfo, setAddressInfo] = useState({
    city: {name: "", code:0},
    district: {name: "", code:0},
    ward: {name: "", code:0}
  })

  const onFormLayoutChange = ({ disabled }) => {
 
  };

  const onCityChange = async (value) => {
    await dispatch(getdistrictList(value))
    setAddressInfo(currentValue => {
      return {
        ...currentValue,
        city: {name: "TP Hồ Chí Minh", code: value}
      }
    })
  }

  const onDistrictChange = async (value,option) => {
    await dispatch(getWardList(value))
    await setAddressInfo(currentValue => {
      return {
        ...currentValue,
        district: {name: option.label, code: parseInt(option.value)}
      }
    })
    form.setFieldValue('ward',"")
  }

  const onWardChange = async (value,option) => {
    setAddressInfo(currentValue => {
      return {
        ...currentValue,
        ward: {name: option.label, code: parseInt(option.value)}
      }
    })
  }
  
  const onSubmit = async (formValue) => {
    const newFormValue = {
      acccountName: sessionStorage.getItem('accountName'),
      phone: `0${formValue.phonenumber.toString()}`,
      wardId: addressInfo.ward.code,
      addressDetails: formValue.addrDetail,
      fullName: formValue.name,
      status: true
    }

    addingMoreAddress ? await dispatch(addNewAddressDetail(newFormValue)) : await dispatch(changeAddressDetail(newFormValue))
    await dispatch(getAddressList(sessionStorage.getItem('accountName')))
    setComponentDisabled(true)
  }

  useEffect(() => {

    form.setFieldsValue({
      id: chosenAddress.id,
      name: chosenAddress.name,
      phonenumber: parseInt(chosenAddress.phonenumber),
      cityprovince: chosenAddress.cityprovince.name,
      district: chosenAddress.district.name,
      ward: chosenAddress.ward.name,
      addrDetail: chosenAddress.addrDetail,
    })
    
    setAddressInfo({
      city: {name: chosenAddress.cityprovince.name, code: chosenAddress.cityprovince.code},
      district: {name: chosenAddress.district.name, code: chosenAddress.district.code},
      ward: {name: chosenAddress.ward.name, code: chosenAddress.ward.code}
    })
    // if(chosenAddress.cityprovince.code !== 0) dispatch(getdistrictList(chosenAddress.cityprovince.code))
    // if(chosenAddress.district.name !== "") dispatch(getWardList(chosenAddress.district.code)) 
   
  },[chosenAddress.id])

  return (
    <>
      
      <Form
        labelCol={{
          span: 3,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
        form={form}
        onFinish={onSubmit}
      >
        <Form.Item 
            name='id'
            label="Id" 
            style={{display:'none'}}
        >
          <Input />
        </Form.Item >
        <Form.Item 
            name='name'
            label="Name" 
            rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
            ]}
        >
          <Input />
        </Form.Item >
        <Form.Item 
            label="Phone"
            name='phonenumber'
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
          ]}
        >
          <InputNumber type='number' style={{width: '100%'}} min={0} controls={false}/>
        </Form.Item>
        <Form.Item 
            label="City/Province"
            name='cityprovince'
            rules={[
              {
                required: true,
                message: 'Please Choose the City/Province!',
              },
          ]}
        >
          <Select onChange={onCityChange}>
            <Select.Option value={79}>TP Hồ Chí Minh</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item 
            label="District"
            name='district'
            rules={[
              {
                required: true,
                message: 'Please Choose the District',
              },
          ]}
        >
          <Select onChange={onDistrictChange} options={districtList} disabled={addressInfo.city.name === "" || componentDisabled ? true : false}>
          </Select>
        </Form.Item>
        <Form.Item 
            label="Ward"
            name='ward'
            rules={[
              {
                required: true,
                message: 'Please Choose the Ward',
              },
          ]}
        >
          <Select onChange={onWardChange} options={wardList} disabled={addressInfo.district.name === "" || componentDisabled ? true : false}>
          </Select>
        </Form.Item>
        <Form.Item 
            name='addrDetail'
            label="Address Detail" 
            rules={[
                {
                  required: true,
                  message: 'Please input your address detail!',
                },
            ]}
        >
          <Input disabled={addressInfo.ward.name === "" || componentDisabled ? true : false} />
        </Form.Item >
       
        <Form.Item style={{display:'flex', justifyContent: 'center'}}>
          <button type="submit" disabled={componentDisabled ? true : false} className="address-form-saving">Save</button>
        </Form.Item>
      </Form>
    </>
  );
};
export default  FormDisabledDemo ;