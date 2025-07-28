import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Link></Link>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
