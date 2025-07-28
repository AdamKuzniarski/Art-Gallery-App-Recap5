import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
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
      <Component {...pageProps} artPieces={artPieces || []} />
    </Layout>
  );
}
