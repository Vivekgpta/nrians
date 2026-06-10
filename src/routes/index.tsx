import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/home/Hero";
import { Counters } from "../components/home/Counters";
import { BatchVideo } from "../components/home/BatchVideo";
import { Quotes } from "../components/home/Quotes";
import { MemoryOfDay } from "../components/home/MemoryOfDay";

import { Faculty } from "../components/home/Faculty";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Batch 2022–2026 · A Digital Yearbook" },
      { name: "description", content: "Four years. One family. Infinite memories. The luxury digital yearbook of B.Tech Batch 2022–2026." },
      { property: "og:title", content: "Batch 2022–2026 · A Digital Yearbook" },
      { property: "og:description", content: "Four years. One family. Infinite memories." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Counters />
      <MemoryOfDay />
      <BatchVideo />
      <Faculty />
      <Quotes />
    </>
  );
}
