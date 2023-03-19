"use client";

import { DocumentData } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

type Props = {
  message: DocumentData;
  detectNewLine: any;
};

function Message({ message, detectNewLine }: Props) {
  const isChatGPT = message.user.name === "ChatGPT";
  const [blinkCursor, setBlinkCursor] = useState(true);

  let text = message.text;

  const textRef: any = useRef(null);

  useEffect(() => {
    if (text.length === 0) return;

    const textEl = textRef.current;

    let i = 0;
    let timeoutId: any;

    const clearExistingTimeout = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    const typeWriter = () => {
      if (text.startsWith("\n\n")) {
        // Remove first 2 "\n\n"
        text = text.slice(2, text.length);
      } else {
        if (i < text.length) {
          if (text.charAt(i) === "\n") {
            // Go to newline when "\n" is detected
            textEl.insertAdjacentHTML("beforeend", "<br />");

            // When there's new line added run this function at parent component
            detectNewLine();
          } else {
            // If not do the type writing "animation"
            textEl.innerHTML += text.charAt(i);
          }
          i++;
          timeoutId = setTimeout(typeWriter, 20);
        } else {
          clearExistingTimeout();
          setBlinkCursor(false);
        }
      }
    };

    typeWriter();

    return () => {
      clearExistingTimeout();
    };
  }, [text]);

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto items-baseline">
        <img src={message.user.avatar} alt="" className="h-8 w-8 shrink-0" />
        <div className="relative">
          <span ref={textRef} className="relative"></span>
          {blinkCursor ? (
            <span className="w-3 h-5 ml-2 bg-white animate-blink relative inline-block"></span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Message;
