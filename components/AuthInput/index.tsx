import React, { useState, ChangeEvent } from 'react';
import AuthError from '../AuthError';

import styles from './AuthInput.module.scss';

/**
 * -- TAuthInput --
 * placeholder: тестовая строка внутри input 
 * name: название input для динамиряеского получения ключа и значения
 * onChange: событие, принимает в сетя текст 
 * value: текущее значение input для создания контролируемого input
 * type: тип для input
 */

type TAuthInput = {
  placeholder: string
  name: string
  onChange?: (value: ChangeEvent<HTMLInputElement>) => any
  value?: string
  type?: "text" | "password"
  error?: string
}


function AuthInput({ placeholder, name, onChange, value, type = 'text', error }: TAuthInput) {
  const [emptyValue, setEmptyValue] = useState<boolean>(false);

  function onEmptyValue({ currentTarget }: ChangeEvent<HTMLInputElement>): void {
    const value = currentTarget.value;

    // Неявное преобразование к boolean
    setEmptyValue(!!value);
  }

  return (
    <label className={styles.label}>
      <input
        type={type}
        className={styles.input}
        name={name}
        onInput={onEmptyValue}
        onChange={onChange}
        value={value}
      />
      <span className={`${styles.span} ${emptyValue && styles.active}`}>{placeholder}</span>
      {error && <AuthError>{error}</AuthError>}
    </label>
  )
}

export default AuthInput;