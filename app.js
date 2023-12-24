const addForm = document.querySelector(".add")
const tasks = document.querySelector(".tasks")
const clerAll = document.querySelector(".clear")
const messageCount = document.querySelector(".message-box span")
const searchForm = document.querySelector(".search")
function updateCount()
{
    const msgcount = tasks.children.length;
    
  messageCount.textContent = `You have ${msgcount} Pending Tasks`;
}
updateCount();

addForm.addEventListener("submit", event =>
{
    event.preventDefault();
    const value = addForm.task.value.trim();
    console.log(value);
    if(value.length)
    {
        console.log("Under If");
        tasks.innerHTML += `<li><span>${value}</span><i class="bi bi-trash-fill delete"></i> </li>`;
        addForm.reset();
        updateCount();
    }
})

tasks.addEventListener("click" , event=>
{
  if(event.target.classList.contains("delete"))
  {
    event.target.parentElement.remove();
    updateCount();
  }

})

clerAll.addEventListener("click",event=>
{
    tasks.innerHTML = "";
    console.log("Clearall Clicked");
    updateCount();
})

function filterTask(term)
{
    
    
  Array.from(tasks.children).filter(task =>{

    return !task.textContent.toLowerCase().includes(term);
  }).forEach(task =>{
 
    task.classList.add("hide");

  });

  Array.from(tasks.children).filter(task =>{

    return task.textContent.toLowerCase().includes(term);
  }).forEach(task =>{
 
    task.classList.remove("hide");

  });

}

searchForm.addEventListener("keyup", event=>
{
    const term = searchForm.task.value.toLowerCase().trim();
    console.log(term)
    filterTask(term);
 })

 searchForm.addEventListener("click", event=>
 {
    if(event.target.classList.contains("reset"))
    {
        searchForm.reset();
        const term = searchForm.task.value.toLowerCase().trim();
      filterTask(term);
    }
 })