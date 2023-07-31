import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Head from "next/head";
import "app/globals.css";

function Index() {
    return (
        <>
            <Head>
                <title>Daniel Vieira</title>
            </Head>

            <div className="min-h-screen min-w-[600px] font-mono text-white">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Index;
