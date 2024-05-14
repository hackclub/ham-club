import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "Ham Club";
  const description = "Earn Your Callsign, Get a Free Radio.";
  const url = "https://ham.hackclub.com";
  const iconUrl = "/antenna1.png";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={iconUrl} />
      {url ? <meta property="og:url" content={url} /> : ""}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {children}
    </Head>
  );
}
