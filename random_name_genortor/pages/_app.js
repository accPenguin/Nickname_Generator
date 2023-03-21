import '../styles/globals.css'
import Image from 'next/image'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div id="app">
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="随机昵称生成器" />
        <meta name="description" content="一个随机的词组生成器" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="" />
        <meta name="msapplication-TileColor" content="#555" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#555" />

        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="随机昵称生成器" />
        <meta name="twitter:description" content="一个随机的词组生成器" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="随机昵称生成器" />
        <meta property="og:description" content="一个随机的词组生成器" />
        <meta property="og:site_name" content="随机昵称生成器" />
        

        <title>随机昵称生成器</title>
      </Head>
      <header>
        <nav className="fixed top-0 inset-x-0 flex justify-between p-4 select-none hidden md:block">
          <div className="flex items-center gap-2">
            <Image src="/favicon.ico" width={40} height={40} />
            <span className="font-bold text-xl">随机昵称生成器</span>
          </div>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
    
  )
}
