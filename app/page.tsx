import React from "react";
import {
  ExclamationTriangleIcon,
  SunIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  const examples: string[] = [
    "Explain Something to me",
    "What is the difference between a dog and a cat?",
    "What is the color of the sun?",
  ];
  const capabilities: string[] = [
    "Remembers what user said earlier in the conversation",
    "Allows user to provide follow-up corrections",
    "Trained to decline inappropriate requests",
  ];
  const limitations: string[] = [
    "May occationally generate incorrect information",
    "May occationally produce harmful instructions or biased content",
    "Limited knowledge of world and events after 2021",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            {examples.map((example) => (
              <p className="infoText">{example}</p>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            {capabilities.map((capability) => (
              <p className="infoText">{capability}</p>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            {limitations.map((limitation) => (
              <p className="infoText">{limitation}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
