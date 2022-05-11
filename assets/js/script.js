//assemble memory game with section

const section = document.querySelector('section');

//generate data - note images are repeated 3 times as they will appear 3 times!

const getData = () => [
    {imgSrc:"../assets/images/Beryllium.jpg", name:"beryllium"},
    {imgSrc:"../assets/images/Boron.jpg", name:"boron"},
    {imgSrc:"../assets/images/Carbon.jpg", name:"carbon"},
    {imgSrc:"../assets/images/Fluorine.jpg", name:"fluorine"},
    {imgSrc:"../assets/images/helium.jpg", name:"helium"},
    {imgSrc:"../assets/images/hydrogen.jpg", name:"hydrogen"},
    {imgSrc:"../assets/images/Lithium.jpg", name:"lithium"},
    {imgSrc:"../assets/images/Neon.jpg", name:"neon"},
    {imgSrc:"../assets/images/Nitrogen.jpg", name:"nitrogen"},
    {imgSrc:"../assets/images/Oxygen.jpg", name:"oxygen"},
    {imgSrc:"../assets/images/Beryllium.jpg", name:"beryllium"},
    {imgSrc:"../assets/images/Boron.jpg", name:"boron"},
    {imgSrc:"../assets/images/Carbon.jpg", name:"carbon"},
    {imgSrc:"../assets/images/Fluorine.jpg", name:"fluorine"},
    {imgSrc:"../assets/images/helium.jpg", name:"helium"},
    {imgSrc:"../assets/images/hydrogen.jpg", name:"hydrogen"},
    {imgSrc:"../assets/images/Lithium.jpg", name:"lithium"},
    {imgSrc:"../assets/images/Neon.jpg", name:"neon"},
    {imgSrc:"../assets/images/Nitrogen.jpg", name:"nitrogen"},
    {imgSrc:"../assets/images/Oxygen.jpg", name:"oxygen"},
    {imgSrc:"../assets/images/Beryllium.jpg", name:"beryllium"},
    {imgSrc:"../assets/images/Boron.jpg", name:"boron"},
    {imgSrc:"../assets/images/Carbon.jpg", name:"carbon"},
    {imgSrc:"../assets/images/Fluorine.jpg", name:"fluorine"},
    {imgSrc:"../assets/images/helium.jpg", name:"helium"},
    {imgSrc:"../assets/images/hydrogen.jpg", name:"hydrogen"},
    {imgSrc:"../assets/images/Lithium.jpg", name:"lithium"},
    {imgSrc:"../assets/images/Neon.jpg", name:"neon"},
    {imgSrc:"../assets/images/Nitrogen.jpg", name:"nitrogen"},
    {imgSrc:"../assets/images/Oxygen.jpg", name:"oxygen"},
]

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() -0.5);
   console.log(cardData);
} 

randomize();


