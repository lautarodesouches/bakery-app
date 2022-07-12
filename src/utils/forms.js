const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
const minPasswordLength = 8

export const UPDATED_FORM = 'UPDATED_FORM'

export const validateInput = (name, value) => {
    let hasError = false
    let error = ''
    switch (name) {
        case 'email':
            if (value.trim() === '') {
                hasError = true
                error = 'El email es requerido'
            } else if (!emailRegex.test(value)) {
                hasError = true
                error = 'El email es invalido'
            }
            break;
        case 'password':
            if (value.trim() === '') {

                hasError = true
                error = 'El clave es requerido'

            } else if (value.length < minPasswordLength) {

                hasError = true
                error = `El clave tiene que tener al menos ${minPasswordLength} caracteres`

            } else if (!passwordRegex.test(value)) {

                hasError = true
                error = 'El clave es invalida'

            }
            break;
        default:
            break
    }
    return { hasError, error }
}

export const handleInputChange = (name, value, dispatch, formState) => {

    const { hasError, error } = validateInput(name, value);

    let isFormValid = true;
    for (const key in formState) {
        const item = formState[key];
        if (key === name && hasError) {
            isFormValid = false;
            break;
        } else if (key !== name && item.hasError) {
            isFormValid = false;
            break;
        }
    }

    dispatch({
        type: UPDATED_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: false,
            isFormValid,
        },
    })
}

export const handleFocusOut = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value);

  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATED_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  });
}