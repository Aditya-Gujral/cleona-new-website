// app/insights/post/[slug]/page.js

import PostPage from "./default";
import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

// Generate static params for static generation
export async function generateStaticParams() {
  const slugs = await getAllPostsSlugs();
  return slugs.map(slug => ({ slug: slug.current })); // Adjust if slugs are in a different format
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

// Default export for rendering the page
export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}


// export const revalidate = 60;
