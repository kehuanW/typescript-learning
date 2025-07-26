import { notFound } from "next/navigation";

export default async function Page({ params }:{params: Promise<{id: string}>}) {
  const id = (await params).id;
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  
  if (!response.ok) {
    return notFound();
  }
  
  const post = await response.json();

  if (!post.title || post.message) {
    return notFound();
  }

  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold">{post.title}</h1>
      <p className="whitespace-pre-wrap mt-4">{post.body}</p>
    </div>
  );
}