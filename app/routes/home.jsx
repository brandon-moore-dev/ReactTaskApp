import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import readMeFile from "../../README.md";

export function meta() {
  return [
    { title: "React Task App - Home" },
    { name: "description", content: "Welcome to React Task App!" },
  ];
}

// Home component - show README contents
export default function Home() {
  const [readMeContent, setReadMeContent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await axios.get(readMeFile);
        setReadMeContent(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, []);

  if (loading) {
    return <div className="z-0 flex justify-center mt-4">Loading ...</div>;
  }

  if (error) {
    return <div>Something went wrong ...</div>;
  }

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
