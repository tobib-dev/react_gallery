import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = await params;
    const { id: photoId } = resolvedParams;
    
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

    return <FullPageImageView id={idAsNumber} />;
}