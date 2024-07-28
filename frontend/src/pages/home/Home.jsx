import React from "react";
import Siderbar from "../../components/Siderbar";
import MessagesContainer from "../../components/messages/MessagesContainer";

const Home = () => {
  return (
    <div className="flex sm:-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Siderbar />
      <MessagesContainer />
    </div>
  );
};

export default Home;
