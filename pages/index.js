import ArtPieceSpotLight from "@/components/ArtPieceSpotlight";
import Head from "next/head";
import { useMemo } from "react";

export default function HomePage({ artPieces, favorites, onToggleFavorite }) {
  //const artPieceRandom = Math.floor(Math.random() * artPieces.length);
  const artPieceRandom = useMemo(
    () => Math.floor(Math.random() * artPieces.length),
    [artPieces]
  );
  const spotlightArtPiece = artPieces[artPieceRandom];

  return (
    <main>
      <Head>
        <title> Spotlight &bull; Art Gallery</title>
      </Head>

      {spotlightArtPiece ? (
        <ArtPieceSpotLight
          piece={spotlightArtPiece}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      ) : null}
    </main>
  );
}
