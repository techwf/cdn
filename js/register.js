
var dg1 = Date.now();
var content = "/Content/Images/100KB.jpg?v=";
var template = "";
var tmp=null;
var tmp_register=null;

function is_mobile(){
     var userAgentInfo = navigator.userAgent;
     var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
     var flag = false;  
     for (var v = 0; v < Agents.length; v++) {  
         if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }  
     }  
     return flag;
}

function auto(self){
    if(tmp===null){
        tmp_register=$(self).attr("data");
        console.log(tmp_register);
        tmp=tmp_register;
        tmp += "/agentset?domain=" + seller;
    }
}

function close_window(win, tmp){
    setTimeout(function () { win.close(); window.location.href = tmp_register+'/Mobile/Register/Register'; }, 2000);
}

$("document").ready(function(){
    var myseller = seller + ".ku119.net";
    $.ajax({
        url: "/popups/get-urls.php?seller=" + myseller,
        async: false,
        success: function( data ) {
            for(var i=0;i<data.length;i++)
            {
                template += "<img src=" + data[i] + content + dg1 + " data='"+data[i]+"' width=30 height=30 onload='auto(this);'>";
            }
            $("#mb_ad").html(template);
        }
    });
})
