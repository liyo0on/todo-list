const imageprofileElem = document.querySelector('#image--profile--import') 
let upload_Image = ""

imageprofileElem.addEventListener('change', function(){
    // console.log(imageprofileElem.value);
    const reader = new FileReader()
    reader.addEventListener('load', () =>{
        upload_Image = reader.result;
        // console.log(reader.result);
        document.querySelector('.image--profile').style.backgroundImage = `URl(${upload_Image})`
    })
    reader.readAsDataURL(this.files[0])
} )