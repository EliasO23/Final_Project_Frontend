import NavHeader from "../../shared/components/NavHeader/NavHeader"
import Sidebar from "../../shared/components/Sidebar/Sidebar"
import "../../App.css"
import ArtistCardList from "../../artistsCardList/ArtistCardList"

const ArtistPage = () => {
    return (
        <>
            <div className="appContainer">
                <section className="sidebar">
                    <Sidebar />
                </section>
                <section className="mainContent">
                    <div className="navHeader">
                        <NavHeader />
                    </div>
                    <div>
                        <ArtistCardList/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ArtistPage