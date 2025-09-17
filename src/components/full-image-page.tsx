import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full bg-green-500">
      <img src={image.url} className="object-contain" />

      <div className="w-48 flex flex-col">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
