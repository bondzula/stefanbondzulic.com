import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Stefan Bondzulic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl mb-8 font-semibold">
          Welcome to my personal site
        </h1>

        <p>My name is Stefan, and this is just a simple test of serverless framework</p>
      </main>
    </div>
  )
}
