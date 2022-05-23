import React from "react";

const typesValidation = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ,
        message: 'Preencha um email válido'
    },
    number: {
        regex: /^\d+$/,
        message: 'Preencha apenas com números'
    },
}

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
      if(type === false) return true; //valida se o valor existe ou não
    if(value.length === 0) { //valida se o valor é vazio
        setError('Preencha um valor')
        return false;
    } else if (typesValidation[type] && !typesValidation[type].regex.test(value)) { //verifica se o valor é do tipo esperado
        setError(typesValidation[type].message)
        return false;
    } else {
        setError(null)
        return true;
    }
  }

  function onChange({target}) {
      if(error) validate(target.value);
      setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
