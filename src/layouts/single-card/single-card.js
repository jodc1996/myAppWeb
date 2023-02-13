import React from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import './single-card.scss';
import { ColorBox } from 'devextreme-react';


export default function SingleCard({ title, description, color, children, data }) {
  return (
    <ScrollView height={'100%'} width={'100%'} className={'with-footer single-card'}>
      <div className={'dx-card'}>
        <div className={'header'}>
          <div className='group 1'>
            <div className={'title'}>{title}</div>
            <div className='d-flex justify-content-around'>
              <div className={'description'} style={{backgroundColor:color, width:"40%", height:"27px", marginLeft:"2%", borderRadius:"12px", textAlign:"center ", paddingTop:"4px"}}>{description}</div>
              <div className='speedGroup'>
                <div style={{border:"solid 1px grey", padding:"3px", height:"70%", borderRadius:"5px", backgroundColor:"white", boxShadow:"2px 2px 2px grey"}} className='d-flex justify-content-start'>
                  <label>Speed:</label>
                  <div style={{marginLeft:"3px"}}>{data.speed}</div>
                </div>	
              </div>
            </div>
            <hr style={{color: "#0056b2", margin:"10px"}} />
            <div className='d-flex justify-content-around'>
              <label>Active work order:</label>
              <label>Product:</label>
            </div>
            <div className='d-flex justify-content-around'>
              <label style={{border:"solid 1px grey", padding:"3px", height:"70%", borderRadius:"5px", backgroundColor:"white", boxShadow:"2px 2px 2px grey"}}>{data.wohnumber}</label>
              <label style={{border:"solid 1px grey", padding:"3px", height:"70%", borderRadius:"5px", backgroundColor:"white", boxShadow:"2px 2px 2px grey"}}>{data.matcode}</label>
            </div>
            <hr style={{ margin:"10px"}} />
            <div className='d-flex justify-content-around flex-column' style={{alignItems:"center"}}>
              <label>Product name:</label>
              <label style={{textAlign:"center" ,border:"solid 1px grey", padding:"3px", width:"90%", height:"70%", borderRadius:"5px", backgroundColor:"white", boxShadow:"2px 2px 2px grey"}}>{data.matname}</label>
            </div>
            <hr style={{color: "#0056b2", margin:"10px"}} />
            <div className='d-flex justify-content-around'>
              <label>Quality required:</label>
              <label>Quality Produced:</label>
            </div>
            <div className='d-flex justify-content-around'>
              <label style={{textAlign:"center", border:"solid 1px grey", padding:"3px", width:"30%", height:"70%", borderRadius:"5px", backgroundColor:"white", boxShadow:"2px 2px 2px grey"}}>{data.quantityrequired}</label>
              <label style={{textAlign:"center", border:"solid 1px grey", padding:"3px", width:"30%", height:"70%", borderRadius:"5px", backgroundColor:"white", boxShadow:"2px 2px 2px grey"}}>{data.quantityproduced}</label>
            </div>
          </div>
          <div>
          </div>
        </div>
        {children}
      </div>
    </ScrollView>
)}
