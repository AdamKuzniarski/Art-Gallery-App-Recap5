import Link from "next/link";
import ArtPiece from "./ArtPiece";

// Auflistung der Bilder
// Einzelne Bilder in der Komponente ArtPiece
export default function ArtPieceList({
  artPieces,
  onToggleFavorite,
  isArtPieceFavorite,
}) {
  return (
    <ul>
      {artPieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`overview/${piece.slug}`}>
            <ArtPiece
              piece={piece}
              isFavorite={isArtPieceFavorite(piece.slug)}
              onToggleFavorite={onToggleFavorite}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
