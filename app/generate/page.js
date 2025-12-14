import { Suspense } from "react";
import GenerateClient from "./GenerateClient";

export default function GeneratePage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <GenerateClient />
    </Suspense>
  );
}
