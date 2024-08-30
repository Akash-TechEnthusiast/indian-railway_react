import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import "./navbar.scss";
const Navbar = () => {
       return (
              <div className="navbar">
                     <div className="wrapper">
                            <div className="search">
                                   <input type="search" placeholder="search..."></input>
                                   <SearchOutlinedIcon />
                            </div>




                            <div className="items">
                                   <div className="item">
                                          <LanguageOutlinedIcon className="icon" />English
                                   </div>

                                   <div className="item">
                                          <NotificationsNoneIcon className="icon" />

                                          <div className="center">1</div>
                                   </div>

                                   <div className="item">
                                          <ChatBubbleOutlineOutlinedIcon className="icon" />

                                          <div className="center">12</div>
                                   </div>
                                   <div className="item">
                                          <NightsStayOutlinedIcon className="icon" />
                                   </div>
                                   <div className="item">
                                          <ListOutlinedIcon className="icon" />
                                   </div>


                                   <div className="item">
                                          <img src=
                                                 "https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"
                                                 alt="GeeksforGeeks logo" className="avatar"></img>
                                   </div>




                            </div>
                     </div>
              </div>


       )
}

export default Navbar
