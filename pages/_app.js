import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
     <>
      <p>Hello A</p>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
