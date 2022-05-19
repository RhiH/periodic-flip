//assemble memory game with section

const section = document.querySelector('section');
// console.log(`SECTION: ${section}`);


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
];

//randomize cards 

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() -0.5);
    return(cardData);
}; 

randomize();

//create the cards

const cardCreator = () => {
    const cardData = randomize();

    // create the HTML

    cardData.forEach((item) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card";
        front.classList = "front";
        back.classList = "back";

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
//check cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');
    console.log(flippedCards);

//logic to create checker 
    
    if(flippedCards.length === 3) {
        if(
            flippedCards[0].getAttribute('name') ===
            flippedCards[1].getAttribute('name') &&
            flippedCards[1].getAttribute('name') ===
            flippedCards[2].getAttribute('name')
        ){
            console.log("match");

//change cards back to blank after flip and freeze correct match
            flippedCards.forEach((card) =>{
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
        });
        }
        else {
            console.log("wrong");

//change cards back to blank after flip inc. time limit.
            flippedCards.forEach((card) =>{
                card.classList.remove('flipped');
                setTimeout(()=> card.classList.remove('toggleCard'), 1000)
            });
        };
    };

//check if game is won
        if(toggleCard.length === 30){
            Swal.fire({
                title: 'Congratulations!',
                text: "You've won!",
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Yes! Play again'
              }).then((result) => {
                if (result.isConfirmed) {

                }
              })
            restart('you won!');
        }
    }        

//restart game

    const restart = (text) => {
        let cardData = randomize();
        let faces = document.querySelectorAll('.front');
        let cards = document.querySelectorAll('.card');

//make nothing clickable until game re-sets

        section.style.pointerEvents = 'none';
        cardData.forEach((item,index) => {
            cards[index].classList.remove('toggleCard');

 //re-randomize cards - pointer reset, images & names reset and delay timer
//so you can't see the new image beneath. Add back click - pointerEvents
            setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'all';
            },1000);
        });
    
};

cardCreator();

// attempted fix Gemma_CI

// if (typeof module !== "undefined") module.exports = { appendCard };
module.exports = getData, randomize, cardCreator, checkCards, restart, cardData;
