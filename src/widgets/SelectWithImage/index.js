import './styles.scss';
import React from 'react';
import { Input, Select } from 'antd';

const { Option } = Select;

const SelectWithImage = ({ dataSelect, title, defaultValue, ...props }) => (
  <div className="box-form-control" {...props}>
    <p>{title}</p>
    <Input.Group compact>
      <Select defaultValue={defaultValue}>
        {dataSelect.map((item, index) => (
          <Option value={item.value} key={index}>
            <span>
              <img src={item.image} alt={item.label} />
            </span>{' '}
            {item.label}
          </Option>
        ))}
      </Select>
    </Input.Group>
  </div>
);

export default SelectWithImage;
