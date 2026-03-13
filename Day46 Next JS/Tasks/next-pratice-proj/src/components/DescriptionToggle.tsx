"use client";

import { useState } from "react";

type Props = {
  text: string;
};

export default function DescriptionToggle({ text }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-2">
      <p className={`text-sm text-gray-600 ${expanded ? "" : "line-clamp-2"}`}>
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-1 text-xs font-medium text-blue-600 hover:underline"
      >
        {expanded ? "See less" : "See more"}
      </button>
    </div>
  );
}
