// data creation
const Images = [
    {
        id :`image1.jpg`
    },
    {
        id:`image2.jpg`
    },
    {
        id:`image3.jpg`
    },
    {
        id:`image4.jpg`
    },
    {
        id:`image5.jpg`
    },
    {
        id:`image6.jpg`
    },
    {
        id:`image7.jpg`
    },
    {
        id:`image8.jpg`
    },
    {
        id:`image9.jpg`
    },
    {
        id:`image10.jpg`
    },
    {
        id:`image11.jpg`
    },
    {
        id:`image12.webp`
    },
    {
        id:`image13.jpg`
    },
    {
        id:`image14.jpg`
    },
    {
        id:`image15.jpg`
    },

]
//acsess the element
const images = document.getElementById('image');
const Butt = document.getElementById('next');

//function
const RandomImages=()=>{
    let index = Math.floor(Math.random()*(Images.length))
    //to display the output
    images.src = Images[index].id
}
//button functionality
Butt.addEventListener('click',RandomImages)

