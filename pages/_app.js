import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  //NEU: State für alle Kommentare, als Objekt gespeichert
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: {} }
  );


  //NEU: Function, um einen Kommentar zu einem bestimmten Bild hinzufügen

  function handleAddComment(slug, newComment) {
    const currentInfo = artPiecesInfo[slug] || {comments: []}
    setArtPiecesInfo({
      ...artPiecesInfo, [slug]: {
        ...currentInfo, 
        comments: [... currentInfo.comments, newComment],
      },
    })
  }

  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  function handleToggleFavorite(slug) {
    if (favorites.includes(slug)) {
      setFavorites(favorites.filter((favorite) => favorite !== slug));
    } else {
      setFavorites([...favorites, slug]);
    }
  }

  function isFavoriteArtPiece(piece) {
    if (favorites.includes(piece.slug)) {
      return true;
    }
    return false;
  }
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

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces || []}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={isFavoriteArtPiece}
      />
    </Layout>
  );
}
