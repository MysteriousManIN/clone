"use strict";

import "http://localhost:7070/my-work/offline-file/cdn/google/jQuery/google_jquery.min.js";
import "http://localhost:7070/my-work/offline-file/cdn/react/v17.0.2/react.development.js";
import "http://localhost:7070/my-work/offline-file/cdn/react/v17.0.2/react-dom.development.js";
import "./app.js";
import { Main, Footer } from "./component.js";

const { createElement:E, Fragment } = React;


const footerLinks = [
    ["About", "https://about.instagram.com/"],
    ["Blog", "https://about.instagram.com/blog/"],
    ["Jobs", "https://www.instagram.com/about/jobs/"],
    ["Help", "https://help.instagram.com/"],
    ["API", "https://developers.facebook.com/docs/instagram"],
    ["Privacy", "https://www.instagram.com/legal/privacy/"],
    ["Terms", "https://www.instagram.com/legal/terms/"],
    ["Top Accounts", "https://www.instagram.com/directory/profiles/"],
    ["Hashtags", "https://www.instagram.com/directory/hashtags/"],
    ["Locations", "https://www.instagram.com/explore/locations/"],
    ["Instagram Lite", "https://www.instagram.com/web/lite/"],
    ["Beauty", "https://www.instagram.com/topics/beauty/"],
    ["Dance", "https://www.instagram.com/topiconClick:()=>{ $s/dance-and-performance/"],
    ["Fitness", "https://www.instagram.com/topics/dance-and-performance/"],
    ["Food & Drink", "https://www.instagram.com/topics/food-and-drink/"],
    ["Home & Garden", "https://www.instagram.com/topics/food-and-drink/"],
    ["Music", "https://www.instagram.com/topics/food-and-drink/"],
    ["Visual Arts", "https://www.instagram.com/topics/food-and-drink/"]
];

$(()=>{
    window.setTimeout(()=>{

        ReactDOM.render(
            E(Fragment, null, 
                E(Main, { tagLine:"Sign up to see photos and videos from your friends." }),
                E(Footer, { footerLinks:footerLinks }),
                E("div", { id:"error-block" })
            ), $("#root")[0]
        );
        
    }, 500);
});