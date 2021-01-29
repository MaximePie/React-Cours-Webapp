import React from 'react';
import classnames from "classnames";

export default function Button(props) {

  const { isDisabled, onClick, text, className, isInactive } = props;

  const buttonClasses = classnames(
    "Button",
    {
      [className]: className !== undefined,
      'Button--inactive': isInactive,
    }
  );

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
