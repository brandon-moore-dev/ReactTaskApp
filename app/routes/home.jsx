import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import readMeFile from "../../README.md";

export function meta() {
  return [
    { title: "React Task App - Home" },
    { name: "description", content: "Welcome to React Task App!" },
  ];
}

// Home component - import and show README contents
export default function Home(loaderData) {
  const [readMeContent, setReadMeContent] = useState("");

  useEffect(() => {
    fetch(readMeFile)
      .then((response) => response.text())
      .then((content) => {
        setReadMeContent(content);
      });
  }, []);

  return (
    <>
      <div className="z-0 flex justify-center mt-4">
        <div className="w-full sm:w-1/2">
          <div className="flex justify-center sm:justify-start mb-4">
            <div className="p-4 prose max-w-none prose-slate prose-code:before:content-none prose-code:after:content-none">
              <ReactMarkdown>{readMeContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
