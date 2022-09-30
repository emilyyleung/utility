import { useState, useEffect } from 'react';

import TextArea from 'components/Form/Input/TextArea';
import NumberInput from 'components/Form/Input/NumberInput';

export default function CommitPage() {
  const [commitMessage, setCommitMessage] = useState('');

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
      <div className="mx-auto pt-10 max-w-3xl px-10 lg:px-0 ">
        <div className="pb-10 w-52">
          <NumberInput
            title="Max message width"
            value={rowWidth}
            setValue={setRowWidth}
            min={30}
            max={100}
            step={5}
          />
        </div>
        <TextArea
          label="Write your commit message"
          name="commit"
          rows={5}
          setValue={setCommitMessage}
          value={commitMessage}
        />
        <p
          className="pt-10 overflow-x-auto custom-scroll"
          style={{ whiteSpace: 'pre' }}
        >
          {output}
        </p>
      </div>
    </div>
  );
}
