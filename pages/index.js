import ArtPieceSpotLight from "@/componets/ArtPieceSpotlight";
export default function HomePage({ artPieces }) {
  const artPieceRandom = Math.floor(Math.random() * artPieces.length);
  const spotlightArtPiece = artPieces[artPieceRandom];

  return (
    <main>
      {spotlightArtPiece ? (
        <ArtPieceSpotLight piece={spotlightArtPiece} />
      ) : null}
    </main>
  );
}
