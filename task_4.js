

var xhr= new XMLHttpRequest();
xhr.onload=function()
{
    if(xhr.status>=200&&xhr.status<300){
        var t=JSON.parse(this.response);
        // console.log(t);

        // / Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
        for(let key in t){
            console.table(t[key].flags);
        }

        // Use the same rest countries and print all countries name, region, sub region and population

        for(let i=0;i<t.length;i++){
            console.log(`
            ${t[i].name}
            ${t[i].region}
            ${t[i].subregion}
            ${t[i].population}
            `);
        }
    }
    else{
        console.log("Empty");
    }
};

xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();