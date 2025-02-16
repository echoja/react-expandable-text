"use client";

import {useEffect, useRef, useState} from "react";

export type ExpandableTextProps = {
  content: string;
  lineClamp?: number;
};

export const ExpandableText: React.FC<ExpandableTextProps> = ({content, lineClamp = 2}) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const [lineHeight, setLineHeight] = useState<number | null>(null);
  const [expanding, setExpanding] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (!pRef.current) {
        return;
      }
      setLineHeight(parseFloat(getComputedStyle(pRef.current).lineHeight));
    });

    if (pRef.current) {
      observer.observe(pRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const maxHeight = lineHeight ? lineHeight * lineClamp : undefined;

  const handleButtonClick = () => {
    setExpanding((prev) => !prev);
  };

  return (
    <p
      ref={pRef}
      className="relative overflow-hidden"
      style={{maxHeight: !expanding ? maxHeight : undefined}}>
      {content}
      {!expanding ? (
        <button
          className="z-1 text-primary absolute bottom-0 right-0 block bg-gradient-to-r from-transparent via-white via-40% to-white pl-8 hover:underline"
          onClick={handleButtonClick}>
          더보기
        </button>
      ) : (
        <button className="text-primary ml-0.5 hover:underline" onClick={handleButtonClick}>
          접기
        </button>
      )}
    </p>
  );
};
