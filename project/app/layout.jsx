import '@styles/globals.css';

export const metadata = {
  title: "Boss Prompts",
  description: "Discover & Share AI Prompts"
}



const Layout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className='gradient' />
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}
export default Layout;