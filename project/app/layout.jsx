import '@styles/globals.css';
//import '@public/assets3/images/grid.svg'

export const metadata = {
  title: "Boss Prompts",
  description: "Discover & Share AI Prompts"
}



const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}
export default RootLayout;