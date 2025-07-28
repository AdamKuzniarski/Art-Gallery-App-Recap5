import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <a></a>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
