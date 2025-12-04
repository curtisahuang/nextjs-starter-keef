import React from "react";

export default function Preview375x812() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div
        id="viewport-375x812"
        className="shadow-lg border border-black/10 rounded-md overflow-hidden"
        style={{ width: 375, height: 812 }}
      >
        <iframe
          title="375x812 preview"
          src="/"
          width={375}
          height={812}
          style={{ border: "0" }}
        />
      </div>
    </div>
  );
}
