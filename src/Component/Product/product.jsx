import './product.css';
import {Link} from "react-router-dom";
import {Chart} from "../../Component/Chart/chart"
import {productData} from "../../dummyData"
import img from "../../img/Aairpod.jpg";

export const Product = () => {
  return (
    <div className='product'>
       <main className="mt-5 pt-3">
        <div className='productTitleContainer'>
          <h1 className='productTitle'>product</h1>
          <Link to="/newproduct">
          <button className='productAddButton'>create</button>
          </Link>
        </div>
        <div className='productTop'>
          <div className='productTopLeft'>
            <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className='productTopRight'>
            <div className='productInfoTop'>
              <img src={img} alt="" className='productInfoImg'/>
              <span className='productName'>Apple Airpods</span>
            </div>
            <div className='productInfoBottom'>

            <div className='productInfoItem'>
            <span className='productInfoKey'>id:</span>  
            <span className='productInfoValue'>123</span>  
          </div>   

          <div className='productInfoItem'>
            <span className='productInfoKey'>Sales:</span>  
            <span className='productInfoValue'>5123</span>  
          </div>  

          <div className='productInfoItem'>
            <span className='productInfoKey'>active:</span>  
            <span className='productInfoValue'>yes</span>  
          </div>  

          <div className='productInfoItem'>
            <span className='productInfoKey'>in stock</span>  
            <span className='productInfoValue'>no</span>  
          </div>  
            </div>
          </div>
        </div>
        {/* <div className='productInfoBottom'></div> */}
       </main>
       
    </div>
  )
}
