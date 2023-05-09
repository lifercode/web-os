import { useState } from 'react';
import { ProgressBar  } from 'react95';

function Check() {
  const [percent, setPercent] = useState(0);

  return <ProgressBar value={Math.floor(percent)} />;
}

export default Check;
