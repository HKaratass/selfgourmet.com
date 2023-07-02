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

<img width="1280" alt="loginpage" src="https://github.com/HKaratass/webapp/assets/132591980/06f11e92-1136-48ef-bc9e-11f3fe6208be">

> Reklam Çeviren Otomatik Slaytlı Giriş Ekranı

<img width="274" alt="Ekran görüntüsü 2023-07-02 191844" src="https://github.com/HKaratass/selfgourmet.com-beta/assets/132591980/91519e8b-b051-4773-9eea-7aa9fe1e3947">

> Giriş Ekranı Mobil ve Responsive Görünümü (slayt alanı belli bir pixele kadar yeniden boyutlandırılır)

### Home Page

<img width="1280" alt="homepage" src="https://github.com/HKaratass/webapp/assets/132591980/17efc4fe-3c3b-4ea5-b01c-8aad4f784a63">

> Anasayfa (Hızlı Arama Butonları ve Reklam Vitrini) (normalde banner slayt olacaktı ama uygun görsel bulunamadı)

<img width="275" alt="Ekran görüntüsü 2023-07-02 192057" src="https://github.com/HKaratass/selfgourmet.com-beta/assets/132591980/5d9da383-089b-4e21-b967-33c85fced335">

> Anasayfa Mobil Görünümü (isterlerde olmamasına rağmen birkaç sayfa mobil veya responsive tasarlandı)

<img width="1280" alt="popup" src="https://github.com/HKaratass/webapp/assets/132591980/14d21e64-9682-40f0-942a-38e4013f3933">

> Animasyonlu Kullanıcı Popup Menüsü

### List Page

<img width="1280" alt="listpage" src="https://github.com/HKaratass/webapp/assets/132591980/4e424dff-902a-4d1e-92ef-81eb86d9ba49">

> Tüm Restoranlar veya Aranan Restoranlar Listelenir (listelenenler üzerinden en çok kullanılan platformalara direk yönlendirme sağlanır (örneğin Yemeksepeti))

<img width="1280" alt="listpage-filtered" src="https://github.com/HKaratass/webapp/assets/132591980/41c1c544-39f1-4291-b07b-d14d405924ef">

> Filtreleme Sistemi Sonucu Listelenir

### Partner Page

<img width="1280" alt="partnerpage-comment" src="https://github.com/HKaratass/webapp/assets/132591980/7c1ae105-0c27-4755-9c0b-71e83a6394ae">

> Yorum Sekmesi (En beğenilen, En Son, Cevaplanan olarak sekmelenir)

<img width="1280" alt="partnerpage-postcommentbut" src="https://github.com/HKaratass/webapp/assets/132591980/da7a02fc-a50a-49df-9ee9-5ab7670d2fae">

> Animasyonlu Gizlenir Yorum Yazma Butonu

<img width="1280" alt="partnerpage-sales" src="https://github.com/HKaratass/webapp/assets/132591980/abf851c9-1a7e-4003-8b42-266605939c18">

> Kampanyalar Sekmesi (isterlerde yoktu eklemeyi düşündüm ama yarım kaldı)

<img width="1280" alt="partnerpage-menulist" src="https://github.com/HKaratass/webapp/assets/132591980/48ef6c15-e0ee-4f50-a083-a7e1917f690d">

> Menü Sekmesi

<img width="1280" alt="partnerpage-menulistopen" src="https://github.com/HKaratass/webapp/assets/132591980/d91192c5-d20e-488e-840e-e4abccf48451">

> Bir Menünün Açılımı (ucuzdan pahalıya tüm platformları fiyatlarıyla birlikte gösterir ve tıklanınca siteye yönlendirir, eğer admin, mod, ya da mağaza sahibi ise kullanıcı en sona hazır platform ekleme modülü ekler)

<img width="1280" alt="partnerpage-comment-post" src="https://github.com/HKaratass/webapp/assets/132591980/988f9208-5736-4239-944e-b86a60d1f6e5">

> Yorum Yazma Penceresi

<img width="1280" alt="partnerpage-menulist-addmenubut" src="https://github.com/HKaratass/webapp/assets/132591980/7eb23cb3-4ab1-47cd-b9e0-22b691fbe368">

> Animasyonlu Gizlenir Menü Ekleme Butonu (sadece admin, mod ve mağaza sahibi tarafından görüntülenir)

<img width="1280" alt="partnerpage-menulist-addmenu" src="https://github.com/HKaratass/webapp/assets/132591980/7bea408c-144a-4df4-b4e5-b817fc46c6bb">

> Menü Ekleme Penceresi

<img width="1280" alt="partnerpage-menulist-add-director" src="https://github.com/HKaratass/webapp/assets/132591980/6ea64dc3-b7ab-4c06-83ca-35623e9561df">

> Hazır Platform Ekleme Modülü (sadece admin, mod ve mağaza sahibi tarafından görüntülenir)

### Profile Page

<img width="1280" alt="profilepage" src="https://github.com/HKaratass/webapp/assets/132591980/57267414-6bd3-44f2-8a35-89dc972aa76f">

> Profil Sayfası (sol tarafta kullanıcı fotoğrafı ve bilgileri sağda kullanıcı işlem butonları (aktif değil))

### Not Found Page (404)

<img width="1280" alt="notfoundpage" src="https://github.com/HKaratass/selfgourmet.com-beta/assets/132591980/66b479af-ba2e-4d6f-8406-397e31ed7a17">

> Not Found Page (yönlendirme URL'leri hariç tüm URL'ler bu adrese yönlendirilir)

_Not: Navbar arkaplanı renk geçiş animasyonludur. Bu yüzden erkan görüntülerinde farklı renkle çıkmıştır._
