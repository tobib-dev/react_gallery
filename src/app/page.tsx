import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://pdop9zxk2l.ufs.sh/f/shFDG4Q7AWn0qNpbjXrNa6eGA4z1TlkYUDEyjshWFC2Rvcd9",
  "https://pdop9zxk2l.ufs.sh/f/shFDG4Q7AWn0ydFjev91CPGQAxM6RY5SiOq9sXrUzEcw7hla",
];

 const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
 }));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
