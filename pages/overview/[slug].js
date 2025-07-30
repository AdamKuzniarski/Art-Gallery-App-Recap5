import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceData";
import Head from "next/head";

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
      <Head>
        <title>Artwork-Details &bull; Art Gallery</title>
      </Head>

      {artPieceData ? (
        <ArtPieceDetails
          artPieceData={artPieceData}
          artPiecesInfo={artPiecesInfo}
          onAddComment={onAddComment}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          piece={artPieceData} //vorher: piece
        />
      ) : null}
    </>
  );
}
