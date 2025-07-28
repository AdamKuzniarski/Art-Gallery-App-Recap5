import ArtPieceList from "@/componets/ArtPieceList";
export default function HomePage({ artPieces }) {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieceList artPieces={artPieces} />
    </div>
  );
}
