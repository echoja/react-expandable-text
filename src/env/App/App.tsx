import type {FC} from 'react';

import {Counter, ExpandableText} from '@/lib';
import './index.css';

const App: FC = () => {
  return (
    <div>
      <div className="mb-6">
        <Counter />
      </div>
      <div>
        <ExpandableText content="Irure commodo reprehenderit dolor aliqua proident et in sunt proident quis. Eiusmod fugiat consectetur irure velit sunt laborum Lorem exercitation culpa elit non sint aute labore. Est consequat eu amet elit commodo sint cupidatat ullamco in culpa non consequat sunt. Non duis ad aliqua qui magna occaecat nulla ut sit eiusmod velit proident dolor pariatur ullamco." />
      </div>
    </div>
  );
};

export default App;
