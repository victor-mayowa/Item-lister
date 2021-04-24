const form = document.getElementById("addform");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");
const inputValue = document.getElementById("item")

//form submit event
form.addEventListener("submit", addItem);
function addItem(e){
    e.preventDefault();

    //Get input value
    const newItem = inputValue.value;

    //Create new li element
    const li = document.createElement("li");
    // Add class
    li.className = "list-group-item";
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button Element
    const deleteBtn = document.createElement("button");

    //Add classes to delete button
    deleteBtn.className = "btn-delete";

    //Append text node
   deleteBtn.appendChild(document.createTextNode("X"));

   //Append button to li
   li.appendChild(deleteBtn);

   //Append li to list
   itemList.appendChild(li);

   const clear = inputValue.value="";
}

// Remove item
itemList.addEventListener("click", removeItem);

function removeItem(e){
    if(e.target.classList.contains("btn-delete")){
        if(confirm("Are you sure")){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter items
filter.addEventListener("keyup", filterItems)
function filterItems(e){
    //convert text to lowercase
    const text = e.target.value.toLowerCase();
    // Get lis
    const items = itemList.getElementsByTagName("li");
    //Convert to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "flex";
        }else{
            item.style.display = "none"
        }
    });
}
