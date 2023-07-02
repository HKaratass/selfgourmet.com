
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('users').del()
  await knex('users').insert([
    //12345
    {/*id: 2,*/ user_name: 'ModOne', email: 'modone@selfgourmet.com', 
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Mod', 
      last_name: 'One', country: 'Ankara', isMod: 1,
      phone_number: '+901234567891', comment_rate: 7
    },
    {/*id: 3,*/ user_name: 'ModTwo', email: 'modtwo@selfgourmet.com', 
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Mod', 
      last_name: 'Two', country: 'İstanbul', isMod: 1,
      phone_number: '+901234567892', comment_rate: 7
    },

    
  ]).then(console.log(" - - - MOD: Seed Run Successful - - - "));
};