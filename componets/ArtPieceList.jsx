import ArtPiece from "./ArtPiece";
export default function ArtPieceList({ artPieces }) {
 
  return (
    <ul>
       {artPieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiece piece={piece} />
        </li>
      ))} 
    </ul>
  );
}
