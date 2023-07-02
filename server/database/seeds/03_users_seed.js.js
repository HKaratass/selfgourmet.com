
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('users').del()
  //pass 12345
  await knex('users').insert([
    {/*id:  4 ,*/ user_name: 'VMilor', email: 'vedat.milor@gmail.com',  //4
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Vedat', 
      last_name: 'Milor', country: 'İstanbul', phone_number: '+901234567855', comment_rate: 6
    },
    {/*id:  5 ,*/ user_name: 'fahrigediz', email: 'fahri.gediz@gmail.com', //5
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Fahri', 
      last_name: 'Gediz', country: 'İzmir', phone_number: '+991234567854', comment_rate: 5
    },
    {/*id:  6 ,*/ user_name: 'MYKaya', email: 'mehmet@myk.com', //6
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Mehmet', 
      last_name: 'Yalçınkaya', country: 'İstanbul', phone_number: '+981234567853', comment_rate: 4
    },
    {/*id:  7 ,*/ user_name: 'McDCetinemec', email: 'cetinemec@mcdonalds.com', //7 
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Cetinemec', 
      last_name: 'Müdüriyet', country: 'ANKARA', phone_number: '15555555555', isPartner: 1
    },
    {/*id:  8 ,*/ user_name: 'BKTaurus', email: 'taurus@burgerking.com', //7 1
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Taurus', 
      last_name: 'Müdiriyet', country: 'ANKARA', phone_number: '25555555556', isPartner: 1
    },
    {/*id:  9 ,*/ user_name: 'TaurusKfc', email: 'taurusfkc@kfc.com', //7 11
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Taurus', 
      last_name: 'Müdiriyet', country: 'ANKARA', phone_number: '35555555550', isPartner: 1
    },
    {/*id:  10,*/ user_name: 'Chefiz', email: 'chef@izkaya.com', //7 111
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Cem', 
      last_name: 'İzkaya', country: 'ANKARA', phone_number: '45555555552', isPartner: 1
    },
    {/*id:  11,*/ user_name: 'BKUskudar', email: 'uskudar@burgerking.com', //7 4
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Uskudar', 
      last_name: 'Müdiriyet', country: 'ANKARA', phone_number: '65555555551', isPartner: 1
    },
    {/*id:  12,*/ user_name: 'AliUsta', email: 'aliusta@gmail.com', //12
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Ali', 
      last_name: 'Demir', country: 'ANKARA', phone_number: '75555555545', isPartner: 1
    },
    {/*id:  13,*/ user_name: 'MilliYiyici', email: 'taner.aybak@hotmail.com', //12 1
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Taner', 
      last_name: 'Aybak', country: 'Adana', phone_number: '+773234567853', comment_rate: 3
    },
    {/*id:  14,*/ user_name: 'karadnzRuzgari', email: 'cemil.ispir@hotmail.com', //12 11
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Cemil', 
      last_name: 'İspir', country: 'Trabzon', phone_number: '+444234567853', comment_rate: 2
    },
    {/*id:  15,*/ user_name: 'izmirSaatKulesi', email: 'izmir.kule@hotmail.com', //12 111
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Elif', 
      last_name: 'Güncel', country: 'İzmir', phone_number: '+331234567853', comment_rate: 1
    },
    {/*id:  16,*/ user_name: 'donatSevmeyen', email: 'donutcu@gmail.com', //12 4
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Bedri', 
      last_name: 'Erdem', country: 'Ankara', phone_number: '+119234567853'
    },
    {/*id:  17,*/ user_name: 'ArbysTaurus', email: 'taurus@arbys.com', //12 5
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Taurus', 
      last_name: 'Arbys', country: 'ANKARA', phone_number: '115523555556', isPartner: 1
    },
    {/*id:  18,*/ user_name: 'PPYSTaurus', email: 'taurus@popeyes.com', //12 6
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Taurus', 
      last_name: 'Popeyes', country: 'ANKARA', phone_number: '225555255526', isPartner: 1
    },

    // ModSerhat -> serhat@gazi.edu.tr:12345
    {/*id:  19,*/ user_name: 'ModThree', email: 'modthree@selfgourmet.com', //12 7
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Mod', 
      isMod: 1, comment_rate: 7,
      last_name: 'Three', country: 'ANKARA', phone_number: '+901234567777'
    },


    {/*id:  20,*/ user_name: 'GaziPartner', email: 'gazi@gazi.com', //12 8
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'Gazi', 
      last_name: 'University', country: 'ANKARA', phone_number: '2223232309', isPartner: 1
    },
    {/*id:  21,*/ user_name: 'DominosYY', email: 'infoyuzyil@dominos.com', //12 9
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'DOMINOS', 
      last_name: 'PIZZA YY', country: 'ANKARA', phone_number: '7533232309', isPartner: 1
    },
    {/*id:  22,*/ user_name: 'PizzaTimeYY', email: 'infoyuzyil@pizzatime.com', //12 10
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'TIME', 
      last_name: 'PIZZA YY', country: 'ANKARA', phone_number: '7133232309', isPartner: 1
    },
    {/*id:  23,*/ user_name: 'PizzaILforno', email: 'infoyuzyil@ilforno.com', //12 10 1
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'ILFORNO', 
      last_name: 'PIZZA YY', country: 'ANKARA', phone_number: '7433232309', isPartner: 1
    },
    {/*id:  24,*/ user_name: 'OncuDonerYY', email: 'doneryy@oncu.com', //12 10 11
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'DONER', 
      last_name: 'ONCU YY', country: 'ANKARA', phone_number: '33433232309', isPartner: 1
    },
    {/*id:  25,*/ user_name: 'KomegeneIB', email: 'infoib@komagene.com', //XXV
      password: '$2a$12$aLtK19SEkS3Iusl3OolkS.BisTySzpTmHMT3OugXUhm2cm6jb2j3y', first_name: 'KOMAGENE', 
      last_name: 'CIG YY', country: 'ANKARA', phone_number: '55433232309', isPartner: 1
    },
    
  ]).then(console.log(" - - - USER: Seed Run Successful - - - "));
};
