import "./widgets.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Widgets = () => {
  return (
    <div className="widget">
      <div className="left">

      <span className="title">USERS</span>
      <span className="counter">23231</span>
      <span className="link">see all users</span>
      </div>
   
      <div className="right">
          <div className="percentage positive"> <KeyboardArrowUpIcon/>20%</div>
          <PersonOutlinedIcon className="icon"/>

      </div>
    </div>
  )
}

export default Widgets
