let name_input = document.querySelector('#name_input');
let tel_input = document.querySelector('#tel_input');
let mail_input = document.querySelector('#mail_input');
let card_added = document.querySelector('#card_added');
let insert_contact = document.querySelector('#insert_contact');


let agenda = {

    contatti: [
        {
            name: 'Andrea',
            tel: '+39 333 786 45 23',
            mail: 'info@abc.it'
        },
        {
            name: 'Michele',
            tel: '+39 099 234 67 45',
            mail: 'michele@anotnio.com',
        },
        {
            name: 'Lucia',
            tel: '+39 789 45 23',
            mail: 'lucia@lucia.org'
        },
        
    ],

addContact: () => {

    let new_contact = {

        name: name_input.value,
        tel: tel_input.value,
        mail: mail_input.value,
    
    };

    agenda.contatti.push(new_contact);
    
},


fillContacts: () => {
    
    agenda.contatti.forEach((contact) => {
        let par_contact = document.createElement("div");
        par_contact.setAttribute = ("class");
        
        par_contact.innerHTML = `
        <div class="card m-2 fs-3">
        <div id="name_input" class="card-header my-bg-secondary">
          <strong>Name:</strong> ${contact.name}
        </div>
        <ul class="list-group list-group-flush">
          <li id="tel_input" class="list-group-item"><strong>Tel:</strong> ${contact.tel}</li>
          <li id="mail_input" class="list-group-item"><strong>E-mail:</strong> ${contact.mail}</li>
        </ul>
        </div>
      </div>`;

      card_added.append(par_contact);
        
    });
},

};

insert_contact.addEventListener("click", () => {

      agenda.addContact();
      agenda.fillContacts();
      name_input.value = "";
      tel_input.value = "";
      mail_input.value = "";
    }
);

agenda.fillContacts();

