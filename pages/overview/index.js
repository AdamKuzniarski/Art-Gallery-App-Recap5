import ArtPieceList from "@/components/ArtPieceList";
import Head from "next/head";

export default function OverviewPage({
  artPieces,
  onToggleFavorite,
  favorites,
}) {
  return (
    <>
      <Head>
        <title> Overview &bull; Art Gallery</title>
      </Head>

      <ArtPieceList
        artPieces={artPieces}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
