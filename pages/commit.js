import { useState, useEffect } from 'react';

import TextArea from 'components/Form/Input/TextArea';
import NumberInput from 'components/Form/Input/NumberInput';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in nisi at dui faucibus tincidunt eu sit amet libero. Quisque lacinia est non dolor faucibus tempus. Vivamus dictum mattis nibh, vitae tristique tellus consectetur in. Cras vitae dignissim diam. Nullam vel quam dolor. Proin non metus elementum, porttitor nisl nec, tempus felis. Suspendisse in scelerisque magna. Donec massa lorem, luctus at viverra id, vulputate vel elit. Sed cursus, nulla ac gravida consectetur, lorem augue dignissim nulla, vitae accumsan justo enim posuere odio. Nulla facilisi. Phasellus tincidunt a neque a viverra. Nam rhoncus eu nunc id viverra. Sed consectetur vulputate erat ut ornare. Etiam molestie efficitur tincidunt.';

export default function CommitPage() {
  const [commitMessage, setCommitMessage] = useState(loremIpsum);

  const [output, setOutput] = useState('');

  const [rowWidth, setRowWidth] = useState(50);

  useEffect(() => {
    let words = commitMessage.split(' ');

    // console.log(words.length);

    let out = [];

    let row = '';

    for (let x = 0; x < words.length; x++) {
      let nextPhrase = '';
      const word = words[x];
      // console.log('WORD: ', x, word);

      if (row.length == 0) {
        nextPhrase = word;
        // console.log(row.length, ' :1.1: ', nextPhrase);
      } else {
        nextPhrase = row + ' ' + word;
        // console.log(row.length, ' :1.2: ', nextPhrase);
      }

      if (x == words.length - 1) {
        out.push(nextPhrase);
      } else {
        if (nextPhrase.length <= rowWidth) {
          row = nextPhrase;
        } else {
          out.push(row);
          row = word;
        }
      }
    }

    setOutput(out.join('\n'));
  }, [commitMessage, rowWidth]);

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="mx-auto pt-10 max-w-3xl px-10 lg:px-0 grid gap-4">
        <TextArea
          label="Write your commit message"
          name="commit"
          rows={5}
          setValue={setCommitMessage}
          value={commitMessage}
        />
        <div className="grid sm:grid-cols-[auto_200px_1fr] grid-cols-[auto_1fr_auto] gap-4 place-items-center">
          <div className="text-sm font-medium text-gray-700">
            Character Width
          </div>
          <div className="w-full">
            <NumberInput
              title="Character width"
              value={rowWidth}
              setValue={setRowWidth}
              min={30}
              max={100}
              step={5}
            />
          </div>
          <div className="justify-self-end">
            {/* <button
              className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
              <div>Copy</div>
            </button> */}
          </div>
        </div>
        <p
          className="overflow-x-auto custom-scroll"
          style={{ whiteSpace: 'pre' }}
        >
          {output}
        </p>
      </div>
    </div>
  );
}
