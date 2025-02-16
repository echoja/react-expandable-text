import type {FC} from "react";

import {Counter, ExpandableText} from "@/lib";
import "./index.css";
import {ExpandableText as Test} from "@/lib/ExpandableText/ExpandableText2";

const App: FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <Counter />
      </div>
      <div className="my-20 max-w-md">
        <ExpandableText content="Irure commodo reprehenderit dolor aliqua proident et in sunt proident quis. Eiusmod fugiat consectetur irure velit sunt laborum Lorem exercitation culpa elit non sint aute labore. Est consequat eu amet elit commodo sint cupidatat ullamco in culpa non consequat sunt. Non duis ad aliqua qui magna occaecat nulla ut sit eiusmod velit proident dolor pariatur ullamco." />
      </div>
      <div className="my-20 max-w-md">
        <ExpandableText content="Irure commodo reprehenderit dolor " />
      </div>
      <div className="my-20 max-w-md">
        <Test content="Irure commodo reprehenderit dolor aliqua proident et in sunt proident quis. Eiusmod fugiat consectetur irure velit sunt laborum Lorem exercitation culpa elit non sint aute labore. Est consequat eu amet elit commodo sint cupidatat ullamco in culpa non consequat sunt. Non duis ad aliqua qui magna occaecat nulla ut sit eiusmod velit proident dolor pariatur ullamco." />
      </div>
      <div className="my-20 max-w-md">
        <Test content="Irure commodo reprehenderit dolor " />
      </div>
    </div>
  );
};

export default App;
