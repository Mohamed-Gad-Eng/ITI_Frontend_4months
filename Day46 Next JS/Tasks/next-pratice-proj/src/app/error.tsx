"use client";
import React from "react";

interface Props {
  error: Error;
}

export default function error({ error }: Props) {
  return (
    <div>
      <h1>{error.message}</h1>
      <p>something is wrong</p>
    </div>
  );
}