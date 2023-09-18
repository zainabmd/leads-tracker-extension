
let myLeads=[];
const inputF=document.getElementById("input-field")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul");

inputBtn.addEventListener('click',function(){
    myLeads.push(inputF.value);
    renderLeads();
    inputF.value="";
})
function renderLeads(){
    let listItems="";

for(let i=0;i<myLeads.length;i++){
listItems+="<li>"+myLeads[i]+"</li>";
/* 2nd way to do above line
const li=document.createElement("li");
li.textContent+=myLeads[i];
ulEl.append(li); */

}
ulEl.innerHTML=listItems;
}