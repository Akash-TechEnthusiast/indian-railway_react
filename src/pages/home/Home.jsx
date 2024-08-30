import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import Charts from "../../components/charts/Charts";
import List from "../../components/list/List";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widgets />
          <Widgets />
          <Widgets />
          <Widgets />
        </div>

        <div className="charts">
          <Featured />
          <Charts aspect={2 / 1} title="Last 6 Moths Revenue Details" />

        </div>

        <div className="listContainer">
          <div className="listTitle">Last Trasactions List</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
