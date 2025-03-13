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

    const SELECT_MAIN = document.querySelector("main");
    const NEW_SECTION = document.createElement("section");
    NEW_SECTION.className = collection[i].genre;
    // NEW_SECTION.classList.add("collection"+ i);
    NEW_SECTION.id = "collection"+ i;
    SELECT_MAIN.appendChild(NEW_SECTION);

    const NEW_IMG = document.createElement("img");
    NEW_IMG.className = "image";
    const img = collection[i].picture;
    NEW_IMG.src = img;
    NEW_SECTION.appendChild(NEW_IMG);

    const NEW_H2 = document.createElement("h2");
    const h2 = collection[i].name;
    NEW_H2.innerHTML = h2;
    NEW_SECTION.appendChild(NEW_H2);

    const NEW_H3 = document.createElement("h3");
    const h3 = collection[i].editeur;
    NEW_H3.innerHTML = h3;
    NEW_SECTION.appendChild(NEW_H3);

    const NEW_GENRE =document.createElement("p");
    NEW_GENRE.className = "genre";
    const genre = collection[i].genre;
    NEW_GENRE.innerHTML = genre;
    NEW_SECTION.appendChild(NEW_GENRE);

    const NEW_DATE = document.createElement("p");
    NEW_DATE.className = "date";
    const date = collection[i].realseDate;
    NEW_DATE.innerHTML = date;
    NEW_SECTION.appendChild(NEW_DATE);

    const NEW_BUTTON = document.createElement("button");
    NEW_BUTTON.setAttribute("onclick","makeMeOrphan(this)");
    NEW_BUTTON.setAttribute("data-NUMBER",`${i}`);
    NEW_BUTTON.className = "delete-button";
    NEW_BUTTON.innerHTML = "␡";
    NEW_SECTION.appendChild(NEW_BUTTON);
};


function makeMeOrphan(findThis){
    const INDEX_NUM = findThis.getAttribute("data-NUMBER");
    const PAPA = document.getElementById(`collection${INDEX_NUM}`);
    PAPA.remove();
};