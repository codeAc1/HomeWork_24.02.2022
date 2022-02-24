
// inputun uzerinde  olanda Ender duymesini basanda button click olsun
var inp_enter = document.querySelector("#First .center #inp_text");
inp_enter.addEventListener("keyup", function(e) {
    
    if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector("#First .center #btn_add").click();
    }
  });

 //Click Edende inport etsin
let Add=document.querySelector("#First .center #btn_add")
Add.addEventListener("click",function()
{
    
    var list_item = document.querySelector("#First .center #inp_text").value;
    if (!list_item.trim(' ')) {
        alert("boş olmaz")
    } else {
        var list = document.createElement("li");
        var btn =document.createElement("button")
        const listElement = document.querySelector('ul')
        list.innerText = list_item;
        btn.innerText="X"
        list.setAttribute("class","list-group-item list-group-item-secondary my-1")
        btn.setAttribute("class","btn btn-danger")
        document.getElementById("list_ul").appendChild(list);
        let all_dell_btn = document.querySelectorAll("#list_ul li")
        all_dell_btn.forEach(all_dell_btn => { all_dell_btn.appendChild(btn)})
        list_item = document.querySelector("#First .center #inp_text").value="" 
        document.querySelector("#First .center #inp_text").focus() 
    }
    
})

//Butun siyahini silir
let Dell_All=document.querySelector("#First #btn_all_delete")
Dell_All.addEventListener("click",function()
{
    let dell_all = document.querySelectorAll("#list_ul li")
    dell_all.forEach(function (item) {
            item.remove();
    });
})

//Siyahidaki list elementlerini tek tek silir

