"use client";

import {useEffect, useRef, useState} from "react";

export type ExpandableTextProps = {
  content: string;
  lineClamp?: number;
};

export const ExpandableText: React.FC<ExpandableTextProps> = ({content, lineClamp = 2}) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [lineHeight, setLineHeight] = useState<number | null>(null);
  const [expanding, setExpanding] = useState(false);
  const originalRef = useRef<HTMLParagraphElement>(null);

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

  const isOverflown =
    originalRef.current?.clientHeight && maxHeight && originalRef.current?.clientHeight > maxHeight;

  return (
    <>
      <div className="h-0 overflow-hidden">
        <p ref={originalRef}>{content}</p>
      </div>

      <div className="relative w-full">
        <p
          ref={pRef}
          className="relative overflow-hidden"
          style={{maxHeight: expanding ? undefined : maxHeight}}>
          {content}
          {!isOverflown ? null : !expanding ? (
            <button
              className="z-1 text-primary absolute bottom-0 right-0 block bg-gradient-to-r from-transparent via-white via-40% to-white pl-8 hover:underline"
              onClick={e => {
                e.stopPropagation();
                setExpanding(prev => !prev);
              }}
              ref={buttonRef}>
              더보기
            </button>
          ) : (
            <button
              className="text-primary ml-0.5 hover:underline"
              onClick={e => {
                e.stopPropagation();
                setExpanding(prev => !prev);
              }}>
              접기
            </button>
          )}
        </p>
      </div>
    </>
  );
};
