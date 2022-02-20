import React from "react";
import BgIcon from "./images/bg-icon.png"

export function Top(){
    return (
        <div className="container">
            <img width="150px" src="https://konfhub.com/img/logo.svg" alt="tpo"/>
            <div className="container-desc">
                <div className="head-desc">
                    <h2>Events</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lorem dui, lobortis id suscipit sed, vestibulum et nibh. Sed et scelerisque sapien, non eleifend lorem. Donec ullamcorper dolor at nulla maximus molestie. Ut pretium diam non varius blandit. Pellentesque ut porttitor nunc. Nullam feugiat dictum turpis vel faucibus. Praesent in velit a nisl accumsan laoreet quis et odio. Vivamus vulputate nisi nec velit luctus, nec porta purus auctor. Suspendisse commodo ex non sapien ultricies mollis. Vestibulum placerat leo at nunc consequat egestas. Sed vel auctor nisi. Proin pellentesque elit eu velit mollis feugiat. Aliquam dapibus nulla eget consectetur auctor. Pellentesque venenatis aliquet cursus.</p>
                </div>
                <div className="img-desc">
                    <img src={BgIcon}/>
                </div>
                <div className="image-desc"></div>
            </div>
        </div>
    )
}