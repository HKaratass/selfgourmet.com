# MANUEL

- Gerekli Uygulamalar
    - Nodejs
    - PostgreSQL

<br>

- Database Kurulumu (in Server Folder Command)
    - Add User && Create DB (on adminhk user)
        - DATABASE_USER="adminhk"
        - DATABASE_PASSWORD="rfc3q5t3g32d3rf"
        - DATABASE_NAME="selfgourmet"
        - DATABASE_HOST="localhost" (default postgre port)

    - `npm run knex migrate:latest`
    - `npm run knex seed:run`

<br>

- Server Command (in Server Folder)
    - `npm start`

<br>

- Client Command (in Client Folder)
    - `npm i`
    - `npm start`

<br>

# AUTO

_setup.bat_ içerisindeki kodlar kontrol ederek kurulumu yapabilirsiniz.

OR

FirstUse klasöründeki _config.bat_ ile dependencies in client için `npm i` çalıştırır

FirstUse klasöründeki _zdatabase.bat_ içinde database bilgileri girerek çalıştırırsanız database kurulumları FirstUse içindeki _*.sql_ kodları ile yapılacaktır. (posgres path'e eklenmiş olması lazım)

<br>

- Kurulum Sonrası Çalıştırmak için;
    - selfgourmet.com klasörü içinde _startServerOnCmd.bat_ çalıştırarak backendi aktif hale getirin
    - selfgourmet.com klasörü içinde _startClientOnCmd.bat_ çalıştırarak frontendi aktif hale getirin sitenin otomatik olarak varsayılan tarayıcıda açılması lazım
    - http://localhost:3000/ üzerinden siteye ulaşabilirsiniz 