import Head from "next/head";

function Layout(props) {
  return (
    <div className="page-layout">
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width"
        />
        {/* title should be max 60 characters & do not use default for multiple pages*/}
        <title>Demo project with Nextjs - Tuyen Tran</title>
        {/* title should be max 150 characters & do not use default for multiple pages*/}
        <meta
          name="description"
          content="A team of creative &amp; energetic analysts in comming up with more and more innovative solutions serving global steel supply chain"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://example.com/favicon.png"
        />
        {/* Helps prevent duplicate content issues */}
        <link rel="canonical" href="https://mrssteel.com.vn/" />

          {/* Tìm cách download và nhúng font vào */}
          <link href="/static/fonts/cheltenham-normal-700.ttf" rel="stylesheet" />
          <link href="/static/fonts/imperial-normal-500.ttf" rel="stylesheet" />
        {/* ----------------Google fonts & animation css----------------- */}
        <link href="/static/css/animate.css" rel="stylesheet" />
        <link href="/static/css/hover.css" rel="stylesheet" />

        {/* Font Gentium */}
        <link
          href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic:700&display=swap"
          rel="stylesheet"
        />

        {/* Font Yesava  */}
        <link
          href="https://fonts.googleapis.com/css?family=Yeseva+One&display=swap"
          rel="stylesheet"
        />

        {/* Font Lato  */}
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
        {/* RSS Feed */}

        {/*  --------   Social Meta Tags ---------- */}
        <meta name="author" content="Danmio" />

        {/* Facebook */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MRS Vietnam - A Vietnamese supplier of both flat and long steel"
        />
        <meta
          property="og:description"
          content="A team of creative &amp; energetic analysts in comming up with more and more innovative solutions serving global steel supply chain"
        ></meta>
        <meta property="og:url" content="https://mrssteel.com.vn/" />
        <meta
          property="og:site_name"
          content="MRS Vietnam - A Vietnamese supplier of both flat and long steel"
        />
        <meta
          property="og:image"
          content="http://www.dammio.com/wp-content/uploads/2016/11/no-image-410x260.png"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="A team of creative &amp; energetic analysts in comming up with more and more innovative solutions serving global steel supply chain"
        />
        <meta
          name="twitter:title"
          content="Home - MRS Vietnam - A Vietnamese supplier of both flat and long steel"
        />
        <meta name="twitter:image" content="https://example.com/image.jpg" />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        {/* Google Analytics */}


        {/* Google Tag Manager */}
      </Head>

      
      {props.children}
    </div>
  );
}

export default Layout;
