'use strict';

//------------- Funtions -------------------

// Funzione che facilita la creazione di un singolo membro
function createTeamMember(name, role, image) {
    let teamMember = {
        name: name,
        role: role,
        image: image
    }

    //console.log("createTeamMember", teamMember);

    return teamMember;
}

// Funzione che stampa in console tutte le proprietà di ogni membro
function logAllMembersV1(teamMember) {
    for (let i = 0; i < teamMember.length; i++) {
        for (let key in teamMember[i]) {
            console.log(teamMember[i][key]);
        }
    }
}

function logAllMembersV2(teamMembers) {
    teamMembers.forEach(member => {
        console.log("V2", `The name of this member is ${member.name}. The role of this member is ${member.role}. Here is the photo link of the member ${member.image}`);  
    });
}

//------------- END Funtions -------------------

// Array che conterrà i membri
let teamMembers = [];

// Creo i membri
let wayneBarret = createTeamMember("Wayne Barret", "Founder & CEO", "wayne-barret-founder-ceo.jpg");
let angelaCaroll = createTeamMember("Angela Caroll", "Chief Editor", "angela-caroll-chief-editor.jpg");
let walterGordon = createTeamMember("Walter Gordon", "Office Manager", "walter-gordon-office-manager.jpg");
let angelaLopez = createTeamMember("Angela Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg");
let scottEstrada = createTeamMember("Scott Estrada", "Developer", "scott-estrada-developer.jpg");
let barbaraRamos = createTeamMember("Barbara Ramos", "Graphic Designer", "barbara-ramos-graphic-designer.jpg");

// Aggiungo i membri all'array
teamMembers.push(wayneBarret, angelaCaroll, walterGordon, angelaLopez, scottEstrada, barbaraRamos);

//console.log("teamMembers", teamMembers);

// Stampo in console tutte le proprietà di ogni membro
logAllMembersV1(teamMembers);
logAllMembersV2(teamMembers);

