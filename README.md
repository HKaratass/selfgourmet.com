# SELFGOURMET.COM
## webapp-firt-try-basedon-pern-stack

Dışardan yemek söylemeyi tercih eden biri olarak restoranların online sipariş platformlarındaki fiyat farkını ve bu fiyatları karşılaştıracak bir site olmadığını fark  ettim(örneğin cimri.com gibi).
Fiyat farkı rekabet ortamı yaratmak için bunun gibi bir siteye ihtiyaç olduğunu düşünüyorum.

Full Stack PERN Çalışmam

- Database: PostgreSQL
- Backend: NodeJS/Express Server
- Frontend: ReactJS

Kullanmış olduğum önemli paketler

- Styled Component
- Knex (for Postgres)
- JWT/bcryptjs (Json Web Token)
- Redux
- Axios
- React-Router (artık react ile varsayılan)
- React-Toastify

Ek olarak uygulamayı sunmak için bir vps' de deploy ettim. (1 aylık server 15/06/23 itibari ile kapandı)

- HostingerVPS
- Linux(Ubuntu)
- NGINX
- NodeJS

> Yeni vps alındıktan sonra tekrar subdomain altında live olacaktır.

***Gazi Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği proje ödevidir kurumlar, fiyatlar ve yorumlar gerçeği yansıtmaz.***

- Projeden istenenler;
  - Proje Yönetimi
  - Verilen rapordaki isterlerin yerine getirilmesi (kod ve kullanılan teknolojilere bakılmaksızın)
<hr>

### Login Page

<img width="1280" alt="loginpage" src="/screenshots/loginpage.png">

> Reklam Çeviren Otomatik Slaytlı Giriş Ekranı

<img width="274" alt="loginpagemobil" src="/screenshots/loginpagemobil.png">

> Giriş Ekranı Mobil ve Responsive Görünümü (slayt alanı belli bir pixele kadar yeniden boyutlandırılır)

### Home Page

<img width="1280" alt="homepage" src="/screenshots/homepage.png">

> Anasayfa (Hızlı Arama Butonları ve Reklam Vitrini) (normalde banner slayt olacaktı ama uygun görsel bulunamadı)

<img width="275" alt="homepagemobil" src="screenshots/homepagemobil.png">

> Anasayfa Mobil Görünümü (isterlerde olmamasına rağmen birkaç sayfa mobil veya responsive tasarlandı)

<img width="1280" alt="popup" src="/screenshots/popup.png">

> Animasyonlu Kullanıcı Popup Menüsü

### List Page

<img width="1280" alt="listpage" src="/screenshots/listedpage.png">

> Tüm Restoranlar veya Aranan Restoranlar Listelenir (listelenenler üzerinden en çok kullanılan platformalara direk yönlendirme sağlanır (örneğin Yemeksepeti))

<img width="1280" alt="listpage-filtered" src="/screenshots/listpagefiltered.png">

> Filtreleme Sistemi Sonucu Listelenir

### Partner Page

<img width="1280" alt="partnerpage-comment" src="/screenshots/commenttab.png">

> Yorum Sekmesi (En beğenilen, En Son, Cevaplanan olarak sekmelenir)

<img width="1280" alt="partnerpage-postcommentbut" src="/screenshots/commentaddbut.png">

> Animasyonlu Gizlenir Yorum Yazma Butonu

<img width="1280" alt="partnerpage-sales" src="/screenshots/salestab.png">

> Kampanyalar Sekmesi (isterlerde yoktu eklemeyi düşündüm ama yarım kaldı)

<img width="1280" alt="partnerpage-menulist" src="/screenshots/menutab.png">

> Menü Sekmesi

<img width="1280" alt="partnerpage-menulistopen" src="/screenshots/openmenu.png">

> Bir Menünün Açılımı (ucuzdan pahalıya tüm platformları fiyatlarıyla birlikte gösterir ve tıklanınca siteye yönlendirir, eğer admin, mod, ya da mağaza sahibi ise kullanıcı en sona hazır platform ekleme modülü ekler)

<img width="1280" alt="partnerpage-comment-post" src="/screenshots/commentadd.png">

> Yorum Yazma Penceresi

<img width="1280" alt="partnerpage-menulist-addmenubut" src="/screenshots/menuaddbut.png">

> Animasyonlu Gizlenir Menü Ekleme Butonu (sadece admin, mod ve mağaza sahibi tarafından görüntülenir)

<img width="1280" alt="partnerpage-menulist-addmenu" src="/screenshots/menuadd.png">

> Menü Ekleme Penceresi

<img width="1280" alt="partnerpage-menulist-add-director" src="/screenshots/directionadd.png">

> Hazır Platform Ekleme Modülü (sadece admin, mod ve mağaza sahibi tarafından görüntülenir)

### Profile Page

<img width="1280" alt="profilepage" src="/screenshots/profilepage.png">

> Profil Sayfası (sol tarafta kullanıcı fotoğrafı ve bilgileri sağda kullanıcı işlem butonları (aktif değil))

### Not Found Page (404)

<img width="1280" alt="notfoundpage" src="/screenshots/notfoundpage.png">

> Not Found Page (yönlendirme URL'leri hariç tüm URL'ler bu adrese yönlendirilir)

_Not: Navbar arkaplanı renk geçiş animasyonludur. Bu yüzden erkan görüntülerinde farklı renkle çıkmıştır._
