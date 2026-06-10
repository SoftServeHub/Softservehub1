import { useEffect, useState } from "react";

export function useTypewriter(words, speed = 120, pause = 1500) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];

    if (!deleting && subIndex < current.length) {
      setTimeout(() => {
        setText(current.slice(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      }, speed);
    } else if (deleting && subIndex > 0) {
      setTimeout(() => {
        setText(current.slice(0, subIndex - 1));
        setSubIndex(subIndex - 1);
      }, speed / 2);
    } else if (!deleting && subIndex === current.length) {
      setTimeout(() => setDeleting(true), pause);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((index + 1) % words.length);
    }
  }, [subIndex, deleting, index, words, speed, pause]);

  return text;
}
