import Head from "next/head";


const Layout = ({ children, headerText, footerText, headerColor, mainColor, footerColor }) => {
    const colorClasses = {
      header: `${headerColor}`,
      main: `${mainColor}`,
      footer: `${footerColor}`,
    };
  
    return (
      <div className="min-h-screen flex flex-col">
        <Head>
          <title>subDomain</title>
        </Head>
  
        <header className={`${colorClasses.header} p-4`}>
          <nav className="container mx-auto">
            <h1 className="text-2xl font-bold text-white">{headerText}</h1>
          </nav>
        </header>
  
        <main className={`${colorClasses.main} container mx-auto flex-grow p-4`}>
          {children}
        </main>
  
        <footer className={`${colorClasses.footer} p-4 text-center`}>
          <div className="container mx-auto text-black">
            &copy; {new Date().getFullYear()} {footerText}
          </div>
        </footer>
      </div>
    );
  };
  
  export default Layout;
  