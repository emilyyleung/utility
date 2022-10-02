export default function NumberInput({
  title,
  value,
  setValue,
  min,
  max,
  step,
}) {
  return (
    <div className="w-full">
      <label className="block">
        {/* <span className="block text-sm font-medium text-gray-700 pb-2">
          {title}
        </span> */}
        <div className="grid grid-cols-[auto_1fr_auto] place-items-center gap-2">
          <button
            onClick={() => {
              if (parseInt(value) < max) {
                setValue(parseInt(value) + 5);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </button>

          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              e.code === 'ArrowUp' || e.code === 'ArrowDown'
                ? setValue(e.target.value)
                : e.preventDefault();
            }}
            className="rounded-md border-gray-300 shadow-sm form-input mt-1 block w-full"
          />
          <button
            onClick={() => {
              if (parseInt(value) > min) {
                setValue(parseInt(value) - 5);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </label>
    </div>
  );
}
