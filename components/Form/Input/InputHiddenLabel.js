export default function InputHiddenLabel({
  label,
  name,
  type,
  id,
  placeholder,
  value, // string
  setValue,
  setOtherValue,
}) {
  const handleChange = (e) => {
    setValue(e.target.value);
    if (new Date(e.target.value) > 0) {
      setOtherValue(new Date(e.target.value));
    }
  };

  const inputProps = {
    label,
    name,
    type,
    id,
    placeholder,
    value,
  };
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        {...inputProps}
        onChange={handleChange}
        className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:text-gray-200 dark:bg-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}
