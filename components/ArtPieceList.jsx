import Link from "next/link";
import ArtPiece from "@/components/ArtPiece";
import ArtPieceCommentDisplay from "./ArtPieceCommentDisplay";

// Auflistung der Bilder
// Einzelne Bilder in der Komponente ArtPiece
export default function ArtPieceList({
  artPieces,
  onToggleFavorite,
  favorites,
}) {
  return (
    <ul>
      <ArtPieceCommentDisplay
        artPieces={artPieces}
        onToggleFavorite={onToggleFavorite}
        favorites={favorites}
      />
    </ul>
  );
}
