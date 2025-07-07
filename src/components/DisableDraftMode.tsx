"use client";
import { useEffect, useState } from "react";

export function DisableDraftMode() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(window === window.parent && !window.opener);
  }, []);

  return show ? (
    <a href="/api/draft/disable" style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
      Disable Draft Mode
    </a>
  ) : null;
} 