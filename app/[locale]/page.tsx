import Image from "next/image";
import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
