import React from 'react';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar'
import Blogs from '../../components/Blogs'

const HomePage = () => {
  return (
    <div>
      <NavBar />

      <div style={{display:'flex', width:'90%', margin:'auto'}}>
      <Blogs />
      <SideBar  />
      </div>
    </div>
  );
};

export default HomePage;
