// import Sidebar from "../../components/sidebar/sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar></Sidebar>
      {/* <Sidebar></Sidebar> */}
      <MessageContainer></MessageContainer>
    </div>
  );
};

export default Home;
