export default function NumberInput({
  title,
  value,
  setValue,
  min,
  max,
  step,
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 pb-2">
        {title}
      </span>
      <div className="grid grid-cols-[1fr_auto] place-items-center gap-2">
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

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-slate-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </div>
    </label>
  );
}
