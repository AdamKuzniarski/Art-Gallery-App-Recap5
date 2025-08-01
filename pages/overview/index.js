import ArtPieceList from "@/components/ArtPieceList";
import Head from "next/head";

export default function OverviewPage({
  artPieces,
  onToggleFavorite,
  isArtPieceFavorite,
}) {
  return (
    <>
      <Head>
        <title> Overview &bull; Art Gallery</title>
      </Head>

      <ArtPieceList
        artPieces={artPieces}
        isArtPieceFavorite={isArtPieceFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
