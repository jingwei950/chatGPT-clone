"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { collection, DocumentData, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";
import UserMessage from "./UserMessage";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();
  const messagesEndRef: any = useRef<HTMLDivElement>(null);
  const [msg, setMsg] = useState<string[]>([]);
  const [lineCount, setLineCount] = useState<number>(0);
  let count = 0;

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  // Detect the message coming in from Firebase
  useEffect(() => {
    if (!messages) return;

    messages.docs.forEach((message) => {
      if (message.data().user.name === "ChatGPT") {
        setMsg((prevMsg) => [...prevMsg, message.data().text]);
      }
    });
  }, [messages]);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [lineCount]);

  // Detect line add to bottom of the screen
  const detectNewLine = () => {
    setLineCount((prev) => prev + 1);
  };

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}

      {messages?.docs.map((message) =>
        message.data().user.name === "ChatGPT" ? (
          <Message
            key={message.id}
            message={message.data()}
            detectNewLine={detectNewLine}
          />
        ) : (
          <UserMessage key={message.id} message={message.data()} />
        )
      )}
      <div ref={messagesEndRef}></div>
    </div>
  );
}

export default Chat;
