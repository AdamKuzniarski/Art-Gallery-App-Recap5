import ArtPiece from "@/components/ArtPiece";
import FavoriteButton from "@/components/FavoriteButton";
import Head from "next/head";
import Image from "next/image";
import { useMemo } from "react";
import styled from "styled-components";

// Zufällige Erzeugung eines Bildes,(Math.random)
//useMemo verhindert Aktualisierung des States beim Klicken des Like-Buttons
//Die Variable spotlightArtPiece  wählt das zufällige Bild aus
export default function HomePage({
  artPieces,
  isArtPieceFavorite,
  onToggleFavorite,
}) {
  const randomArtPieceId = useMemo(
    () => Math.floor(Math.random() * artPieces.length),
    [artPieces]
  );
  const spotlightArtPiece = artPieces[randomArtPieceId];

  if (!spotlightArtPiece) {
    return <p>Error while selecting spotlight :/</p>;
  }

  return (
    <>
      <Head>
        <title> Spotlight &bull; Art Gallery</title>
      </Head>

      <ArtPiece
        piece={spotlightArtPiece}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isArtPieceFavorite(spotlightArtPiece.slug)}
      />
    </>
  );
}
