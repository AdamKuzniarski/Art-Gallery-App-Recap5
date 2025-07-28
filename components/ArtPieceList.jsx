import Link from "next/link";
import ArtPiece from "@/components/ArtPiece";


export default function ArtPieceList({ artPieces }) {
  return (
    <ul>
      {artPieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`overview/${piece.slug}`}>
            <ArtPiece piece={piece} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
