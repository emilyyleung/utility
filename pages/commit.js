import { useState, useEffect } from 'react';

import TextArea from 'components/Form/Input/TextArea';

export default function CommitPage() {
  const [commitMessage, setCommitMessage] = useState('');

  const [output, setOutput] = useState('');

  useEffect(() => {
    let words = commitMessage.split(' ');
    let row = '';
    let out = [];

    let result = [];

    if (commitMessage.length < 50) {
      out.push(commitMessage);
    } else {
      for (let x = 0; x < words.length; x++) {
        const word = words[x];
        if (row.length + word.length < 50) {
          row = row + ' ' + word;
          //   out.push(row.trim());
          // } else if (row.length < 50) {
          //   out.push(row.trim());
          //   row = '';
          // } else {
          //   out.push(row.trim());
          //   row = '';
          //   console.log(word);
        } else {
          out.push(row.trim());
          row = '';
        }

        // out.push(row.trim());
      }
      result = [...out];
    }

    setOutput(result.join('\n'));
  }, [commitMessage]);

  return (
    <div className="mx-auto pt-10 max-w-3xl">
      <TextArea
        label="Write your commit message"
        name="commit"
        setValue={setCommitMessage}
        value={commitMessage}
      />
      <p className="pt-10" style={{ whiteSpace: 'pre' }}>
        {output}
      </p>
    </div>
  );
}
