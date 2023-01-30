import React from 'react'
import "./widgetSm.css"
import {Visibility} from '@material-ui/icons/';
import img from "../../img/pexels.jpg"
export default function widgetSm() {
  return (
    <div className='widgetSm'>
       <span className='widgetSmTitle'>New Join Members</span>
       <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img  src={img} alt='' className='widgetSmImg'/>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Ann Kaler</span>
            <span className='widgetSmUserTitle'>SoftWare Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>

        <li className='widgetSmListItem'>
          <img  src={img} alt='' className='widgetSmImg'/>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Ann Kaler</span>
            <span className='widgetSmUserTitle'>SoftWare Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img  src={img} alt='' className='widgetSmImg'/>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Ann Kaler</span>
            <span className='widgetSmUserTitle'>SoftWare Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img  src={img} alt='' className='widgetSmImg'/>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Ann Kaler</span>
            <span className='widgetSmUserTitle'>SoftWare Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img  src={img} alt='' className='widgetSmImg'/>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Ann Kaler</span>
            <span className='widgetSmUserTitle'>SoftWare Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
       </ul>
    </div>
  )
}
