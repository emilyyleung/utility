export default function SimpleStats({ data }) {
  return (
    <div className="min-w-full">
      <dl className="mt-5 grid sm:grid-flow-col auto-cols-fr grid-cols-3 gap-2 sm:gap-3 md:gap-5 px-5 lg:px-0">
        {data.map((item) => (
          <div
            key={item.key}
            className="overflow-hidden rounded-lg bg-white dark:bg-gray-700 py-2 md:py-5 shadow text-center"
          >
            <dt className="truncate text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
              {item.key}
            </dt>
            <dd className="mt-1 text-lg md:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
