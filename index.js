
let myLeads=[];
const inputF=document.getElementById("input-field")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul");
const delBtn=document.getElementById("delete-btn");
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
const tabBtn=document.getElementById("savetab-btn")

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem ("myLeads", JSON.stringify(myLeads) )
        render(myLeads);
    })
})

function render(leads){
    let listItems="";

    for(let i=0;i<leads.length;i++){
        listItems+=
        `<li>
            <a target='_blank' href="${leads[i]}"/>
            ${leads[i]}
        </li>`;
        /* 2nd/long way to do above line
        const li=document.createElement("li");
        li.textContent+=myLeads[i];
        ulEl.append(li); */

    }
    ulEl.innerHTML=listItems;
}
//clearing localStorage, myLeads and DOM when DELETE ALL button
delBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})

inputBtn.addEventListener('click',function(){
    myLeads.push(inputF.value);
    inputF.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
})