import React from "react";

function InputLogin({ titleLabel, icon, ...props }) {
  return (
    <div className="field">
      <p className="field__title">{titleLabel}:</p>
      {icon}
      <input
        className="field__input"
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        pattern={pattern}
        minLength={minlength}
        maxLength={maxlength}
        title={title}
        required
      />
    </div>
  );
}

export default InputLogin;
