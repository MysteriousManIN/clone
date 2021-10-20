"use strict";

const { createElement:E, Fragment } = React;

function Main(props){

    return E("main", { className:"main" }, 
        E(Main_Block1, { tagLine:props.tagLine }),
        E(Main_Block2, null)
    );

};

function Main_Block1(props){

    return E("div", { className:"block1" },
        E("div", { className:"insta-name-logo" }),
        E("div", { className:"tag-line" }, props.tagLine),
        E("div", { className:"gta" }, "Get the app"),
        E("span", { className:"app-store-btns" },
            E("button", { id:"google-play-btn", type:"button", onClick:()=>{ window.open("https://google.com"); } }),
            E("button", { id:"apple-store-btn", type:"button", onClick:()=>{ window.open("https://google.com"); } })
        )
    );

};

function Main_Block2(){

    return E("div", { className:"block2" },
        E("div", { className:"insta-logo" }),
        E(LogInForm, null),
        E("div", { className:"or-hr-line" }, E("span", null, "or")),
        E("button", { id:"liwfb", type:"button" }, E("span", null), E("span", null, "Log in with Facebook")),
        E("span", { className:"dhaa" }, "Don't have an account? ", E("a", { href:"" }, "Sign Up"))
    );

};

function LogInForm(){

    const submit = (e)=>{
        e.preventDefault();
        //console.log($(e.target).serialize());
        ReactDOM.render(E(Fragment, null, E(ErrorBox, null)), $("#error-block")[0]);
    };

    const keyUp = (e)=>{
        let count = 0;
        $("form input[type!=submit]").each((i,v)=>{ if(v.value !== "") count++; });
        if(count === 2) $("form input[type=submit]")[0].disabled = false;
        else $("form input[type=submit]")[0].disabled = true;
    }

    return E("form", { className:"log-in-form", method:"post", onSubmit:submit, onKeyUp:keyUp },
        E("div", { className:"input-block" },
            E("input", { id:"username", /*name:"username",*/ type:"text", placeholder:"Phone number, username, or email", spellCheck:false, autoFocus:true, required:true }),
            E("label", { htmlFor:"username" }, "Phone number, username, or email")
        ),
        E("div", { className:"input-block" },
            E("input", { id:"pswd", /*name:"pswd",*/ type:"password", placeholder:"Password", spellCheck:false, autoComplete:"none", required:true }),
            E("label", { htmlFor:"pswd" }, "Password"),
            E("a", { href:"" }, "Forgot password?")
        ),
        E("input", { type:"submit", value:"Log In", disabled:true })
    );

}

function ErrorBox(){

    $("#error-block").addClass("isActive");

    const close = ()=>{
        $("#error-block").removeClass("isActive");
        ReactDOM.render(null, $("#error-block")[0]);
    };

    return E("div", { className:"error-box" },
        E("div", { className:"msg-block" },
            E("h6", null, "Incorrect Password"),
            E("div", null, "The password you entered is incorrect. Please try again.")
        ),
        E("button", { type:"button", onClick:close }, "Try Again")
    );

}


function Footer(props){

    const List = (props)=>{

        return E("ul", { className:"footer-links" }, ...props.links.map(i=>{ 
            return E("li", null, E("a", { href:i[1] }, i[0])) 
        }));

    };

    return E("footer", { className:"footer" },
        E("div", { className:"fromFb" }),
        E("div", { className:"x" },
            E(List, { links:props.footerLinks }),
            E("div", { className:"copyright-block" }, `\xA9 ${new Date().getFullYear()}, Instagram from Facebook`)
        )
    );

}


export { Main, Footer };