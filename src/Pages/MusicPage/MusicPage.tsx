import FormSearchMusic from "../../formSearchMusic/FormSearchMusic"
import NavHeader from "../../shared/components/NavHeader/NavHeader"
import Sidebar from "../../shared/components/Sidebar/Sidebar"

const MusicPage = () => {
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
                        <FormSearchMusic />
                    </div>
                </section>
            </div>
            
        </>
    )
}

export default MusicPage