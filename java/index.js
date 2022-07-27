window.addEventListener('click',function (e) {
    this.navigator.clipboard.writeText(e.target.className)
    console.log(e.target)
    console.log(e.target.parentElement)
})

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

//  creat mainpanel

let btnCreateList = document.querySelector('.create--list')
let btnCreateFolder = document.querySelector('.create--folder')

let CreateTodoListElem = document.querySelector('.create--todo--list')
let CreateFolderListElem = document.querySelector('.create--todo--folde')


btnCreateList.addEventListener('click', ()=>{
    CreateTodoListElem.classList.toggle('make-panels-invisible')
})

btnCreateFolder.addEventListener('click', ()=>{
    CreateFolderListElem.classList.toggle('make-panels-invisible')
})

let createNewFolderBtn = document.querySelector('.create-new-folder-btn')
let newFolderContainer = document.querySelector('.table-folders')
createNewFolderBtn.addEventListener('click',function () {
    newFolderContainer.insertAdjacentHTML('beforeend',`
    <li class="table-folders-items">
    <ul class="new-folders">
        <li class="new-folders-items">
            <h2>title</h2>
        <button class="new-folder-open-btns">
            <i class="fa-solid fa-caret-right"></i>
        </button>
        </li>
    </ul>
</li>
`)
})