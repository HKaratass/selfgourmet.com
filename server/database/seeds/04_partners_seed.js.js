/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('partners').del()
  await knex('partners').insert([
    {
      id: 1,
      title: "McDonald's (Çetinemeç)",
      user_id_isPartner: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1920px-McDonald%27s_logo.svg.png",
      tag: "Fast-Food, Hamburger",
      price: 3,
      contact_mail: "info@mcdonalds.com",
      contact_number: "4446262",

      total_comment: 4752,
      avg_point: 3.93,
      taste_point: 4.76,
      speed_point: 3.89,
      service_point: 4.22,
      hygiene_point: 2.78,
      staff_point: 4,


      yemeksepeti_url: "https://www.yemeksepeti.com/restaurant/ur1e/mcdonalds-ur1e",
      getir_url: "https://getir.com/yemek/restoran/mcdonald-s-cetin-emec-bulv-cankaya-ankara/",
      trendyol_url: "https://www.trendyol.com/yardim/sorular/4852?grup=1",
      migros_url: "https://www.migros.com.tr/yemek",
      website_url: "https://siparis.mcdonalds.com.tr/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Cetinemec Bulvarı Migros Market Yanı",
      google_maps_url: "https://www.google.com/maps/place/%C3%87etin+Eme%C3%A7+McDonald's/@39.8969444,32.8166667,18z/data=!3m1!4b1!4m6!3m5!1s0x14d34f5877fc8b45:0xcada6c2f3cbcf5ef!8m2!3d39.8969444!4d32.8166667!16s%2Fg%2F1tf4hk7t",
      isApproved: 1,
    },
    {
      id: 2,
      title: "Burger King (Balgat)",
      user_id_isPartner: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1024px-Burger_King_2020.svg.png",
      tag: "Hamburger",
      price: 4,
      contact_mail: "info@burgerking.com",
      contact_number: "4445464",

      total_comment: 3327,
      avg_point: 3.49,
      taste_point: 3.76,
      speed_point: 2.99,
      service_point: 4.12,
      hygiene_point: 3.38,
      staff_point: 3.19,

      
      yemeksepeti_url: "https://www.yemeksepeti.com/restaurant/v17i/burger-king-v17i",
      getir_url: "https://getir.com/yemek/restoran/burger-king-cankaya-balgat-mah-cankaya-ankara/",
      trendyol_url: "https://www.trendyol.com/yardim/sorular/4852?grup=1",
      migros_url: "https://www.migros.com.tr/yemek",
      website_url: "https://www.burgerking.com.tr/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Balgat 1444.cad ile 122.sk kesişimi",
      google_maps_url: "https://www.google.com/maps/place/Burger+King/@39.9016962,32.8159442,19z/data=!3m1!4b1!4m6!3m5!1s0x14d34f45b83af7cf:0xb9561b3201bcd090!8m2!3d39.9016952!4d32.8165893!16s%2Fg%2F1td__tqr",
      isApproved: 1,
    },
    {
      id: 3,
      title: "KFC (Taurus)",
      user_id_isPartner: 9,
      img: "https://upload.wikimedia.org/wikipedia/tr/thumb/a/a5/Kentucky_Fried_Chicken_logo.svg/1280px-Kentucky_Fried_Chicken_logo.svg.png",
      tag: "Tavuk",
      price: 4,
      contact_mail: "info@kfc.com",
      contact_number: "4441212",

      total_comment: 1455,
      avg_point: 3.65,
      taste_point: 3.76,
      speed_point: 3.22,
      service_point: 4.12,
      hygiene_point: 3.38,
      staff_point: 3.79,

      
      yemeksepeti_url: "https://www.yemeksepeti.com/restaurant/fp7d/kfc-fp7d",
      getir_url: "https://getir.com/yemek/restoran/kfc-100-yil-taurus-cankaya-ankara/",
      trendyol_url: "https://www.trendyol.com/yardim/sorular/4852?grup=1",
      migros_url: "https://www.migros.com.tr/yemek",
      website_url: "https://kfcturkiye.com/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Taurus Avm Yemek Katı",
      google_maps_url: "https://www.google.com/maps/place/KFC/@39.8882855,32.8086558,17z/data=!4m14!1m7!3m6!1s0x14d345e2586d67ad",
      isApproved: 1,
    },
    {
      id: 4,
      title: "Chef İzkaya",
      user_id_isPartner: 10,
      img: "https://www.chefizakaya.com/img/202010856281744242495297.png",
      tag: "Asya Mutfağı",
      price: 6,
      contact_mail: "info@chefizkaya.com",
      contact_number: "4441234",

      total_comment: 784,
      avg_point: 4.37,
      taste_point: 4.16,
      speed_point: 3.79,
      service_point: 4.62,
      hygiene_point: 4.38,
      staff_point: 4.89,

      
      yemeksepeti_url: "https://www.yemeksepeti.com/restaurant/sb88/chef-izakaya",
      getir_url: "https://getir.com/yemek/restoran/chef-izakaya-kizilirmak-mah-cankaya-ankara/",
      trendyol_url: "https://www.trendyol.com/yardim/sorular/4852?grup=1",
      migros_url: "https://www.migros.com.tr/yemek",
      website_url: "https://www.chefizakaya.com/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Kızılırmak Mah. 1450 Sk ATM Plaza B Blok 1, D:G, 06510 Çankaya/Ankara",
      google_maps_url: "https://www.google.com/maps/place/Chef+Izakaya/@39.8987659,32.8095432,17z/data=!3m1!4b1!4m6!3m5!1s0x14d34fbd29be3197:0xad97043326d4714a!8m2!3d39.8987618!4d32.8121235!16s%2Fg%2F11lggns8v4",
      isApproved: 1,
    },
    {
      id: 5,
      title: "Burger King (Taurus)",
      user_id_isPartner: 11,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1024px-Burger_King_2020.svg.png",
      tag: "Hamburger",
      price: 4,
      contact_mail: "info@burgerking.com",
      contact_number: "4445464",

      total_comment: 2457,
      avg_point: 3.27,
      taste_point: 3.46,
      speed_point: 2.29,
      service_point: 3.62,
      hygiene_point: 2.78,
      staff_point: 4.19,

      
      yemeksepeti_url: "https://www.yemeksepeti.com/restaurant/v17i/burger-king-v17i",
      getir_url: "https://getir.com/yemek/restoran/burger-king-bulgurlu-mah-uskudar-istanbul/",
      trendyol_url: "https://www.trendyol.com/yardim/sorular/4852?grup=1",
      migros_url: "https://www.migros.com.tr/yemek",
      website_url: "https://siparis.mcdonalds.com.tr/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Taurus Avm Yemek Katı",
      google_maps_url: "https://www.google.com/maps/place/Taurus+AVM/@39.8882855,32.8086558,17z/data=!3m1!4b1!4m6!3m5!1s0x14d345e2586d67ad:0x1bcc4c9e5b0bf951!8m2!3d39.8882814!4d32.8112361!16s%2Fg%2F11byclvb52",
      isApproved: 1,
    },
    {
      id: 6,
      title: "Döner Bizde",
      user_id_isPartner: 12,
      img: "https://images.deliveryhero.io/image/fd-tr/LH/d517-hero.jpg",
      tag: "Döner",
      price: 1,
      contact_mail: "dönerciali@gmail.com",
      contact_number: "3122222222",

      total_comment: 233,
      avg_point: 3.52,
      taste_point: 3.46,
      speed_point: 3.69,
      service_point: 3.62,
      hygiene_point: 3.28,
      staff_point: 4.79,

      
      yemeksepeti_url: "https://www.yemeksepeti.com/",
      getir_url: "https://getir.com/yemek/restoran/",
      trendyol_url: "https://www.trendyol.com/yardim/sorular/4852?grup=1",
      migros_url: "https://www.migros.com.tr/yemek",

      hasSale: 0,
      country: "TURKEY",
      province: "ANKARA",
      address: "Balgat Döner Sokak no 17",
      google_maps_url: "https://www.google.com/maps/@39.9060089,32.8171223,18.35z",
      isApproved: 1,
    },
    {
      id: 7,
      title: "Arby's (Taurus)",
      user_id_isPartner: 17,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Arby%27s_logo.svg/1280px-Arby%27s_logo.svg.png",
      tag: "Fast-Food",
      price: 4,
      contact_mail: "info@arbys.com",
      contact_number: "4445244",

      total_comment: 3477,
      avg_point: 3.37,
      taste_point: 3.46,
      speed_point: 2.89,
      service_point: 3.22,
      hygiene_point: 3.18,
      staff_point: 4.11,

      
      yemeksepeti_url: "https://www.yemeksepeti.com/restaurant/y9x1/arbys-y9x1",
      getir_url: "https://getir.com/yemek/restoran/arby-s-cankaya-isci-bloklari-mah-100-yil-cankaya-ankara/",
      trendyol_url: "https://www.trendyol.com/yardim/sorular/4852?grup=1",
      migros_url: "https://www.migros.com.tr/yemek",
      website_url: "https://www.arbys.com.tr/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Taurus Avm Yemek Katı",
      google_maps_url: "https://www.google.com/maps/place/Taurus+AVM/@39.8882855,32.8086558,17z/data=!3m1!4b1!4m6!3m5!1s0x14d345e2586d67ad:0x1bcc4c9e5b0bf951!8m2!3d39.8882814!4d32.8112361!16s%2Fg%2F11byclvb52",
      isApproved: 1,
    },
    {
      id: 8,
      title: "Popeyes (Taurus)",
      user_id_isPartner: 18,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Popeyes_logo.svg/330px-Popeyes_logo.svg.png",
      tag: "Tavuk",
      price: 3,
      contact_mail: "info@popeyes.com",
      contact_number: "4445234",

      total_comment: 2411,
      avg_point: 3.38,
      taste_point: 3.77,
      speed_point: 3.54,
      service_point: 3.22,
      hygiene_point: 3.18,
      staff_point: 3.21,

      
      yemeksepeti_url: "https://www.yemeksepeti.com/restaurant/z9hu/popeyes-z9hu",
      getir_url: "https://getir.com/yemek/restoran/popeyes-cankaya-isci-bloklari-mah-100-yil-cankaya-ankara/",
      trendyol_url: "https://www.trendyol.com/yardim/sorular/4852?grup=1",
      migros_url: "https://www.migros.com.tr/yemek",
      website_url: "https://www.popeyes.com.tr/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Taurus Avm Yemek Katı",
      google_maps_url: "https://www.google.com/maps/place/Taurus+AVM/@39.8882855,32.8086558,17z/data=!3m1!4b1!4m6!3m5!1s0x14d345e2586d67ad:0x1bcc4c9e5b0bf951!8m2!3d39.8882814!4d32.8112361!16s%2Fg%2F11byclvb52",
      isApproved: 1,
    },
    {
      id: 9,
      title: "Gazi Üniversitesi",
      user_id_isPartner: 20,
      img: "https://upload.wikimedia.org/wikipedia/tr/4/4e/Gazi_%C3%9Cniversitesi_logo.png",
      tag: "Teknoloji Fakültesi",
      price: 6,
      contact_mail: "info@gazi.com",
      contact_number: "0312 911 48 48",

      total_comment: 9999,
      avg_point: 5,
      taste_point: 5,
      speed_point: 5,
      service_point: 5,
      hygiene_point: 5,
      staff_point: 5,

      website_url: "https://gazi.edu.tr/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Gazi Üniversitesi",
      google_maps_url: "https://www.google.com/maps/place/Gazi+%C3%9Cniversitesi/@39.939636,32.822306,16z/data=!4m6!3m5!1s0x14d34eda2bd572e3:0xc4944b9ae7b9927!8m2!3d39.9396355!4d32.8223059!16zL20vMDdoNjM4?hl=tr",
      isApproved: 1,
    },
    {
      id: 10,
      title: "Dominyos (Çetinemeç)",
      user_id_isPartner: 21,
      img: "https://play-lh.googleusercontent.com/_lq2HX0YJNDrr0EeUebLAB2JsGbRGyoFY-XOnuUFTPfeEqaHNIyMOGqLx-oq4mUWPpn0",
      tag: "Pizza",
      price: 4,
      contact_mail: "info@dominos.com",
      contact_number: "4448912",

      total_comment: 3563,
      avg_point: 3.70,
      taste_point: 3,
      speed_point: 4,
      service_point: 3.5,
      hygiene_point: 3.22,
      staff_point: 3.65,

      website_url: "https://www.dominos.com.tr/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Çetinemeç",
      google_maps_url: "https://www.google.com/maps/place/@39.8937226,32.8036852,15z/data=!4m6!3m5!1s0x14d3460680b08e7b:0x5be35af54480656b!8m2!3d39.8937226!4d32.8036852!16s%2Fg%2F1tht9gzj?hl=tr",
      isApproved: 1,
    },
    {
      id: 11,
      title: "Pizza Time (ODTÜ)",
      user_id_isPartner: 22,
      img: "https://files.sikayetvar.com/lg/cmp/89/8983.png?1522650125",
      tag: "Pizza",
      price: 3,
      contact_mail: "info@pizzatime.com",
      contact_number: "0312 321 46 48",

      total_comment: 8743,
      avg_point: 4,
      taste_point: 4,
      speed_point: 4,
      service_point: 4,
      hygiene_point: 4,
      staff_point: 4,

      country: "TURKEY",
      province: "ANKARA",
      address: "Odtü",
      google_maps_url: "https://www.google.com/maps/place/@39.893364,32.7988486,15z/data=!4m6!3m5!1s0x14d3478ae475071f:0xef4fe1d8b807400c!8m2!3d39.893364!4d32.7988486!16s%2Fg%2F11t3f2dlxp",
      isApproved: 1,
    },
    {
      id: 12,
      title: "Pizza ILFORNO (Taurus)",
      user_id_isPartner: 23,
      img: "https://d3heiv85u05n2u.cloudfront.net/images/brands/4854_original.jpg?1549609224",
      tag: "Pizza",
      price: 6,
      contact_mail: "info@pizzailforno.com",
      contact_number: "0312 785 48 68",

      total_comment: 9999,
      avg_point: 5,
      taste_point: 5,
      speed_point: 5,
      service_point: 5,
      hygiene_point: 5,
      staff_point: 5,

      website_url: "https://pizzailforno.com.tr/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Taurus",
      google_maps_url: "https://www.google.com/maps/place/Pizza+%C4%B0l+Forno+Taurus/@39.8883634,32.8106966,15z/data=!4m6!3m5!1s0x14d3452724e69c11:0xd6d3c334e997dd5f!8m2!3d39.8883634!4d32.8106966!16s%2F",
      isApproved: 1,
    },
    {
      id: 13,
      title: "ÖNCÜ DÖNER (Çetinemeç)",
      user_id_isPartner: 24,
      img: "https://www.oncudoner.com/assets/img/logo.png",
      tag: "Döner, Tavuk",
      price: 3,
      contact_mail: "info@oncu.com",
      contact_number: "0312 555 22 42",

      total_comment: 4679,
      avg_point: 2.5,
      taste_point: 3,
      speed_point: 3.5,
      service_point: 2.5,
      hygiene_point: 3,
      staff_point: 2.5,

      website_url: "https://www.oncudoner.com/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Çetinemeç",
      google_maps_url: "https://www.google.com/maps/place/@39.8941383,32.8043396,18z/data=!3m1!4b1!4m6!3m5!1s0x14d3474fa1dbbbe9:0x5272aaf26accc445!8m2!3d39.8941363!4d32.8056112!16s%2Fg%2F11swdjrlb3",
      isApproved: 1,
    },
    {
      id: 14,
      title: "Komagene (ODTÜ)",
      user_id_isPartner: 25,
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/9028a1144559089.Y3JvcCw2NTk4LDUxNjEsMTI3Myww.png",
      tag: "Çiğ Köfte",
      price: 2,
      contact_mail: "info@komagene.com",
      contact_number: "0312 123 49 48",

      total_comment: 5876,
      avg_point: 3.5,
      taste_point: 3,
      speed_point: 4,
      service_point: 3,
      hygiene_point: 4,
      staff_point: 3,

      website_url: "https://www.komagene.com.tr/",

      country: "TURKEY",
      province: "ANKARA",
      address: "Odtü",
      google_maps_url: "https://www.google.com/maps/place/@39.8971534,32.7985856,15z/data=!4m6!3m5!1s0x14d346049614f967:0x99fba03845f11440!8m2!3d39.8971534!4d32.7985856!16s%2Fg%2F11gf03nj8m",
      isApproved: 1,
    },

  ]).then(console.log(" - - - PARTNER: Seed Run Successful - - - "));
};
