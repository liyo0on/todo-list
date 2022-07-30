// window.addEventListener('click',function (e) {
//     this.navigator.clipboard.writeText(e.target.className)
//     console.log(e.target)
//     console.log(e.target.parentElement)
// })

const imageprofileElem = document.querySelector('#image--profile--import') 
let upload_Image = ""

imageprofileElem.addEventListener('change', function(){
    // console.log(imageprofileElem.value);
    const reader = new FileReader()
    reader.addEventListener('load', () =>{
        localStorage.setItem('profileimage', reader.result)
        upload_Image = localStorage.getItem('profileimage');
        // console.log(reader.result);
        document.querySelector('.image--profile').style.backgroundImage = `URl(${upload_Image})`
    })
    reader.readAsDataURL(this.files[0])
    load()
} )
let image_profile = document.querySelector('.image--profile')
function load(){
    image_profile.style.backgroundImage = `url(${localStorage.getItem('profileimage')})`
}
load()

//  create main panel

let btnCreateList = document.querySelector('.create--list')
let btnCreateFolder = document.querySelector('.create--folder')

let CreateTodoListElem = document.querySelector('.create--todo--list')
let CreateFolderListElem = document.querySelector('.create--todo--folde')

let btnBackPage = document.querySelectorAll('.back--todo')

btnCreateList.addEventListener('click', ()=>{
    CreateTodoListElem.classList.toggle('make-panels-invisible')
})

btnCreateFolder.addEventListener('click', ()=>{
    CreateFolderListElem.classList.toggle('make-panels-invisible')
})
btnBackPage.forEach(element => {
    element.addEventListener('click', ()=>{
        CreateTodoListElem.classList.remove('make-panels-invisible')
        CreateFolderListElem.classList.remove('make-panels-invisible')
    })
});

let navCreateFolderListElem = document.querySelector('.create-folder')
let navCreateTodoELEm = document.querySelector('.create-todo')

navCreateTodoELEm.addEventListener('click',()=>{
    CreateTodoListElem.classList.toggle('make-panels-invisible')
})

navCreateFolderListElem.addEventListener('click', ()=>{
    CreateFolderListElem.classList.toggle('make-panels-invisible')
})

// create todo 
let todoTitle = document.querySelector('#todo--title')
let todoDescription = document.querySelector('#todo--description')
let createTodoBtn = document.querySelector('.create--todo--btn')

// insertAdjacentHTML
let todoListPages = document.querySelector('.todo--list--page')

let tableAllTodosElem = document.querySelector('.table-all-todos')
let todoListArray = []

class TODO {
    constructor(title,Description){
        this.title = title
        this.Description = Description
    }
}


createTodoBtn.addEventListener('click',()=>{
    todoListArray.push(new TODO(todoTitle.value,todoDescription.value));
    console.log(todoListArray);
})

createTodoBtn.addEventListener('click', ()=>{
    let todoTitleValue = todoTitle.value
    let todoDescriptionvalue = todoDescription.value

    todoListPages.insertAdjacentHTML('afterbegin',`
    <div class="todo-list-body--titele">
    <div class="todo-tlis-titele">
      <h2>title :</h2>
      <h3 class="todo-list-value">${todoTitleValue}</h3>
    </div>
    <div class='todo--process'>
      <h2>process : </h2>
      <h3>
        inprocess
      </h3>
    </div>
  </div>
  <p class="todo-list-body--description">${todoDescriptionvalue}
  </p>
  <div class="btn--contorol">
    <button class="back--todo">back</button>
    <button class="done--todo">done</button>
    <button class="remove--todo">remove</button>
  </div>`),
  tableAllTodosElem.insertAdjacentHTML('afterbegin',`
  <li class="table-all-todos-items">
            <h2>
              ${todoTitleValue}
            </h2>
              <i class="fa-solid fa-caret-right"></i>
          </li>
  `)

    
})
