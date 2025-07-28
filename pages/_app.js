import { useState } from "react";
import { useEffect } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);
  async function loadGallery() {
    try {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();
      console.log(data);
      setArtPieces(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadGallery();
  }, []);

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} artPieces={artPieces} />
    </Layout>
  );
}
