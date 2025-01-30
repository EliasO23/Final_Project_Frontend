import ListSongs from "../../listSongs/ListSongs"
import NavHeader from "../../shared/components/NavHeader/NavHeader"
import Sidebar from "../../shared/components/Sidebar/Sidebar"
import SongCard from "../../SongCard/SongCard"
import '../../App.css';

const HomePage = () => {
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
                    <section className="containerMain">
                        <div>
                            <ListSongs />
                        </div>
                        <div className="content">
                            <SongCard />
                        </div>
                    </section>
                </section>
            </div>
        </>
    )
}

export default HomePage