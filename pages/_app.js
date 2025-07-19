import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>UltraResearch &mdash; AI-powered Market Research Platform</title>
        <meta
          name="description"
          content="UltraResearch delivers real-time market insights, automated analysis, and actionable recommendations. Unlock smarter decisions with our sleek, secure, AI-powered research dashboard."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
