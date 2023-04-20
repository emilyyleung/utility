import { useRef, useEffect } from 'react';

export default function TextInput({
  label,
  name,
  type,
  id,
  placeholder,
  value, // string
  setValue,
  maxLength = '524288',
  focus = false,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const inputProps = {
    label,
    name,
    type,
    id,
    placeholder,
    value,
    maxLength,
  };
  return (
    <div>
      <label
        htmlFor={name}
        className="block pb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        ref={inputRef}
        {...inputProps}
        onChange={handleChange}
        className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:text-gray-200 dark:bg-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        onFocus={handleFocus}
      />
    </div>
  );
}
