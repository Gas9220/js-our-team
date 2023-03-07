'use strict';

function createTeamMember(name, role, image) {
    let teamMember = {
        name: name,
        role: role,
        image: image
    }

    console.log("createTeamMember", teamMember);

    return teamMember;
}
