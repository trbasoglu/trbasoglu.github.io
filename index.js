var workExperiences = {
    "PulpoAR":{
        "role":"Computer Vision Engineer & RD Team Lead",
        "logo":"images/pulpoar__logo.svg",
        "accent-color":"#5B0097",
        "timeline":"Nov 2019-now",
        "exp":[
            "I took critical roles in the company and the company is acquired in less than 3 years.",
            "Machine learning model development on face landmark and segmentation. (Keras, Tensorflow)",
            "Developing Labelling tools.(Python, Html,CSS,JavaScript, Aws Groundtruth)",
            "ML model and algorithm deployment on different environments like Web client(tfjs, c++ emscripten wasm), server(Aws Lambda, GCP Cloud Run&Functions, Python, Flask, Fastapi), apps",
            "Developing core image processing algorithms for try-on solutions and professional photo edit mobile app. (C++, Python, OpenCV)",
            "Flutter app development",
            "Development of first versions of the virtual try-on plugin (Django, Js, CSS, Html, Aws)"
        ],
        "location":"İzmir, Turkiye",
        "url":"https://pulpoar.com"
    },
    "NKR Software":{
        "role":"Machine Learning - Intern",
        "logo":"images/nkrlogo.png",
        "accent-color":"#F3CE1F",
        "timeline":"Feb-Mar 2019",
        "exp":[
            "Plate detection and recognition software developed. (Keras, Tensorflow, OpenCV)",
            "An optical character recognition system was developed. (Sklearn)",
            "Data Labelling & analyzing."
        ],
        "location":"Ankara, Turkiye",
        "url":"https://www.nkr.com.tr"
    },
    "Mentornity":{
        "role":"Android Developer - Intern",
        "logo":"images/mentornity.png",
        "accent-color":"#B00021",
        "timeline":"Jul-Aug 2018",
        "exp":[
            "Take a role in developing the Ecosystem Feed application. (Java, Native Android)",
            "OneSignal, Firebase, and Linkedin API are used.",
            "Playstore app publishing processes are learned."
        ],
        "location":"İstanbul, Turkiye",
        "url":"https://www.mentornity.com"
    }
}

var projects = [
    {
        "image":"images/teknofest.png",
        "title":"Teknofest AI 2019",
        "exp":["We qualified for the finals for the first 50 teams and placed 15th.",
        "RFCN, RCNN, SSD, YOLO, and FPN models research and comparison were done.",
        "RFCN, RCNN, and Yolo models were trained and evaluated.",
        "Tensorflow, OpenCV, sklearn, and darknet were used."]
    },
    {
        "image":"images/pexels-pixabay-267350.jpg",
        "title":"Android Apps",
        "exp":["I've developed more than 10 apps.",
        "I publish my apps on Google Play Store",
        "I've developed with native Android SDK(Java) and Flutter(Dart)"]
    }
]

var cv_projects = [
    {
        "image":"/images/city.jpeg",
        "title":"Prediction Of Life Qualities",
        "exp":["The project aims to predict the life quality of a city by using numerical data.",
        "Project blogged every week on medium.",
        "85 features(Hospital, school, park numbers per capita, etc.) are extracted from JSON files.",
        "Classification and regression  models were developed.",
        "SVM, Decision Tree, and Random forest algorithms were used."]
    },
    {
        "image":"images/car-road.jpg",
        "title":"WAD Video segmentation",
        "exp":[
            "It is a segmentation task containing cars, roads, sky and etc.",
            "U-net model is used.",
            "30GB(20 training-10test) data was used for training and evaluation.",
            "Keras ve tensorflow is used."
        ]
    },
    {
        "image":"images/drone.jpg",
        "title":"Graduation project",
        "exp":[
            "It is a UAV project that includes Remote Pilot Station(RPS), a Fly control system(FCS), and object tracking systems.",
            "UAV could not complete because of a fly accident.",
            "Data communication between Raspberry pi-RPS ",
            "Tracking Algorithms(MIL, KCF, TLD, MEDIANFLOW, GOTURN, MOSSE,CSRT) research and application",
            "Data production for car detection",
            "Tests on raspberry pi."
        ]
    },
    {
        "image":"images/plate.jpg",
        "title":"Intern/Plate Recognition System",
        "exp":[
            "Project completed in 3 weeks.",
            "Plate Detection&Recognition system developed.",
            "Data preparation and OCR system development is done because of tesseract is not stable enough.",
            "1200 images labeled and trained.",
            "Rcnn and yolo models were used.",
            "Darknet, Keras, and OpenCV were used."
        ]
    },
    
    {
        "image":"images/teknofest.png",
        "title":"Teknofest AI 2019",
        "exp":["We qualified for the finals for the first 50 teams and placed 15th.",
        "RFCN, RCNN, SSD, YOLO, and FPN models research and comparison were done.",
        "RFCN, RCNN, and Yolo models were trained and evaluated.",
        "Tensorflow, OpenCV, sklearn, and darknet were used."]
    },
    {
        "image":"images/captcha_sample.jpg",
        "title":"Captha Resolve Algorithm",
        "exp":[
            "Random symbols are placed randomly placed on the random images with random colors and ratios. The task is to find places of symbols given order.",
            "Template matching, surf matching, object detection, and classification algorithms were used to solve problems.",
            "The above algorithms were used together by a voting mechanism.",
            "Efficientnet was used because of size and speed concerns."
        ]
    },
]
var techStack = {
    "Computer Vision":[
        {"name":"OpenCV","logo":"images/techstack/opencv.png","exp":"It is my specialty"},
        {"name":"Keras","logo":"images/techstack/Keras_Logo.jpg", "exp":"fav for model creation"},
        {"name":"Tensorflow","logo":"images/techstack/icons8-tensorflow-48.png"},
        {"name":"Sklearn","logo":"images/techstack/scikit-learn-logo-8766D07E2E-seeklogo.com.png"},
        {"name":"Numpy","logo":"images/techstack/numpy-logo-479C24EC79-seeklogo.com.png"},
        {"name":"Tfjs","logo":"images/techstack/Tensorflow_logo.svg","exp":"Not frequently used"},
        {"name":"Tflite","logo":"images/techstack/Tensorflow_logo.svg","exp":"android, c++, python<br>Not frequently used"},
        {"name":"OnnxRuntime","logo":"images/techstack/ONNX-Runtime-logo.svg","exp":"c++,python<br> project specific"},
        {"name":"Python","logo":"images/techstack/icons8-python-48.png","exp":"my fav language"},
        {"name":"C++","logo":"images/techstack/icons8-c++-48.png","exp":"Used when<br> performance need"},
        {"name":"JavaScript","logo":"images/techstack/icons8-javascript-48.png","exp":"Middle knowledge"},
        {"name":"Aws Sagemaker&Groundtruth","logo":"images/techstack/icons8-amazon-web-services-48.png", "exp":"For training ml models<br>Labelling data"},
    ],
    "Mobile":[
        {"name":"Flutter","logo":"images/techstack/icons8-flutter-48.png", "exp":"Mostly used since 2019"},
        {"name":"Native Android","logo":"images/techstack/icons8-android-os-48.png", "exp":"Not used since 2019"},
        // {"name":"React Native","logo":""},
        {"name":"Dart","logo":"images/techstack/icons8-dart-48.png"},
        {"name":"Java","logo":"images/techstack/icons8-java-48.png", "exp":"Not used since 2019<br>Most used before"},
        {"name":"Firebase","logo":"images/techstack/icons8-firebase-48.png"}
    ],
    "Web":[
        {"name":"Django","logo":"images/techstack/icons8-django-48.png","exp":"python Backend framework, familiar"},
        {"name":"AWS","logo":"images/techstack/icons8-amazon-web-services-48.png","exp":"Sagemaker,Lambda,S3"},
        {"name":"GCP","logo":"images/techstack/icons8-google-cloud-48.png","exp":"Vertex AI,Storage,Cloud Run, Functions"},
        {"name":"Fast Api","logo":"images/techstack/fastapi.png","exp":"Python framework to create api."},
        {"name":"Serverless","logo":"images/techstack/serverless dark.svg","exp":"It is used with aws lambda"},
        {"name":"Python","logo":"images/techstack/icons8-python-48.png","exp":"my fav language"},
        {"name":"Html/Css","logo":"images/techstack/icons8-html-5-48.png","exp":"Middle knowledge"},
        {"name":"JavaScript","logo":"images/techstack/icons8-javascript-48.png","exp":"Middle knowledge"}
    ],
    "Other":[
        {"name":"C#","logo":"images/techstack/icons8-c-sharp-logo-48.png", "exp":"used in unity project"},
        {"name":"Adobe XD","logo":"images/techstack/icons8-adobe-xd-48.png",},
        {"name":"Admob","logo":"images/techstack/icons8-google-admob-48.png"},
        {"name":"Play Console","logo":"images/techstack/icons8-google-play-48.png"},
        {"name":"Android Studio","logo":"images/techstack/icons8-android-studio-48.png"},
        {"name":"Linux","logo":"images/techstack/icons8-linux-48.png", "exp":"sudo"},
        {"name":"Unity","logo":"images/techstack/icons8-unity-50.png"},
        {"name":"Markdown","logo":"images/techstack/icons8-markdown-50.png"},
        {"name":"Git","logo":"images/techstack/icons8-git-48.png"},
        {"name":"Web Assembly with Emscripten","logo":"images/techstack/WebAssembly_Logo.svg.png","exp":"to run c++<br> on browsers"},
    ]
}

var apps = [
    {"name":"Bil Bakalım",
    "exp":"It is a word game. A keyboard is created for the game. Animations are highly used.",
    "Tech":"Flutter",
    "Store Link":"https://play.google.com/store/apps/details?id=com.hisario.bilbakalim&hl=tr&gl=US",
    "icon":"https://play-lh.googleusercontent.com/cX3rzUVfMxfPm7v9eheOIJFjmE5UEWGdaPHwHOTDSO88FnvRrxBD4A_qFtfxjg4MwZDZ=s64-rw"},
    {"name":"Times Up - Screen on time viewer, floating window",
    "exp":"It is an app to prevent over usage of phones. It displays passed time on the floating window.",
    "Tech":"Native Android with Java",
    "Store Link":"https://play.google.com/store/apps/details?id=com.hisario.hisario.sayac",
    "icon":"https://play-lh.googleusercontent.com/rhq3RDd3p5eIyLi6HXk2E8PKJulp1lQsJt6-tdaBBLr3ytUbrCndFz5eukmLfUW14B4=s64-rw"},
    {"name":"Today's Quote",
    "exp":"This app shows random 5 quotes every day. The floating window is used to show quotes.",
    "Tech":"Native Android with Java",
    "Store Link":"https://play.google.com/store/apps/details?id=com.hisario.todaysquote&hl=en&gl=US",
    "icon":"https://play-lh.googleusercontent.com/jNWwxS-zGOO0b_AxTKbVR-9uPtvirOXoXD7tclJ5Uh585wzQ2631qamKXkyTi2mzWg=s64-rw"},
    {"name":"Tyt Kimya - Hızlı Sorular",
    "exp":"It is an education app for chemistry. It is the last native android app that I have developed.",
    "Tech":"Native Android with Java",
    "Store Link":"https://play.google.com/store/apps/details?id=com.hisario.tytkimya&hl=en&gl=US",
    "icon":"https://play-lh.googleusercontent.com/Bs_0Axivrz_fgD4txoJCBmm_EdQkg8JMTAWQdtHUcVLr-xp8Mz2Pf0F1SIf2lrmiQds=s64-rw"},
    {"name":"Radion",
    "exp":"It is a radio app that supports background play, widgets, and notification controls.",
    "Tech":"Native Android with Java Backend",
    "Store Link":"",
    "icon":"images/radyon.png"},
    {"name":"Tozlu Kelimeler",
    "exp":"It is a similar app to Today's Quote. It shows old Turkish words that are not used today as before.",
    "Tech":"Native Android with Java Backend",
    "Store Link":"",
    "icon":"images/tozlu_keli,meler.png"},
    {"name":"Ekolog",
    "exp":"Currency track app. It supports different types of widgets.",
    "Tech":"Native Android with Java",
    "Store Link":"",
    "icon":"images/ekolog.png"},
    {"name":"Free Games of week",
    "exp":"Simple app that shows free games for a limited time. Aws lambda and firebase are used to track free games.",
    "Tech":"Flutter",
    "Store Link":"",
    "icon":"images/freegames.png"},
    {"name":"Kolay Tercih",
    "exp":"It is an app that holds university and program details.",
    "Tech":"Flutter",
    "Store Link":"https://play.google.com/store/apps/details?id=com.hisario.tercihrehberi&hl=tr&gl=US",
    "icon":"https://play-lh.googleusercontent.com/Q8Yk38uRSgrZJoK74W9HTiSdIwv6wL9KoXgNYFtIxBnH5KdY3wi3wpobTMcLZVr7xgQ=s64-rw"},
    {"name":"TicTacToe",
    "exp":"It is a simple tictactoe game.",
    "Tech":"Flutter",
    "Store Link":"https://play.google.com/store/apps/details?id=tictactoe.hisario.com.tictactoe&hl=tr&gl=US",
    "icon":"https://play-lh.googleusercontent.com/3R8eMQKF5QsoATaIo26wX-zyO-4eNBe9wGSa64G_jZ6Yz71VfNDQtjTl9zr5Zq7rj_4=s64-rw"},
    {"name":"AYT Edebiyat yazar bilgi eser",
    "exp":"It is another exam work app.",
    "Tech":"Flutter",
    "Store Link":"https://play.google.com/store/apps/details?id=hisario.com.yazar_eser&hl=tr",
    "icon":"https://play-lh.googleusercontent.com/iztvSbgFZ9HwVfoDwWzjhZM_MME1wrv96rFuPxOdD_e0be9HJt0mIA4PuxBQakuK7A=s64-rw"},
    {"name":"Notification Track",
    "exp":"It is an app to list and track notifications. It becomes the default Android feature while I'm developing an app.",
    "Tech":"Flutter",
    "Store Link":"",
    "icon":"images/bildirim.png"},
    
]

timeline= [
    {"title":"Hacettepe University | Computer Science","duration":5*12,"start_year":2014, "start_month":9, "color":"#e42624"},
    {"title":"Hacettepe University | School of Foreign Languages","duration":12,"start_year":2014, "start_month":9, "color":"#b1b1b1"},
    {"title":"Mentornity | Android Developer - Intern","duration":2,"start_year":2018, "start_month":7, "color":"#B00021"},
    {"title":"NKR Software | Machine Learning Intern","duration":1,"start_year":2019, "start_month":2, "color":"#F3CE1F"},
    {"title":"PulpoAR | Computer Vision Engineer & RD Team Lead","duration":-1,"start_year":2019, "start_month":11, "color":"#5B0097"},
]

techstack_timeline= [
    {"title":"Java", "duration":12*5,"start_year":2014, "start_month":11,"color":"#e66f02"},
    {"title":"Android", "duration":12*3.5,"start_year":2016, "start_month":6,"color":" #3DDC84"},
    {"title":"Dart&Flutter", "duration":8,"start_year":2019, "start_month":4,"color":"#59aee7"},
    {"title":"Dart&Flutter", "duration":14,"start_year":2020, "start_month":9,"color":"#59aee7"},
    {"title":"ML", "duration":36,"start_year":2017, "start_month":9,"color":"#ff8b00"},
    {"title":"Image Processing", "duration":-1,"start_year":2017, "start_month":9,"color":"linear-gradient(90deg, rgba(135,211,100,1) 30%, rgba(247,41,66,1) 35%, rgba(247,41,66,1) 60%, rgba(17,137,247,1) 66%);"},
    {"title":"Unity", "duration":14,"start_year":2019, "start_month":11,"color":"linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(50,50,50,1) 50%, rgba(255,255,255,1) 99%);"},
    {"title":"AWS", "duration":5,"start_year":2020, "start_month":11,"color":"#f7981f"},
    {"title":"GCP", "duration":2,"start_year":2021, "start_month":11,"color":"linear-gradient(90deg, rgba(243,182,5,1) 0%, rgba(227,65,51,1) 35%, rgba(64,129,236,1) 60%, rgba(50,163,80,1) 100%)"},
    {"title":"Python", "duration":-1,"start_year":2014, "start_month":11,"color":"linear-gradient(90deg, rgba(242,201,57,1) 0%, rgba(242,201,57,1) 45%, rgba(54,108,155,1) 55%);"},
    {"title":"Cpp", "duration":24,"start_year":2015, "start_month":9,"color":"linear-gradient(90deg, rgba(43,82,142,1) 0%, rgba(93,135,188,1) 52%, rgba(34,65,112,1) 100%);"},
    {"title":"Cpp", "duration":-1,"start_year":2021, "start_month":8,"color":"linear-gradient(90deg, rgba(43,82,142,1) 0%, rgba(93,135,188,1) 52%, rgba(34,65,112,1) 100%);"},
    {"title":"C#", "duration":14,"start_year":2019, "start_month":11,"color":"linear-gradient(90deg, rgba(55,0,140,1) 0%, rgba(156,117,213,1) 52%, rgba(39,0,101,1) 100%);"},
    {"title":"Django", "duration":5,"start_year":2020, "start_month":8,"color":"#0a2d1f"},
    {"title":"FastApi", "duration":1,"start_year":2019, "start_month":11,"color":"#023a35"},
    {"title":"FastApi", "duration":2,"start_year":2021, "start_month":11,"color":"#023a35"},
    {"title":"FastApi", "duration":2,"start_year":2024, "start_month":5,"color":"#023a35"},
    {"title":"Web Assembly", "duration":-1,"start_year":2021, "start_month":8,"color":"linear-gradient(90deg, rgba(43,153,200,1) 0%, rgba(87,51,138,1) 100%);"},
    {"title":"Web Js&Html&Css", "duration":-1,"start_year":2018, "start_month":8,"color":"#f7d800"}
]
{/* <div class="tooltip"><spa class="tag tooltip">Sample</spa>
        
      </div> */}
function load_tech_stack(){
    techstack_container = document.getElementById("techstack_container")
    for (var key in techStack){
        var title = document.createElement("h4")
        title.classList = ["title is-4"]
        title.innerHTML = key
        techstack_container.appendChild(title);
        var techdiv = document.createElement("div")
        techdiv.classList = ["tags are-medium"]
        for(var index in techStack[key]){
            var techspan = document.createElement("span")
            techspan.classList = ["tag is-rounded tooltip"]
            if(techStack[key][index]["exp"]==undefined){
                techspan.innerHTML = `<figure class="image is-16x16"><img src="${techStack[key][index]["logo"]}"></figure>${techStack[key][index]["name"]}`
            }else{
            techspan.innerHTML = `<figure class="image is-16x16"><img src="${techStack[key][index]["logo"]}"></figure>${techStack[key][index]["name"]}<span class="tooltiptext">${techStack[key][index]["exp"]}`
            }
            //techspan.innerHTML = techStack[key][index]["name"]
            techdiv.appendChild(techspan)
        }
        techstack_container.appendChild(techdiv)
      }
}

function load_work_experiences(){
    var work_experiences_container = document.getElementById("work_experiences")
    for(var key in workExperiences){
        var companydiv = document.createElement("div")
        companydiv.classList = ["columns"]
        var companyTimelinediv = document.createElement("div")
        companyTimelinediv.classList = ["column is-2"]
        companyTimelinediv.innerHTML = `<h6>${workExperiences[key]["timeline"]}</h6>`
        var companylogodiv = document.createElement("div")
        companylogodiv.classList= ["column"]
        companylogodiv.innerHTML = `<figure class="image is-64x64"><img src="${workExperiences[key]["logo"]}"></figure>`
        var companyInfodiv = document.createElement("div")
        companyInfodiv.classList = ["column is-10"] 
        var experienceList = document.createElement("ul")
        experienceList.classList = ["subtitle is-6"]
        var companyInfoInnerHtml = `<a href="${workExperiences[key]["url"]}" target="_blank"><h4 class="title is-4" style="color:${workExperiences[key]["accent-color"]}">${key}</h4></a>
                <h5 class="subtitle is-6 green" >${workExperiences[key]["role"]}</h5>
                <p class="subtitle is-6">
                    <ul style="color: white; list-style: disc;">`
        for(var experience in workExperiences[key]["exp"]){
            companyInfoInnerHtml += `<li>${workExperiences[key]["exp"][experience]}</li>`
        }
        companyInfoInnerHtml+=`</ul></p>`
        companydiv.appendChild(companyTimelinediv)
        companydiv.appendChild(companylogodiv)
        companyInfodiv.innerHTML = companyInfoInnerHtml
        companydiv.appendChild(companyInfodiv)
        work_experiences_container.appendChild(companydiv)
    }
}

function load_projects(id, projects){
    var projects_container = document.getElementById(id)
    for(var key in projects){
        var projectsdiv = document.createElement("div")
        projectsdiv.classList = ["columns"]
        var imagediv = document.createElement("div")
        imagediv.classList= ["column"]
        imagediv.innerHTML = `<figure class="image "><img src="${projects[key]["image"]}"></figure>`
        var projectInfodiv = document.createElement("div")
        projectInfodiv.classList = ["column is-10"] 
        var experienceList = document.createElement("ul")
        experienceList.classList = ["subtitle is-6"]
        var projectInfoInnerHtml = `<h4 class="title is-4 green">${projects[key]["title"]}</h1>
                <p class="subtitle is-6">
                    <ul style="color: white;list-style: disc;">`
        for(var experience in projects[key]["exp"]){
            projectInfoInnerHtml += `<li>${projects[key]["exp"][experience]}</li>`
        }
        projectInfoInnerHtml+=`</ul></p>`
        projectsdiv.appendChild(imagediv)
        projectInfodiv.innerHTML = projectInfoInnerHtml
        projectsdiv.appendChild(projectInfodiv)
        projects_container.appendChild(projectsdiv)
    }
}
function load_home(){
    load_timeline(timeline,"career")
    load_timeline(techstack_timeline,"stack")
    load_work_experiences()
    load_projects("projects", projects);
    load_tech_stack();
    }

function load_computer_vision_page(){
    load_projects("computerVisionProjects",cv_projects)
}
function select_app(i){
    appname = document.getElementById("appname")
    appname.innerHTML = apps[i]["name"]
    appcontent = document.getElementById("appcontent")
    appcontent.innerHTML = apps[i]["exp"]
    apptech = document.getElementById("app_tech")
    apptech.innerHTML = apps[i]["Tech"]
    if(apps[i]["Tech"]==="Flutter"){
        apptech.classList= ["tag is-info"]
    }else{
        apptech.classList= ["tag is-primary"]
    }
    storelink = document.getElementById("storelink")
    storelink.href = apps[i]["Store Link"]
    if(apps[i]["Store Link"].length>0){
        storelink.style.visibility ="visible"
    }else{
        storelink.style.visibility ="hidden"
    }
    appIcons = document.getElementById("appIcons")
    for(var ix=0;ix<appIcons.children.length;ix++){
        appIcons.children[ix].style.filter = "grayscale(100%)"
    }
    appIcons.children[i].style.filter = "grayscale(0%)"
}
function load_apps(){
    appsDiv = document.getElementById("apps");
    appsDivInnerHtml = appsDiv.getInnerHTML();
    appsDivInnerHtml += `<span class="tags are-medium" id="appIcons">`
    for(var index in apps){
        var app = apps[index]
        appsDivInnerHtml+= `<figure class="image is-96x96" style="padding:5px; filter: grayscale(100%);" >
                <button style="background:transparent; border-style:none" onclick="select_app(${index})"><image src="${app["icon"]}" style="border-radius: 10%;"></image></button>
        </figure>`
    }
    
    appsDivInnerHtml+="</span>"
    appsDiv.innerHTML = appsDivInnerHtml;
    select_app(0);
}

function load_timeline(timeline, type){
    years_to_show = [2014,2015,2019,2020,2022]
    
    start_year = 2014
    var currentTime = new Date();
    total_duration = 12*(currentTime.getFullYear()-start_year)+currentTime.getMonth()
    timelineDiv = document.getElementById("timeline")
    var title = document.createElement("h6")
    title.classList = ["title is-6"]
    title.innerHTML = type
    timelineDiv.appendChild(title);
    for(var index in years_to_show){
        year = years_to_show[index]
        timeline_calendar = document.getElementById("timeline-calendar")
        var left_percent = 5+(((year-start_year)*12)/total_duration)*90
        if (year>start_year && screen.width<400)
            year -=2000; 
        timeline_calendar.innerHTML+= `<span class="timeline-dot" style="left: ${left_percent}%;"><br>${year}</span>`
    }
    for(var index in timeline){
        var timeline_item = timeline[index]
        var width_percent = (timeline_item.duration/total_duration)*90//Because I want 5% padding horizontally
        var left_percent = 5+(((timeline_item.start_year-2014)*12+timeline_item.start_month)/total_duration)*90//Because I want 5% padding horizontally
        if(timeline_item.duration==-1){
            width_percent = 100-left_percent
        }
        // alert(left_percent)
        timelineDiv.innerHTML += `<div class="timeline-line" style="width: ${width_percent}%; left: ${left_percent}%;background: ${timeline[index]["color"]};"></div>`
    }
    if(type==="career"){
        for(var index in timeline){
            var timeline_item = timeline[index]
            timelineDiv.innerHTML +=`<div class="timeline-dot-title">
            <span class="timeline-dot" style="left:0%; background-color:${timeline_item.color};"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp${timeline_item.title} 
          </div class="timeline-dot-title">`
        }
    }
    if(type==="stack"){
        timelineDiv.innerHTML +=`<div class="tags">`
        for(var index in timeline){
            var timeline_item = timeline[index]
            console.log(timeline_item)
            timelineDiv.innerHTML += `<span class="tag" style="margin-left:2em; background:${timeline_item.color}; color:white;">${timeline_item.title} </span>`
        }
        timelineDiv.innerHTML+="</div>"
    
        }
}


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
    
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
    
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    
      });
    });
    
    });
      $(document).ready(function() {
    
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
    
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    
    });
    });
    // // $(".navbar-menu").toggleClass("is-active");