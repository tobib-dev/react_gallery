import { Modal } from "./modal";
import FullPageImageView from "~/common/full-page-image-view";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const resolvedParams = await params;
  const { id: photoId} = resolvedParams;

  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
