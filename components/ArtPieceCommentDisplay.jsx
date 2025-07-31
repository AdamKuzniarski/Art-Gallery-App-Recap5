import Link from "next/link";
import ArtPiece from "@/components/ArtPiece";

export default function ArtPieceCommentDisplay({
  artPieces,
  onToggleFavorite,
  favorites,
}) {
  return (
    <>
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
    </>
  );
}
