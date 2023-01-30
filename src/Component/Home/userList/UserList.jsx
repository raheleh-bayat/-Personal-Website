import "./userList.css";
// import { DataGrid } from '@material-ui/data-grid';
import { DataGrid } from "@mui/x-data-grid";
import {DeleteOutline} from '@material-ui/icons';
import {userRows} from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react";

export const UserList = () => {
  const[data,setData]=useState(userRows);
  const handleDelete =(id)=>{
    setData(data.filter(item=>item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'user ', width: 200, renderCell: (params) =>{
        return(
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt=""/>
            {params.row.userName}
          </div>
        )
    } },
    { field: 'email', headerName: 'email', width: 200 },
    {
      field: 'status',
      headerName: 'status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field:'action',
      headerName:'Action',
      width: 150,
      renderCell: (params) => {
        return(
          <>
          <Link to={"/user/"+ params.row.id}>
              <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    },
  ];
  return (
    <main className="mt-5 pt-3">
      <div className="row-md-3 mb-3">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
      </div>
    </main>
  );
};
