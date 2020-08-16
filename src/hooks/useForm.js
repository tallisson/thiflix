import { useState } from 'react';

function useForm(valorInicial) {
  const [data, setData] = useState(valorInicial);

  function setValue(key, value) {
    setData({
      ...data,
      [key]: value
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
  }

  function clearForm() {
    setData(valorInicial);
  }

  return {
    data,
    handleChange,
    clearForm
  }
}

export default useForm;