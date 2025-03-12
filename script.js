// let list =["Doom Eternal", "Kingdom Hearts 3", "League of Legends", "Slay the Spire", "Elden Ring", "Valorant", "Honkai StarRail", "the Legend of Zelda: TOTK", "Minecraft", "Helldivers 2"];

const collection = [
    {
        name : "DOOM Eternal",
        editeur: "Bethesda",
        genre : "FPS",
        picture : "assets/DOOM.jpg",
        realseDate : "20/03/2020"
    },

    {
        name : "Kingdom Hearts 3",
        editeur: "Square Enix",
        genre : "Action-RPG",
        picture : "assets/Kingdom_Hearts.jpg",
        realseDate : "29/01/2019"
    },

    {
        name : "League of Legends",
        editeur: "Riot",
        genre : "MOBA",
        picture : "assets/LOL.jpg",
        realseDate : "27/10/2009"
    },

    {
        name : "Slay the Spire",
        editeur: "Humble Bundle",
        genre : "Rogue like",
        picture : "assets/SlayTheSpire.jpg",
        realseDate : "23/01/2019"
    },

    {
        name : "Elden Ring",
        editeur: "FromSoftware",
        genre : "Action-RPG",
        picture : "assets/EldenRing.jpg",
        realseDate : "25/02/22"
    },

    {
        name : "Valorant",
        editeur: "Riot",
        genre : "FPS",
        picture : "assets/Valo.jpg",
        realseDate : "02/06/2020"
    },

    {
        name : "Honkai StarRail",
        editeur: "miHoYo",
        genre : "Gatcha",
        picture : "assets/HSR.jpg",
        realseDate : "11/10/2023"
    },

    {
        name : "the Legend of Zelda: TOTK",
        editeur: "Nintendo",
        genre : "Action-Aventure",
        picture : "assets/TOTK.jpg",
        realseDate : "12/05/2023"
    },

    {
        name : "MineCarft",
        editeur: "Mojang",
        genre : "SandBox",
        picture : "assets/Minecraft.jpg",
        realseDate : "18/11/2011"
    },

    {
        name : "HellDivers 2",
        editeur: "Arrowhead",
        genre : "TPS",
        picture : "assets/Helldiver.jpg",
        realseDate : "08/02/2024"
    }

]


for(let i = 0; i < collection.length; i++){

    const SELECTmain = document.querySelector("main");
    const newSection = document.createElement("section");
    newSection.classList.add("collection");
    SELECTmain.appendChild(newSection);

    const newImg = document.createElement("img");
    newImg.className = "image";
    const img = collection[i].picture;
    newImg.src = img;
    newSection.appendChild(newImg);

    const newH2 = document.createElement("h2");
    const h2 = collection[i].name;
    newH2.innerHTML = h2;
    newSection.appendChild(newH2);

    const newH3 = document.createElement("h3");
    const h3 = collection[i].editeur;
    newH3.innerHTML = h3;
    newSection.appendChild(newH3);

    const newGenre =document.createElement("p");
    newGenre.className = "genre";
    const genre = collection[i].genre;
    newGenre.innerHTML = genre;
    newSection.appendChild(newGenre);

    const newDate = document.createElement("p");
    newDate.className = "date";
    const date = collection[i].realseDate;
    newDate.innerHTML = date;
    newSection.appendChild(newDate);
}