import "./featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className="featured" >


      <div className="top">
         <div className="title">Total Revenue</div>
         <MoreVertOutlinedIcon fontSize="small" className="moreVert"/>
      </div>

        

      <div className="bottom">

          <div className="featuredChart">

      <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
      
      </div>
      <p className="title">Total sales made today</p>
      <p className="amount">$420</p>
      <p className="desc">Last Trasactions are processing Last payments may not be Included</p>



      <div className="summary"> 

<div className="item">
<div className="itemTitle">Target</div>
<div className="itemResult positive">
<KeyboardArrowUpIcon fontsize="small"/>
<div className="resultamount">$20k</div>
</div>
</div>

<div className="item">
<div className="itemTitle">Last Week</div>
<div className="itemResult positive">
<KeyboardArrowUpIcon fontsize="small"/>
<div className="resultamount">$20k</div>
</div>
</div>


<div className="item">
<div className="itemTitle">Last Month</div>
<div className="itemResult positive">
<KeyboardArrowUpIcon fontsize="small"/>
<div className="resultamount">$20k</div>
</div>
</div>

</div>

      </div>

    </div>
  )
}

export default Featured
