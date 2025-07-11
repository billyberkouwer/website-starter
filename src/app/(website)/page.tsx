"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(process.env.NODE_ENV);
  }, []);
  return (
    <div>
      <h1>Next.js/Sanity Starter</h1>
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-4">
            <span>grid</span>
          </div>
          <div className="col-4">
            <span>grid</span>
          </div>
          <div className="col-4">
            <span>grid</span>
          </div>
        </div>
      </div>
      <Link href={"/testPage"}>Change Route</Link>
    </div>
  );
}
