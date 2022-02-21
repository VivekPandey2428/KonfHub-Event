import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const BaseUrl='https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events'
export  function Data(){
    const [val,setVal]=useState([]);
    const [cnt,setcnt]=useState(10);
    const [searchText,setSearchText]=useState('');
    const [clickedval,setClickedval]=useState(false);
    const [dropDownValue,setDropDownValue]=useState(true);
    function handleChange(event){
        setSearchText(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        setClickedval(true);
    }
    function handleDropDownChange(event){
        setDropDownValue(prev=>{
            if(event.target.value==="False"){
                setDropDownValue(false);
            }
            else{
                setDropDownValue(true);
            }
        });
    }
    async function getVal(){
        try {
            console.log(dropDownValue);
            const res = await axios.get(
              `${BaseUrl}?search_query=${searchText}&past_events=${dropDownValue}&limit=${cnt}`
            );
            setVal(res.data.events);
            return res;
          } catch (err) {
            console.log(err);
          }
    }
    useEffect(()=>{
        getVal();
    },[cnt,dropDownValue,searchText])
    function LoadMore(){
        setcnt(prev=>prev+12);
    }
    console.log(val);
        return(
            <div className="Collection">
             <div className="Search-Input">
                 <div className="Search-bar">
                     <form onSubmit={handleSubmit}>
                     <p>Search</p>
                     <input type="text" value={searchText} onChange={handleChange} />
                     <button className="search-icon"><img height="15px"width="15px" src="https://img.icons8.com/material-outlined/2x/search-client.png"alt="search"/></button>
                     </form>
                 </div>
                 <div className="Past-events">
                     <p>Past Events</p>
                     <select  onChange={handleDropDownChange} className="dropdown">
                         <option value="True">True</option>
                         <option value="False">False</option>
                     </select>
                 </div>
             </div>
             <div className="Elements">
                <h2 className="cursive">Events</h2>
                <div className="Card-flex">
                {
                  val.map((data)=>{
                      return(
                          <Card key={data.event_id} {...data}/>
                      )
                  })
                }
                </div>
             </div>
            <div className="load-button">
                <button className="load" onClick={LoadMore}>Load More</button>
            </div>
            </div>
        )
}