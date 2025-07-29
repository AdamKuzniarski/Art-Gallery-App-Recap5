import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceData";

export default function ArtDetails({
  artPieces,
  piece,
  onToggleFavorite,
  favorites,
}) {
  const router = useRouter();
  const { slug: artPieceSlug } = router.query;

  const artPieceData = artPieces.find((piece) => piece.slug === artPieceSlug);

  return (
    <>
      {artPieceData ? (
        <ArtPieceDetails
          artPieceData={artPieceData}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          piece={piece}
        />
      ) : null}
    </>
  );
}
