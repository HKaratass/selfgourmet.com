@echo off
setlocal
echo Git Kuruluyor...
pause
winget install --id Git.Git -e --source winget
echo Git Kuruldu - PostgreSQL Kuruluyor...
pause
winget install -e --id PostgreSQL.PostgreSQL
echo PostgreSQL Kuruldu - NodeJS Kuruluyor...
pause
winget install -e --id OpenJS.NodeJS.LTS
echo NodeJS Kuruldu - Path Ekleniyor...
pause
< path_goster.txt ( set /P "projegit=" & set /P "postgresqladd=" & set /P "gitcmdadd=" & set /P "gitbinadd=" & set /P "PGPASSWORD=" )
set pather=%postgresqladd%%gitcmdadd%%gitbinadd%
set path=%path%;%pather%
echo Path Eklendi - Test Ediliyor...
pause
echo Git Version
git -v
echo psql Version
psql -V
echo Test Edildi. - Proje Indiriliyor...
pause
%projegit%
echo Proje Indirildi. - Bagimliliklar Indiriliyor...
pause
cd selfgourmet.com/client
call npm i
echo Bagimliliklar Indirildi - Database Konfigre Ediliyor...
echo PostgreSQL password=%PGPASSWORD%
pause
cd ../FirstUse
psql -h localhost -U postgres -f ./zpermission.sql
set PGPASSWORD=rfc3q5t3g32d3rf
psql -h localhost -d postgres -U adminhk -f ./zzcreatedb.sql
echo Database Konfigre Edildi. - Tablolar Olusturuluyor...
pause
cd ../server
call npm run knex migrate:latest
echo Tablolar Olusturuldu. - Veriler Yukleniyor...
call npm run knex seed:run
endlocal
echo Database Kuruldu. Veriler Yuklendi.
echo Program Hazir. Bitirmek icin Enter'a basin.
pause
