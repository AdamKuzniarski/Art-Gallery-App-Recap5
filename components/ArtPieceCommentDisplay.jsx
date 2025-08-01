import Link from "next/link";
import ArtPiece from "@/components/ArtPiece";

export default function ArtPieceCommentDisplay({
  artPieces,
  onToggleFavorite,
  isArtPieceFavorite,
}) {
  return (
    <>
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
    </>
  );
}
