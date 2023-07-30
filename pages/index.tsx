import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Main from "@/app/components/main";
import "app/globals.css";

function Index() {
    return (
        <>
            <div className="min-h-screen min-w-[600px] font-mono text-white">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Index;
