import Head from "next/head";

function Layout(props) {
    return (
        <div className="page-layout">
            <Head>
               
                <link rel="stylesheet" href="/_next/static/style.css" />
                <meta charSet="UTF-8" />
                <title>Demo project with Nextjs - Tuyen Tran</title>
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width" />
                <meta name="description" content="A team of creative &amp; energetic analysts in comming up with more and more innovative solutions serving global steel supply chain" />
                <link rel="canonical" href="https://mrssteel.com.vn/" />
                <meta name="author" content="Danmio" />
                <meta property="og:title" content="Kết nối công nghệ và ngôn ngữ" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://www.dammio.com/" />
                <meta property="og:image" content="http://www.dammio.com/wp-content/uploads/2016/11/no-image-410x260.png" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="300" />
                <meta property="og:site_name" content="Dammio" />

                {/* <link href="%STATIC_URL%css/hover-min.css" rel="stylesheet" />
                <link href="%STATIC_URL%css/animate.css" rel="stylesheet" />
                <link href="%STATIC_URL%css/animate.css" rel="stylesheet" />
              */}
                {/* Google Font Gentium */}
                <link href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic:700&display=swap" rel="stylesheet" />

                {/* Google Font Yesava  */}
                <link href="https://fonts.googleapis.com/css?family=Yeseva+One&display=swap" rel="stylesheet" />

                {/* Google Font Lato  */}
                <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


            </Head>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
            {props.children}
           
        </div>
    )
}

export default Layout

