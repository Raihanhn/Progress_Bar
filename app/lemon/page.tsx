"use client";
import NextNProgress from "nextjs-progressbar";
import React from "react";

export default function page() {
  return (
    <div>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      page
    </div>
  );
}
