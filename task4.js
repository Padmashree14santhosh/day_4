// Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

var xhr= new XMLHttpRequest();
xhr.onload=function()
{
    if(xhr.status>=200&&xhr.status<300){
        var t=JSON.parse(this.response);
        // console.log(t[104].flags);

        for(let key in t){
            console.table(t[key].flags);
        }
    }
    else{
        console.log("Empty");
    }
};

xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();