import Link from "next/link";
import ArtPiece from "@/components/ArtPiece";

// Auflistung der Bilder
// Einzelne Bilder in der Komponente ArtPiece 
export default function ArtPieceList({
  artPieces,
  onToggleFavorite,
  favorites,
}) {
  return (
    <ul>
      {artPieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`overview/${piece.slug}`}>
            <ArtPiece
              piece={piece}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
              
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
