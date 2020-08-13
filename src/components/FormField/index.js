import React from 'react';
import styled from 'styled-components';

const ContainerField = styled.div`
  padding: 10px 0;
`;

function FormField({ label, name, type, value, onChange }) {
  return (
    <ContainerField>
      <label>{`${label}: `}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </ContainerField>
  )
}

export default FormField;