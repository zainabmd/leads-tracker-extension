
let myLeads=[];
const inputF=document.getElementById("input-field")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul");

let LSLeads=JSON.parse(localStorage.getItem("myLeads"));

inputBtn.addEventListener('click',function(){
    myLeads.push(inputF.value);
    inputF.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads();

})
function renderLeads(){
    let listItems="";

for(let i=0;i<myLeads.length;i++){
listItems+=
    `<li>
        <a target='_blank' href="${myLeads[i]}"/>
        ${myLeads[i]}
    </li>`;
/* 2nd/long way to do above line
const li=document.createElement("li");
li.textContent+=myLeads[i];
ulEl.append(li); */

}
ulEl.innerHTML=listItems;
}