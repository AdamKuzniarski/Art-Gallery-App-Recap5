import ArtPieceList from "@/components/ArtPieceList";
import Head from "next/head";

// Die Variable favoriteArtPieces wählt die Favoriten unter den Bildern aus
export default function Favorites({
  artPieces,
  onToggleFavorite,
  isArtPieceFavorite,
}) {
  const favoriteArtPieces = artPieces.filter((piece) =>
    isArtPieceFavorite(piece.slug)
  );

  return (
    <>
      <Head>
        <title> Favorites &bull; Art Gallery</title>
      </Head>

      {/* 
      Sind keine Bilder ausgewählt? Meldung an den Benutzer
      Sonst Auflistung der Bilder   (ArtPieceList)
      */}
      {favoriteArtPieces.length < 1 ? (
        <h2>No favorites selected</h2>
      ) : (
        <ArtPieceList
          artPieces={favoriteArtPieces}
          isArtPieceFavorite={isArtPieceFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </>
  );
}
