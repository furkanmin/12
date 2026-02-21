# Kamera İzin Demosu (Yasal Kullanım)

Bu proje, tarayıcıdaki standart izin akışıyla kameraya erişim istemeyi gösteren küçük bir örnektir.
Kullanıcı izin vermezse kamera başlatılmaz.

## Çalıştırma

```bash
python3 -m http.server 8000
```

Ardından tarayıcıdan `http://localhost:8000` adresine gidin ve **Kamerayı Başlat** düğmesine tıklayın.

> Not: Gerçek cihazlarda kamera izinleri için çoğu tarayıcı HTTPS ister.
> Yerel geliştirmede `localhost` istisna olarak kabul edilir.

## Güvenlik ve Etik

- Bu demo yalnızca açık kullanıcı rızası ile çalışır.
- Gizli veri toplama, izinsiz izleme veya kimlik avı amacıyla kullanılmamalıdır.
- Pentest çalışmaları yalnızca yazılı yetkiyle ve kapsam dahilinde yapılmalıdır.
