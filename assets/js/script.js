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

//randomize cards 

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() -0.5);
    return(cardData);
} 

randomize();

//create the cards

const cardCreator = () => {
    const cardData = randomize();

// create the HTML

cardData.forEach((item) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';

//attach the images to the cards

        front.src = item.imgSrc;
        card.setAttribute('name', item.name);

//put cards in section

        section.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
};

//check individual cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;

//check for matching cards after toggle


}
    
    

cardCreator();
    



