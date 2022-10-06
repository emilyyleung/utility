import { useState, useEffect } from 'react';

import TextArea from 'components/Form/Input/TextArea';
import NumberInput from 'components/Form/Input/NumberInput';
import TextInput from 'components/Form/Input/TextInput';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const titleIpsum = 'Maecenas pharetra laoreet arcu eget ornare';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in nisi at dui faucibus tincidunt eu sit amet libero. Quisque lacinia est non dolor faucibus tempus. Vivamus dictum mattis nibh, vitae tristique tellus consectetur in. Cras vitae dignissim diam. Nullam vel quam dolor. Proin non metus elementum, porttitor nisl nec, tempus felis. Suspendisse in scelerisque magna. Donec massa lorem, luctus at viverra id, vulputate vel elit. Sed cursus, nulla ac gravida consectetur, lorem augue dignissim nulla, vitae accumsan justo enim posuere odio. Nulla facilisi. Phasellus tincidunt a neque a viverra. Nam rhoncus eu nunc id viverra. Sed consectetur vulputate erat ut ornare. Etiam molestie efficitur tincidunt.';

export default function CommitPage() {
  const [commitTitle, setCommitTitle] = useState(titleIpsum);
  const [commitMessage, setCommitMessage] = useState(loremIpsum);

  const [outputBody, setOutputBody] = useState('');
  const [output, setOutput] = useState('');

  const [rowWidth, setRowWidth] = useState(72);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let words = commitMessage.split(' ');

    let out = [];

    let row = '';

    // Logic for commit message split by character length and words
    for (let x = 0; x < words.length; x++) {
      let nextPhrase = '';
      const word = words[x];
      if (row.length == 0) {
        nextPhrase = word;
      } else {
        nextPhrase = row + ' ' + word;
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

    setOutputBody(out.join('\n'));
  }, [commitMessage, rowWidth]);

  useEffect(() => {
    if (commitMessage.length == 0) {
      setOutput(commitTitle);
    } else if (commitTitle.length > 0) {
      setOutput([commitTitle, outputBody].join('\n\n'));
    } else {
      setOutput(outputBody);
    }
  }, [commitTitle, commitMessage, outputBody]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        // console.log('This will run after 1 second!');
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="mx-auto pt-10 max-w-3xl px-10 lg:px-0 grid gap-4">
        <TextInput
          label={`Write your title (${
            50 - commitTitle.length
          } characters left)`}
          name="title"
          type="text"
          id="title"
          placeholder="Write your title"
          value={commitTitle}
          setValue={setCommitTitle}
          maxLength="50"
        />

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
              step={2}
            />
          </div>
          <div className="justify-self-end">
            <CopyToClipboard
              text={output}
              onCopy={() => {
                console.log(output);
                setCopied(true);
              }}
            >
              {copied ? (
                <button
                  className="inline-flex items-center rounded border border-green-700 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-green-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
                  type="button"
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
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                </button>
              )}
            </CopyToClipboard>
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
