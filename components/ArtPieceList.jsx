import Link from "next/link";
import ArtPieceCommentDisplay from "./ArtPieceCommentDisplay";

// Auflistung der Bilder
// Einzelne Bilder in der Komponente ArtPiece
export default function ArtPieceList({
  artPieces,
  onToggleFavorite,
  isArtPieceFavorite,
}) {
  return (
    <ul>
      <ArtPieceCommentDisplay
        artPieces={artPieces}
        onToggleFavorite={onToggleFavorite}
        isArtPieceFavorite={isArtPieceFavorite}
      />
    </ul>
  );
}
