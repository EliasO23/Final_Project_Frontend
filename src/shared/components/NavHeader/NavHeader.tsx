import styles from "./NavHeader.module.css"
import user from "../../../assets/img/User.avif"
import { MdOutlineNavigateBefore } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

const NavHeader = () => {
    return (
        <>
            <section className={styles.header}>
                <button className={styles.backButton}><MdOutlineNavigateBefore/></button>
                <section className={styles.rightSection}>
                    <button className={styles.upgradeButton}>Upgrade</button>
                    <div className={styles.profile}>
                        <img
                            src= {user}
                            alt="Profile"
                        />
                        <section className={styles.profileDetails}>
                            <h4>Albert Williams</h4>
                            <h5>Account</h5>
                        </section>
                    </div>
                    <button className={styles.notificationButton}><FaRegBell/></button>
                </section>
            </section>
        </>
    )
}

export default NavHeader