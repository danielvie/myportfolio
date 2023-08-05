import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Main from "@/app/components/main";
import Head from "next/head";
import "app/globals.css";

function Index() {
    return (
        <>
            <Head>
                <title>Daniel Vieira</title>
                <meta name="description" content="System Engineer"></meta>
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
