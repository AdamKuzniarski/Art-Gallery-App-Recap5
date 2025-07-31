import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceData";
import Head from "next/head";

//Variable artPieceData wählt eine spezifische Seite aus (Slug)
// <Head> Komponente setzt den Title der Seite
export default function ArtDetails({
  artPieces,
  onToggleFavorite,
  favorites,
  onAddComment,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug: artPieceSlug } = router.query;

  const artPieceData = artPieces.find((piece) => piece.slug === artPieceSlug);

  if (!artPieceData) {
    return <p>Loading art piece...</p>;
  }
  return (
    <>
      <Head>
        <title>Artwork-Details &bull; Art Gallery</title>
      </Head>

      {/* Aufruf der Komponente für die Details des Bildes */}
      {artPieceData ? (
        <ArtPieceDetails
          artPieceData={artPieceData}
          artPiecesInfo={artPiecesInfo}
          onAddComment={onAddComment}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          piece={artPieceData} 
        />
      ) : null}
    </>
  );
}
