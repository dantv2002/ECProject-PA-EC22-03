import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';
import useLocationForm from './resource/components/useLocationForm';


const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const {
    state,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
    onSubmit
  } = useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard
  } = state;

  return (
    <>
      {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox> */}
      <Form
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        initialValues={{
            name:'123'
        }}
        disabled={componentDisabled}
      >
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
        >
          <Input type='number' />
        </Form.Item>
        <Form.Item 
            label="City/Province"
            name='cityprovince'
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item 
            label="District"
            name='district'
        >
          <Select option>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item 
            label="Ward"
            name='ward'
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
       
        <Form.Item>
          <Button>Save</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;