import React from 'react'

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from '../../components/datatable/Datatable';
const ListView = () => {
  return (



    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <Datatable />
      </div>

    </div>

  )
}

export default ListView
