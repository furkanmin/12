# Kamera İzin Demosu (Yasal Kullanım)

Bu proje, tarayıcıdaki standart izin akışıyla kameraya erişim istemeyi gösteren küçük bir örnektir.
Kullanıcı izin vermezse kamera başlatılmaz.

## Kali Linux Üzerinde Adım Adım Çalıştırma

### 1) Terminal aç ve proje klasörüne gir

```bash
cd /workspace/12
```

### 2) Python 3 kurulu mu kontrol et

```bash
python3 --version
```

Eğer sürüm görüyorsan devam et. Hata alırsan Kali'de önce Python 3 kurulumunu tamamla.

### 3) Lokal web sunucusunu başlat

```bash
python3 -m http.server 8000
```

Terminalde `Serving HTTP on 0.0.0.0 port 8000` benzeri bir çıktı görmelisin.

### 4) Tarayıcıdan sayfayı aç

Aşağıdaki adrese git:

```text
http://localhost:8000
```

### 5) Kamera iznini verip demoyu başlat

- Sayfada **Kamerayı Başlat** butonuna tıkla.
- Tarayıcı izin penceresi açıldığında **İzin ver** seç.
- Görüntü gelince test tamam.

### 6) Kamerayı durdur

- **Kamerayı Durdur** butonuna tıkla.
- Gerekirse sekmeyi kapatmadan önce kameranın kapandığını doğrula.

### 7) Sunucuyu kapat

Sunucuyu çalıştırdığın terminale dönüp `Ctrl + C` yap.

## Sorun Giderme

- **Sayfa açılmıyor**: Sunucunun gerçekten çalıştığını kontrol et (`python3 -m http.server 8000`).
- **Kamera izni çıkmıyor**: Tarayıcı ayarlarında site izinlerini sıfırla ve tekrar dene.
- **Kamera açılmıyor**: Kamerayı kullanan başka uygulamaları kapat.
- **Uzak cihazdan erişim**: Aynı ağdan testte `http://<kali-ip>:8000` kullan; firewall/ağ izinlerini kontrol et.

## Güvenlik ve Etik

- Bu demo yalnızca açık kullanıcı rızası ile çalışır.
- Gizli veri toplama, izinsiz izleme veya kimlik avı amacıyla kullanılmamalıdır.
- Pentest çalışmaları yalnızca yazılı yetkiyle ve kapsam dahilinde yapılmalıdır.
