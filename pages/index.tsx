import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Main from "@/app/components/main";
import "app/globals.css";

function Index() {
    return (
        <>
            <div className="font-mono min-h-screen">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Index;
