import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  //State für alle Kommentare, als Objekt gespeichert
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: {} }
  );

  //Function, um einen Kommentar zu einem bestimmten Bild hinzufügen

  function handleAddComment(slug, newComment) {
    const existingInfoForThisPiece = artPiecesInfo[slug] || {}; // Wenn es noch keine gibt, Estelle ein neues Objekt
    const existingComments = existingInfoForThisPiece.comments || []; //Finde bisherige Kommentarliste für dieses Bild
    const newCommentList = [...existingComments, newComment]; //Estelle eine neue Liste mit allen alten Kommentaren, + neuer Kommentar
    const updatedInfoForThisPiece = {
      //Aktualisiere Info-Objekt für dieses Bild.
      ...existingInfoForThisPiece,
      comments: newCommentList,
    };
    // estelle eine Kopie des gesammten 'ArtPiecesInfo' -Objekts(-immutability)
    const updatedArtPiecesInfo = {
      ...artPiecesInfo,
    };
    updatedArtPiecesInfo[slug] = updatedInfoForThisPiece; //In dieser Kopie, aktualisiere das Bild, das geändert wurde.
    setArtPiecesInfo(updatedArtPiecesInfo); // State aktualisieren
  }

  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    //Persistierung der Daten mit LocalStorage
    defaultValue: [],
  });

  //Das favorites Array enthält die Slugs der Favoriten
  //Is der Slug im Array enthalten, dann wird er enfernt(if)
  //Ist der Slug im Array nicht enthalten, dann wird er hinzugefügt(else)
  function handleToggleFavorite(slug) {
    if (favorites.includes(slug)) {
      setFavorites(favorites.filter((favorite) => favorite !== slug));
    } else {
      setFavorites([...favorites, slug]);
    }
  }

  // Prüft ob, ein Bild(Slug) im Favorites Array enthalten ist (true/false).
  function isFavoriteArtPiece(piece) {
    if (favorites.includes(piece.slug)) {
      return true;
    }
    return false;
  }

  //Fetchen vom API, Daten der Bilder.
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) {
    <h2>No data to load </h2>;
  }

  if (!artPieces) {
    <h2>Loading...</h2>;
  }

  // Props übergeben an Kinder-Komponenten
  return (
    <Layout>
      <GlobalStyle />

      <Component
        {...pageProps}
        artPieces={artPieces || []}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={isFavoriteArtPiece}
        artPiecesInfo={artPiecesInfo}
        onAddComment={handleAddComment}
      />
    </Layout>
  );
}
