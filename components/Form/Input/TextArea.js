export default function TextArea({ label, name, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name={name}
          id={name}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
