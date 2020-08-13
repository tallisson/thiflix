import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerField = styled.div`
  padding: 10px 0;
`;

function FormField({ label, name, type, value, onChange }) {
  const fieldId = `id_${name}`
  return (
    <ContainerField>
      <label htmlFor={fieldId}>{`${label}: `}</label>
      <input
        id={fieldId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </ContainerField>
  )
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default FormField;