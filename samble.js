let kitchenInput = document.getElementById("kitchen-input");

let addBtn = document.getElementById("add-btn");
let kitchenLIst = document.getElementById("kitchen-items-list");
let kitchenInputData;
let kitchenInputdataArry = []
addData = (() => {
    localStorage.setItem('set', JSON.stringify(kitchenInputdataArry))
})
getData = (() => {
    if (localStorage.getItem('set')) {
        kitchenInputdataArry = JSON.parse(localStorage.getItem('set'))

        bildUi()
    }

})
bildUi = (() => {
    kitchenLIst.textContent = ''
    kitchenInputdataArry.forEach((item) => {
        let li = document.createElement('li');
        kitchenLIst.appendChild(li);
        let spanIn = document.createElement('span')
        li.appendChild(spanIn)
        spanIn.innerText = item




        li.style.cssText = 'animation-name: slideIn';
        kitchenInput.value = '';
        kitchenInput.focus();
        //add delete button
        let trashBtn = document.createElement('i');
        trashBtn.classList.add('fas', 'fa-trash');
        trashBtn.id = item;
        li.appendChild(trashBtn);

        //add edit button
        let editBtn = document.createElement('i');
        editBtn.classList.add('fas', 'fa-edit')
        editBtn.id=JSON.stringify(kitchenInputdataArry);
        editBtn.accessKey =item;
        li.appendChild(editBtn)
    })


})

addlist = (() => {
    kitchenInputData = kitchenInput.value;
    kitchenInputdataArry.push(kitchenInputData)

    //add data localStorag
    addData()
    //getData at localStorage
    getData()

})
 removeIist=((e)=>{
    if(e.target.classList[1] === 'fa-trash'){
    let valuee=e.target.id;
     kitchenInputdataArry.pop(valuee)

    }
 })

deleteBtn = (mousePointer) => {

    if (mousePointer.target.classList[1] === 'fa-trash') {
        let items = mousePointer.target.parentElement;

        items.classList.add('slideOut')
        items.addEventListener('transitionend', (() => {


            items.remove()

    let value = mousePointer.target.id;
    const greetings = JSON.parse(localStorage.getItem("set"));
    const filtered = greetings.filter(item => item !== value);
    localStorage.setItem("set", JSON.stringify(filtered));
    
    
        }))

    }
};


editBtn = (edit) => {
    if (edit.target.classList[1] === 'fa-edit') {
       
        let getData =prompt('Edit yuer todo list')

        let item = edit.target.parentElement;

        let taskName = item.querySelector ('span')
        taskName.innerText = getData

        const element =edit.target.id
        const destrectur=JSON.parse(element)
        const dir=edit.target.accessKey

        console.log(getData)
        console.log(destrectur)
        console.log('dir.//',dir)
   
    }
}



addBtn.addEventListener('click', addlist);
kitchenLIst.addEventListener('click', deleteBtn);
kitchenLIst.addEventListener('click', editBtn)

kitchenLIst.addEventListener('click', removeIist)
getData()

