import React from 'react'
import {Chart} from "../Chart/chart"
import {userData} from "../../dummyData"
import WidgetSm from "../WidgetSm/widgetSm";
import WidgetLg from "../WidgetLg/widgetLg" 
export const Tapbar = () => {
  return (
    <div>
         <main className="mt-5 pt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 fw-bold fs-3">Dashboard</div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card text-white bg-primary h-100">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Primary card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card text-white bg-primary h-100">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Primary card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card text-white bg-warning h-100">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Primary card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card text-white bg-danger  h-100">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Primary card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>                    
        </div>
        <Chart data={userData} title="user Analyistics" grid dataKey="Active User" /> 
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
      </main> 
     
    </div>
  )
}
