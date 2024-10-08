import "./datatable.scss";
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { userRows, userColumns } from "../../dataTableSource";
import { Link } from 'react-router-dom';

const actionColumn = [
    {
        field: 'action', headerName: 'Action', width: 230,
        renderCell: (params) => {

            return (
                <div className="cellAction">


                    <Link to="/user/test" style={{ textDecoration: 'none' }}>
                        <div className="viewButton">View
                        </div>
                    </Link>

                    <div className="deleteButton">Delete
                    </div>
                </div>
            )
        }

    }]

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,

        renderCell: (params) => {

            return (
                <>
                    <span>{params.row.firstName}</span>
                    <span>{params.row.lastName}</span>

                </>
            )
        }

        // valueGetter: (params) =>
        //  `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const Datatable = () => {
    return (
        <div className="datatable">

            <div className="datatableTitle"> Add New User
                <Link to="/user/new" className="link" >
                    Add New
                </Link>
            </div>


            <DataGrid className="datagrid"
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />

        </div>
    )
}
export default Datatable