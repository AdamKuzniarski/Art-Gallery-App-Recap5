import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceData";

export default function ArtDetails({
  artPieces,
  piece,
  onToggleFavorite,
  favorites,
  onAddComment, 
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug: artPieceSlug } = router.query;

  const artPieceData = artPieces.find((piece) => piece.slug === artPieceSlug);

  if(!artPieceData){
    return <p>Loading art piece...</p>
  }
  return (
    <>
      {artPieceData ? (
        <ArtPieceDetails
          artPieceData={artPieceData}
          artPiecesInfo={artPiecesInfo}
          onAddComment={onAddComment}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          piece={piece}
        />
      ) : null}
    </>
  );
}
