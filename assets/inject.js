function isUrl(data){
  try{
    new URL(data);
    return true;
  }catch(e){
    return false;
  };
};

function urlParse(data){
  var m = data.match(/^(([^:\/?#]+:)?(?:\/\/((?:([^\/?#:]*):([^\/?#:]*)@)?([^\/?#:]*)(?::([^\/?#:]*))?)))?([^?#]*)(\?[^#]*)?(#.*)?$/),
        r = {
            hash: m[10] || "",
            host: m[3] || "",
            hostname: m[6] || "",
            href: m[0] || "",
            origin: m[1] || "",
            pathname: m[8] || (m[1] ? "/" : ""),
            port: m[7] || "",
            protocol: m[2] || "",
            search: m[9] || "",
            username: m[4] || "",
            password: m[5] || "" 
        };
    if (r.protocol.length == 2) {
        r.protocol = "file:///" + r.protocol.toUpperCase();
        r.origin = r.protocol + "//" + r.host;
    }
    r.href = r.origin + r.pathname + r.search + r.hash;
    return r;
};

function maketextnumber(n) {
    for (var r = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], e = n, t = new Array, a = 0; a <= e - 1; a++) {
        t[a] = r[parseInt(Math.random() * r.length)];
        t = t;
    }
    return t.join("");
}

function removeImg(data){
  let targetImg=document.querySelector(`[pick-image="`+data+`"]`);
  if(targetImg!=null){
    targetImg.remove();
  };
};
document.querySelectorAll("img").forEach(function(a){
  try{
    let dataUrl=a.getAttribute("src");
    let uriOrigin=window.location.origin;
    if(dataUrl!=null&&dataUrl.indexOf("//")==0){
      dataUrl=dataUrl.replace("//","https://");
    };
    if(isUrl(dataUrl)){
    }else{
      if(window.location.href.indexOf("/host-")>0){
        let urlReal=window.location.href.split("/host-")[1];
        urlReal=urlReal.replace("https-","https://").replace("http-","http://");
        urlReal=urlParse(urlReal).origin+dataUrl;
        urlReal=uriOrigin+urlReal.replace("https://","/host-https-").replace("http://","/host-http-");
        a.setAttribute("src",urlReal);
      };
    };
  }catch(e){

  };
});
let dbAds=[
  {
    "target-selector":[
      ".container",
      "#container",
      ".content",
      ".pa15.bgwhite"
    ],
    "position":"out-top", //out-top, out-bottom, in-top, in-bottom
    "data" :`
    <!-- Iklan Header -->
    `,
    "style":`
      width: 90%;
      margin: auto;
      margin-bottom: 10px;
      margin-top: 10px;
    `
  }
];

dbAds.forEach(function(a){
  let createElDom=document.createElement("div");
  createElDom.setAttribute("style",a["style"]);
  createElDom.innerHTML=a["data"];
  let dataScript=[];
  createElDom.querySelectorAll("script").forEach(function(b){
    let createElCostom=document.createElement("script");
    createElCostom.innerHTML=b.innerHTML;
    dataScript.push(createElCostom);
    b.remove();
  });
  a["target-selector"].forEach(function(b){
    let targetEl=document.querySelector(b);
    if(targetEl){
      if(a["position"]=="out-bottom"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
      }else if(a["position"]=="out-top"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
        createElDom.after(targetEl);
      }else if(a["position"]=="in-top"){

      }else if(a["position"]=="in-top"){
        
      };
      dataScript.forEach(function(b){
        createElDom.append(b); 
      });
    }else{
      console.log("target "+a["target-selector"]+" tidak ditemukan"); 
    };
  });
});


let elImg=document.querySelectorAll("img");
elImg.forEach(function(a){
  a.setAttribute("style","max-width:100%");
  let classImg=a.getAttribute("class");
  let getSrcSet=a.getAttribute("srcset");
  if(classImg==null==false){
    a.classList.remove("lazyload");
  };
  if(getSrcSet==null==false){
    getSrcSet=getSrcSet.split(",");
    if(getSrcSet.length>1){
      a.setAttribute("src",getSrcSet);
    };
  };
});

let dataLazy=document.querySelectorAll(".lazy-image.lazy-image-udf");
dataLazy.forEach(function(a){
  let dataHref=a.getAttribute("data-src");
  if(dataHref){
    let targetLazy=a.querySelector(".loadingPlaceholder");
    let targetDiv=a.querySelector(".lazy-image__loadingPlaceholder")
    if(targetLazy){
      targetLazy.setAttribute("src",dataHref);
      targetDiv.setAttribute("class","show")
    };
  };
});

(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"var _Hasync= _Hasync|| [];\n_Hasync.push(['Histats.start', '1,4035261,4,0,0,0,00010000']);\n_Hasync.push(['Histats.fasi', '1']);\n_Hasync.push(['Histats.track_hits', '']);\n(function() {\nvar hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;\nhs.src = ('//s10.histats.com/js15_as.js');\n(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);\n})();"},{"attr":[],"tag":"noscript","inner":"<a href=\"/\" target=\"_blank\"><img src=\"//sstatic1.histats.com/0.gif?4035261&amp;101\" alt=\"\" border=\"0\"></a>"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

(function(){injectScript([{"attr":[{"name":"id","value":"ads-fly"}],"tag":"div","inner":"\n      <div class=\"main-fly-ads\">\n        <div class=\"center-fly-ads\">\n          <div id=\"btn-close-ads\">\n            <div class=\"btn-fix-close\">X</div>\n          </div>\n          <!-- code adstera banner -->\n          <div id=\"container-9c0cb74cb61b96dbbdcb0f5df7cb7c8b\"></div>\n          <!-- end code adstera banner-->\n        </div>\n      </div>\n    "},{"attr":[{"name":"async","value":"async"},{"name":"data-cfasync","value":"false"},{"name":"src","value":"//"}],"tag":"script","inner":""},{"attr":[],"tag":"script","inner":"\nconst directLinkAds=\"\";\n\nconst settingDirectLinkAds = {\n  \"lick-direct\" : \"https://elitistrawirresistible.com/rcay9uqyy?key=7658026dd5d9ea393b5e712557c24ccd\",\n  \"replace-history-back\" : true,\n  \"filter-referer\" : {\n    \"status\":true,\n    \"referer\" : [\n      \".google.\",\n      \"bing.\",\n      \".facebook.\",\n      \"yahoo.com\"\n    ]\n  }\n};\n\ndocument.querySelector(\"#btn-close-ads > div\").addEventListener(\"click\",async ()=>{\n  await document.getElementById(\"ads-fly\").remove();\n  await window.open(settingDirectLinkAds[\"lick-direct\"],\"_blank\");\n  // setTimeout(()=>{\n  //   document.body.addEventListener(\"click\",async ()=>{\n  //     await window.open(settingDirectLinkAds[\"lick-direct\"],\"_blank\");\n  //   },{\n  //     once:true\n  //   },1000);\n  // });\n});\n\n// document.querySelector(\"#ads-fly\").addEventListener(\"click\",async ()=>{\n//     await window.open(settingDirectLinkAds[\"https://elitistrawirresistible.com/rcay9uqyy?key=7658026dd5d9ea393b5e712557c24ccd\"],\"_blank\");\n// });\n\nhistory.pushState(null, document.title, location.href);\nwindow.addEventListener('popstate', function (event)\n{\n  window.location.href=settingDirectLinkAds[\"lick-direct\"];\n});\n"},{"attr":[],"tag":"style","inner":"\n#ads-fly {\n    position: fixed;\n    top: 0;\n    z-index: 99999;\n    width: 100%;\n    height: 100%;\n    background-color: #71769eb0;\n}\n.main-fly-ads {\n    padding-top: 10%;\n}\n.center-fly-ads {\n    width: fit-content;\n    margin: auto;\n    background-color: #dddde8;\n    border-radius: 10px;\n    z-index: 99999;\n}\n#btn-close-ads {\n    text-align: right;\n    position: relative;\n}\n.btn-fix-close {\n    width: max-content;\n    background-color: red;\n    padding: 2px 9px;\n    position: absolute;\n    right: 0;\n    z-index: 999999;\n    cursor: pointer;\n}\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"},{"name":"src","value":"//elitistrawirresistible.com/92/cb/c9/92cbc98675804894e22e5905fb8b7506.js"}],"tag":"script","inner":""}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();



