// hacer un loading con un spinner
"use client";

import { useEffect, useState } from "react";

// components/Loading.tsx
export function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setIsLoading(false);
  }, []);

  return isLoading ? (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9000]">
        <div className="w-14 h-14 border-8 border-gray-600 border-t-[rgba(74,108,247,1)]  rounded-full animate-spin"></div>
      </div>
    </>
  ) : (
    <></>
  );
}
