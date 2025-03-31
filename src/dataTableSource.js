import { imageListItemClasses } from "@mui/material";


export const userColumns = [

    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user', headerName: 'User', width: 230,


        renderCell: (params) => {

            return (
                <div className="CellWithImg">
                    <img className="CellImage" src={params.row.img} alt="" />
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
        field: 'country',
        headerName: 'Country',
        //type: 'number',
        width: 100,
    },
    {
        field: 'state',
        headerName: 'State',
        //type: 'number',
        width: 100,
    },
    {
        field: 'village',
        headerName: 'Village',
        //type: 'number',
        width: 100,
    },
    {
        field: 'pincode',
        headerName: 'Pincode',
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
        id: 1,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",
    },
    {
        id: 2,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 3,
        username: "rakim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rakim@gmail.com",
        age: 45,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 4,
        username: "rrr",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Open",
        email: "rrr@gmail.com",
        age: 50,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 5,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Pending",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 6,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Pending",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana"
        ,
        village: "India",
        pincode: "509103",

    },
    {
        id: 7,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 8,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",
        zincode: "509103"
    },
    {
        id: 9,
        username: "rakim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rakim@gmail.com",
        age: 45,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 10,
        username: "rrr",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Open",
        email: "rrr@gmail.com",
        age: 50,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 11,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Pending",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 12,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Pending",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana"
        ,
        village: "India",
        pincode: "509103",

    },

    {
        id: 13,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 14,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 15,
        username: "rakim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rakim@gmail.com",
        age: 45,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 16,
        username: "rrr",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Open",
        email: "rrr@gmail.com",
        age: 50,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 17,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Pending",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 18,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Pending",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana"
        ,
        village: "India",
        pincode: "509103",

    },
    {
        id: 19,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 20,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 21,
        username: "rakim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Approved",
        email: "rakim@gmail.com",
        age: 45,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 22,
        username: "rrr",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Open",
        email: "rrr@gmail.com",
        age: 50,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 23,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Pending",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana",
        village: "India",
        pincode: "509103",

    },
    {
        id: 24,
        username: "rahim",
        img: "https://www.w3schools.com/images/w3schools_green.jpg",
        status: "Pending",
        email: "rahim@gmail.com",
        age: 35,
        country: "India",
        state: "Telangana"
        ,
        village: "India",
        pincode: "509103",

    }

];
