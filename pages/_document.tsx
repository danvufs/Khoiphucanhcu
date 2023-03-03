import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Làm nét ảnh, lưu giữ những giây phút quý giá của bạn."
          />
          <meta property="og:site_name" content="" />
          <meta
            property="og:description"
            content="Làm nét ảnh, lưu giữ những giây phút quý giá của bạn."
          />
          <meta property="og:title" content="Làm nét ảnh cũ" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Làm nét ảnh cũ" />
          <meta
            name="twitter:description"
            content="Làm nét ảnh cũ của bạn."
          />
          <meta
            property="og:image"
            content=""
          />
          <meta
            name="twitter:image"
            content=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
