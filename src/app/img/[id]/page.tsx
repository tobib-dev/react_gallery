import FullPageImageView from "~/common/full-page-image-view";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const resolvedParams = await params;
  const { id: photoId } = resolvedParams;

  return <FullPageImageView photoId={photoId} />;
}
