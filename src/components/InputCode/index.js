import { cloneDeep } from 'lodash';
import React from 'react';
import './styles.scss';

const defaultField = 6;
export const useSSNFields = ({ initialField, onChange }) => {
  const [ssnValues, setValue] = React.useState({
    ssn1: '',
    ssn2: '',
    ssn3: '',
    ssn4: '',
    ssn5: '',
    ssn6: '',
  });

  return {
    ssnValues,
    handleChange: (e) => {
      const { value, name } = e.target;
      const [, fieldIndex] = name.split('-');
      if (parseInt(fieldIndex, 10) < initialField || defaultField) {
        const nextSibling = document.querySelector(`input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`);
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
      setValue((prev) => {
        if (onChange) onChange(cloneDeep(prev));
        return {
          ...prev,
          [`ssn${fieldIndex}`]: value.charAt(value.length - 1),
        };
      });
    },
  };
};

const InputCode = ({ initialField, isError, ssnValues, handleChange }) => (
  <div className="input-code-container">
    {new Array(initialField).fill(undefined).map((_, index) => {
      const value = ssnValues[`ssn${index + 1}`];
      return (
        <input
          key={`authen-${index}`}
          className={isError ? 'error' : ''}
          type="text"
          name={`ssn-${index + 1}`}
          value={value}
          onChange={handleChange}
        />
      );
    })}
  </div>
);

export default React.memo(InputCode);
