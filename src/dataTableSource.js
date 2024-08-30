import { imageListItemClasses } from "@mui/material";


export const userColumns = [

    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230 ,


    renderCell: (params) => {

        return (
            <div className="CellWithImg">
             <img className="CellImage" src={params.row.img} alt=""/>
             {params.row.username}

            </div>
        )
          }
     },

     {
        field: 'email',
        headerName: 'Email',
      //  type: 'number',
        width: 230,
    },

    {
        field: 'age',
        headerName: 'Age',
        //type: 'number',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        //type: 'text',
        width: 160,

        renderCell: (params) => {

        return (
            <div className={`CellWithStatus ${params.row.status}`}>
           
         
             {params.row.status}

            </div>
          )
    }
    },

];





export const userRows = [

{
id:1,
username:"rahim",
img:"https://www.w3schools.com/images/w3schools_green.jpg",
status:"Approved",
email:"rahim@gmail.com",
age:35
},
{
    id:2,
    username:"rahim",
    img:"https://www.w3schools.com/images/w3schools_green.jpg",
    status:"Approved",
    email:"rahim@gmail.com",
    age:35
    },
    {
    id:3,
    username:"rakim",
    img:"https://www.w3schools.com/images/w3schools_green.jpg",
    status:"Approved",
    email:"rakim@gmail.com",
    age:45
    },
    {
    id:4,
    username:"rrr",
    img:"https://www.w3schools.com/images/w3schools_green.jpg",
    status:"Open",
    email:"rrr@gmail.com",
    age:50
    },
    {
    id:5,
    username:"rahim",
    img:"https://www.w3schools.com/images/w3schools_green.jpg",
    status:"Pending",
    email:"rahim@gmail.com",
    age:35
    },
    {
    id:6,
    username:"rahim",
    img:"https://www.w3schools.com/images/w3schools_green.jpg",
    status:"Pending",
    email:"rahim@gmail.com",
    age:35
    }

];
