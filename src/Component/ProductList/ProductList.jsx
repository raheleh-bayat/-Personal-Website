import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import {DeleteOutline} from '@material-ui/icons';
import {productRows} from "../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react";

export const ProductList = () => {
const[data,setData]=useState(productRows)
const handleDelete =(id)=>{
  setData(data.filter(item=>item.id !== id))
}
const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'product', 
  headerName: 'product',
   width: 200,
    renderCell: (params) =>{
      return(
        <div className="productListItem">
          <img className="productListImg" src={params.row.img} alt=""/>
          {params.row.Name}
        </div>
      )
  } },
  { field: 'stoke', headerName: 'Stoke', width: 200 },
  {
    field: 'status',
    headerName: 'status',
    width: 120,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 160,
  },
  {
    field:'action',
    headerName:'Action',
    width: 150,
    renderCell: (params) => {
      return(
        <>
        <Link to={"/product/"+ params.row.id}>
            <button className="productListEdit">Edit</button>
        </Link>
        <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
        </>
      )
    }
  },
];
  return (
    <div className="productList">
      <main className="mt-5 pt-3">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
            </main>
            </div>
       
  );
};
  