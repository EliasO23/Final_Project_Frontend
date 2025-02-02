import ListUsers from "../../listUsers/ListUsers";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import NavHeader from "../../shared/components/NavHeader/NavHeader";


const UsersList = () => {

  return (
    <div>
      <div className="appContainer">
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="mainContent">
          <div className="navHeader">
            <NavHeader />
          </div>
          <div>
            <ListUsers />
          </div>
        </section>
      </div>


    </div>
  );
};

export default UsersList;
