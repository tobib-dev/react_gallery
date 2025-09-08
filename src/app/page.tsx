import Link from "next/link";

const mockUrls = [
  "https://pdop9zxk2l.ufs.sh/f/shFDG4Q7AWn0qNpbjXrNa6eGA4z1TlkYUDEyjshWFC2Rvcd9",
  "https://pdop9zxk2l.ufs.sh/f/shFDG4Q7AWn0ydFjev91CPGQAxM6RY5SiOq9sXrUzEcw7hla",
  "https://pdop9zxk2l.ufs.sh/f/shFDG4Q7AWn0S9grruUlqis8cNBrEU3HmawnRphxAkLzJWZQ",
];

 const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
 })) 

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
