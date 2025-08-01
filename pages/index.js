import ArtPieceSpotLight from "@/components/ArtPieceSpotlight";
import Head from "next/head";
import { useMemo } from "react";

// Zufällige Erzeugung eines Bildes,(Math.random)
//useMemo verhindert Aktualisierung des States beim Klicken des Like-Buttons
//Die Variable spotlightArtPiece  wählt das zufällige Bild aus
export default function HomePage({
  artPieces,
  isArtPieceFavorite,
  onToggleFavorite,
}) {
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
          isArtPieceFavorite={isArtPieceFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      ) : null}
    </main>
  );
}
