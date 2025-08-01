import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  //State für alle Kommentare, als Objekt gespeichert
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    //Persistierung der Daten mit LocalStorage
    defaultValue: [],
  });
  //Function, um einen Kommentar zu einem bestimmten Bild hinzufügen

  function handleAddComment(slug, commentText) {
    const newComment = {
      id: crypto.randomUUID(),
      createdAt: new Date().toDateString(),
      artPieceSlug: slug,
      content: commentText,
    };

    setComments([...comments, newComment]);
  }

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

  if (isLoading) {
    <h2>Loading...</h2>;
  }

  if (error) {
    <h2>No data to load </h2>;
  }

  // Props übergeben an Kinder-Komponenten
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          artPieces={artPieces}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavoriteArtPiece}
          comments={comments}
          onAddComment={handleAddComment}
        />
      </Layout>
    </>
  );
}
