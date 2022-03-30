import React from 'react';
import { Form } from 'antd';
import './styles.scss';

const FormItem = ({ label, children, ...props }) => (
  <Form.Item className="wrapper-form-item" label={label} {...props}>
    {children}
  </Form.Item>
);

export default FormItem;
