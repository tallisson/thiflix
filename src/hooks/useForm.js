import { useState } from 'react';

function useForm(catInicial) {
  const [categoria, setCategoria] = useState(catInicial);

  function setValue(key, value) {
    setCategoria({
      ...categoria,
      [key]: value
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
  }

  function clearForm() {
    setCategoria(catInicial);
  }

  return {
    categoria,
    handleChange,
    clearForm
  }
}

export default useForm;