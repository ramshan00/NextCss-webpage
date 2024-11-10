"use client"

import { useEffect, useState } from 'react';

type TypewriterProps = {
  text: string; // Specify that text should be a string
};

export default function Typewriter({ text }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 40); // Adjust the speed here
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <h1>{displayedText}</h1>;
}
