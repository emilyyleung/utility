import { useState, useEffect } from 'react';
import Head from 'next/head';

import {
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getSeconds,
  getYear,
  parseISO,
  startOfToday,
} from 'date-fns';

import SimpleStats from 'components/Stats/SimpleStats';
import DateTimePicker from 'components/Form/Input/DateTimePicker';
import InputHiddenLabel from 'components/Form/Input/InputHiddenLabel';

export default function UTCPage() {
  const today = startOfToday();

  const [datetime, setDatetime] = useState(today); // object

  const [timestamp, setTimestamp] = useState(today.toISOString()); // string

  const [timestamptz, seTimestamptz] = useState(today.toISOString());

  const values = [
    { key: 'Year', value: getYear(parseISO(timestamp)) },
    { key: 'Month', value: getMonth(parseISO(timestamp)) + 1 },
    { key: 'Day', value: getDate(parseISO(timestamp)) },
    { key: 'Hour', value: getHours(parseISO(timestamp)) },
    { key: 'Minute', value: getMinutes(parseISO(timestamp)) },
    { key: 'Second', value: getSeconds(parseISO(timestamp)) },
  ];

  useEffect(() => {
    if (datetime > 0) {
      setTimestamp(datetime.toISOString());
    }
  }, [datetime]);

  return (
    <div className="bg-slate-100 dark:bg-gray-800 min-h-screen">
      <Head>
        <title>UTC Timestamp</title>
        <meta
          name="description"
          content="Convert between timestamp and date time"
        />
      </Head>

      <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 py-10 justify-items-center">
        <h1 className="text-4xl font-bold pb-20 dark:text-white">
          UTC Timestamp
        </h1>
        <div className="grid sm:grid-cols-[1fr_auto_1fr] place-items-center w-full px-4 md:px-0">
          <div className="w-full md:w-56 justify-self-end">
            <InputHiddenLabel
              label="Hello"
              name="timestamp"
              type="text"
              id="timestamp"
              placeholder="Enter timestamp"
              value={timestamptz}
              setValue={seTimestamptz}
              setOtherValue={setDatetime}
            />
          </div>
          <div className="px-4 font-semibold dark:text-white py-2">or</div>
          <div className="w-full md:w-56 justify-self-start">
            <DateTimePicker
              value={timestamp}
              setValue={setDatetime}
              setOtherValue={seTimestamptz}
            />
          </div>
        </div>
        <SimpleStats data={values} />
      </div>
    </div>
  );
}
