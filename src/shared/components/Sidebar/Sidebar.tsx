import styles from './Sidebar.module.css'
import { GoHomeFill } from "react-icons/go";
import logo from '../../../assets/img/Kodigo_Music.png';
import { BiSolidPlaylist } from "react-icons/bi";
import { HiMiniUsers } from "react-icons/hi2";
import { FaHeadphones } from "react-icons/fa6";
import { IoAlbumsOutline } from "react-icons/io5";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (

        <nav className={styles.sidebar}>
            <div>
                <section className={styles.logo}>
                    <img src={logo} alt="Logo_KodigoMusic" />
                    <h4>Music</h4>
                </section>
                {/* <section className={styles.search}>
                    <input type="text" placeholder="Search"/>
                </section> */}
            </div>

            <div className={styles.sidebar_menu}>
                <h3>Menu</h3>
                <ul>
                    <Link to={'/'}>
                        <li><i><GoHomeFill /></i> <span>Home</span></li>
                    </Link>
                    <li><i><BiSolidPlaylist /></i><span>Playlists</span></li>
                    <Link to={'/artist'}>
                        <li><i><HiMiniUsers /></i> <span>Artists</span></li>
                    </Link>
                    <li><i><FaHeadphones /></i> <span>Composers</span></li>
                </ul>
            </div>

            <div className={styles.sidebar_library}>
                <h3>Library</h3>
                <ul>
                    <Link to={'/music'}>
                        <li><i><IoAlbumsOutline /></i> <span>Albums</span></li>
                    </Link>
                    <li><i><MdOutlineLibraryMusic /></i> <span>Songs</span></li>
                    <li><i><FaPhotoVideo /></i> <span>Music Videos</span></li>
                </ul>
            </div>

            <div className={styles.sidebar_other}>
                <h3>Other</h3>
                <ul>
                    <li><i><IoSettingsOutline /></i> <span>Settings</span></li>
                    <Link to='/users'>
                        <li><i><CiUser /></i> <span>Users</span></li>
                    </Link>
                    <Link to='/login'>
                        <li><i><IoLogInOutline /></i> <span>Log out</span></li>
                    </Link>
                </ul>
            </div>
        </nav>

    )
}

export default Sidebar