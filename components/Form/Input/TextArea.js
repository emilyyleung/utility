export default function TextArea({ label, name, value, rows, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block pb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <textarea
          rows={rows}
          name={name}
          id={name}
          className="custom-scroll block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
