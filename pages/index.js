import ArtPieceSpotLight from "@/components/ArtPieceSpotlight";
export default function HomePage({ artPieces, favorites, onToggleFavorite }) {
  const artPieceRandom = Math.floor(Math.random() * artPieces.length);
  const spotlightArtPiece = artPieces[artPieceRandom];

  return (
    <main>
      {spotlightArtPiece ? (
        <ArtPieceSpotLight
          piece={spotlightArtPiece}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      ) : null}
    </main>
  );
}
