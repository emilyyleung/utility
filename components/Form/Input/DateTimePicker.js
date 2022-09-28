import { format, parseISO } from 'date-fns';

export default function DateTimePicker({ value, setValue, setOtherValue }) {
  const pickValue = format(parseISO(value), "yyyy-MM-dd'T'HH:mm");
  const handleChange = (e) => {
    setValue(parseISO(e.target.value));
    setOtherValue(parseISO(e.target.value).toISOString());
  };
  return (
    <input
      type="datetime-local"
      onChange={handleChange}
      value={pickValue}
      className="dark:border-gray-600 dark:text-gray-200 dark:bg-gray-500 form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  );
}
