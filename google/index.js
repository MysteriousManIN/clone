"use strict";

$(()=>{

  const LANG = [ "हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்" , "ગુજરાતી" , "ಕನ್ನಡ" , "മലയാളം" , "ਪੰਜਾਬੀ" ];
  const GOOGLE_APP = [
    { text:"Account", icon:"account" },
    { text:"Assistant", icon:"assistant" },
    { text:"Google", icon:"g" },
    { text:"Maps", icon:"maps_2020" },
    { text:"YouTube", icon:"youtube_play_button_2013" },
    { text:"Play", icon:"playstore_2020" },
    { text:"News", icon:"news" },
    { text:"Gmail", icon:"gmail_2020" },
    { text:"Meet", icon:"meet_2020" },
    { text:"Chat", icon:"chat_2020" },
    { text:"Contacts", icon:"contacts" },
    { text:"Drive", icon:"drive_2020" },
    { text:"Calendar", icon:"calendar_2020" },
    { text:"Translate", icon:"translate" },
    { text:"Photos", icon:"photos_2020" },
    { text:"Duo", icon:"duo" },
    { text:"Shopping", icon:"shopping" },
    { text:"Docs", icon:"docs_2020" },
    { text:"Sheets", icon:"sheets_2020" },
    { text:"Slides", icon:"slides_2020" },
    { text:"Forms", icon:"forms_2020" },
    { text:"Podcasts", icon:"podcasts" }
  ];
  const MENU_ITEM = [
    { text:"Home", icon:"home" },
    { text:"Search history", icon:"history" },
    { text:"Collection", icon:"featured_play_list" },
    { text:"Offline searches", icon:"search" },
    { text:"Settings", icon:"settings" },
    { text:"Your data in search", icon:"manage_search" },
    { text:"Hide explicit results", icon:"explicit" },
    { text:"Dark theme", icon:"dark_mode" },
    { text:"How Search work", icon:"plagiarism" },
    { text:"Help", icon:"help" },
    { text:"Send feedback", icon:"feed" }
  ];

  for(let i in LANG){
    $("#langs > div").append($("<a>", { href:"" }).text(LANG[i]));
  }

  for(let i in GOOGLE_APP.reverse()){
    $("#google_apps").prepend(
      $("<a>", { href:"" }).append(
        $("<span>").css("background-image", `url(https://vectoricons.com/vicons/svg/icon/google/${GOOGLE_APP[i].icon}.svg)`),
        $("<span>").text(GOOGLE_APP[i].text)
      )
    );
  }

  for(let i in MENU_ITEM){
    $("#menu").append(
      $("<button>", { type:"button" }).append(
        $("<span>", { class:"material-icons" }).text(MENU_ITEM[i].icon),
        $("<span>").text(MENU_ITEM[i].text)
      )
    );
  }


  $("#google_apps_btn").on("click", ()=>{
    $("#google_apps").toggleClass("is_active");
  });

  $("#menu_btn").on("click", ()=>{
    $("#menu").toggleClass("is_active");
    if($("#menu").attr("class").includes("is_active")){
      $("#menu_btn").text("clear_20");
    }else{
      $("#menu_btn").text("hamburger_20x12");
    }
  });

  $(document).on("click", (e)=>{
    let menu, menu_btn, google_apps, google_apps_btn;
    
    menu = $("#menu");
    menu_btn = $("#menu_btn");
    google_apps = $("#google_apps");
    google_apps_btn = $("#google_apps_btn");

    if(!$(e.target).closest(menu).length && !$(e.target).closest(menu_btn).length){
      $(menu).removeClass("is_active");
      $("#menu_btn").text("hamburger_20x12");
    }

    if(!$(e.target).closest(google_apps).length && !$(e.target).closest(google_apps_btn).length){
      $("#google_apps").removeClass("is_active");
    }
    
  });

});