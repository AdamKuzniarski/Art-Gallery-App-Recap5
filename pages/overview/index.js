import ArtPieceList from "@/components/ArtPieceList";

export default function OverviewPage({
  artPieces,
  onToggleFavorite,
  favorites,
}) {
  return (
    <ArtPieceList
      artPieces={artPieces}
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
