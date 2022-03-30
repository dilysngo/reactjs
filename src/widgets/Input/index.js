import React from 'react';
import './styles.scss';

const Input = ({ size, suffix, prefix, ...props }) => (
  <div className="wrapper-input" data-size={size || 'larger'}>
    {suffix || ''}
    <input {...props} />
    {prefix || ''}
  </div>
);

export default Input;
