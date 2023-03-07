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
        console.log("V1", `The name of this member is ${teamMember[i].name}. The role of this member is ${teamMember[i].role}. Here is the photo link of the member ${teamMember[i].image}`);  
    }
}

// Funzione che stampa in console tutte le proprietà di ogni membro ( fatta in modo diverso )
function logAllMembersV2(teamMembers) {
    teamMembers.forEach(member => {
        console.log("V2", `The name of this member is ${member.name}. The role of this member is ${member.role}. Here is the photo link of the member ${member.image}`);  
    });
}

// Creo l'html di un singolo membro
function createTeamMemberElement(member) {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('member');

    const memberName = document.createElement('span');
    memberName.classList.add('name');
    memberName.innerHTML = member.name;

    const memberRole = document.createElement('span');
    memberRole.classList.add('role');
    memberRole.innerHTML = member.role;

    const memberImage = document.createElement('img');
    memberImage.classList.add('img');
    memberImage.src = "img/" + member.image

    const divider = document.createElement('hr'); 

    memberDiv.append(memberName, memberRole, memberImage, divider);

    return memberDiv
}

// Creo l'html di tutti i membri
function createTeamMemberElements(teamMembers, container) {
    for (let index = 0; index < teamMembers.length; index++) {
        const memberElement = createTeamMemberElement(teamMembers[index]);
        container.append(memberElement);
    }
}

//------------- END Funtions -------------------

// Riferimenti HTML
const container = document.querySelector('.container');

// Array che conterrà i membri
let teamMembers = [];

// Creo i membri
let wayneBarret = createTeamMember("Wayne Barret", "Founder & CEO", "wayne-barnett-founder-ceo.jpg");
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

// Riempio il container con i membri
createTeamMemberElements(teamMembers, container);

