import ArtPieceList from "@/components/ArtPieceList";

export default function Favorites({
  artPieces,
  favorites,
  onToggleFavorite,
  isFavorite,
}) {
  const favoriteArtPieces = artPieces.filter((piece) => isFavorite(piece));

  return (
    <>
      {favoriteArtPieces.length < 1 ? (
        <h2>Keine Favoriten</h2>
      ) : (
        <ArtPieceList
          artPieces={favoriteArtPieces}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </>
  );
}
