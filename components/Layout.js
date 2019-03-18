import { withRouter } from 'next/router'
import Link from 'next/link'
import Router from 'next/router'
import Head from 'next/head'

const Layout = ({ children, title, description, backButton }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <div className="container">
      <nav>
        {backButton && (
          <span onClick={() => Router.back()} className="back-button">
            &#x2b05;
          </span>
        )}
        <Link href="/">
          <a>
            <span className="main-title">{title}</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>

    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        background: #f6f6ef;
      }

      nav {
        background: #f60;
        padding: 1em;
      }

      nav > * {
        display: inline-block;
        color: black;
      }

      nav a {
        text-decoration: none;
      }

      nav .main-title {
        font-weight: bold;
      }

      nav .back-button {
        font-size: 0.9rem;
        padding-right: 1em;
        cursor: pointer;
      }
    `}</style>

    <style global jsx>{`
      body {
        background: width;
        font-family: Verdana, Geneva, '微軟正黑體', sans-serif;
      }
    `}</style>
  </div>
)

export default withRouter(Layout)
