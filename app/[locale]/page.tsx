import Image from "next/image";
import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Wrapper from "../templates/Wrapper/Wrapper";

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
    <Wrapper addClass='home'>
      <main className="flex flex-col items-center justify-between">
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    </Wrapper>
  );
}
