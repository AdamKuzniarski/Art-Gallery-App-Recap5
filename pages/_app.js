import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import useSWR from "swr";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}


const fetcher = (url) => fetch(url).then((response) => response.json());


export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  //console.log("favorites:", favorites);
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
