import React from 'react';

export default function Input({ modifiers, placeholder }) {
  const defaultInput =
    'w-30 h-10 p-2 rounded-full font-bold placeholder-orange-primary';

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${defaultInput} ${modifiers}`}
    />
  );
}
