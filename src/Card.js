import React from "react";

export default function Card(props){
    return(
        <div className="Card">
        <div className="card-image">
        <img src="https://media.istockphoto.com/photos/convention-center-picture-id1191473912?k=20&m=1191473912&s=612x612&w=0&h=sNtI6dT5ieUCDbre7e7phO7KrZfX7hL_PFhhEttLkP0=" alt="js"/>
        </div>
        <div className="card-desc">
            <h3 className="event-head">{props.name}</h3>
            <div className="desc">
                <div className="flex-desc">
                <img width="20px" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/344/external-torch-camping-kiranshastry-lineal-kiranshastry.png" alt="img"/>
                <p>Radison Blue</p>
                </div>
                <div className="flex-desc">
                <img width="20px" src="https://img.icons8.com/ios/2x/clock.png"/>
                <p>{props.is_free?"Free":"Paid"}|{props.is_virtual?"Online":"Offline"}</p>
                </div>
            </div>
        </div>
    </div>
    )
}