const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const statusText = document.getElementById('status');
const preview = document.getElementById('preview');

let stream;

const setStatus = (message) => {
  statusText.textContent = `Durum: ${message}`;
};

const setControls = ({ canStart, canStop }) => {
  startBtn.disabled = !canStart;
  stopBtn.disabled = !canStop;
};

const stopStream = () => {
  if (!stream) {
    setStatus('Aktif kamera akışı yok.');
    return;
  }

  stream.getTracks().forEach((track) => track.stop());
  preview.srcObject = null;
  stream = undefined;
  setControls({ canStart: true, canStop: false });
  setStatus('Kamera durduruldu.');
};

const startStream = async () => {
  if (!navigator.mediaDevices?.getUserMedia) {
    setStatus('Tarayıcı kamera API desteği sunmuyor.');
    return;
  }

  setStatus('İzin bekleniyor...');

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
      audio: false,
    });

    preview.srcObject = stream;
    setControls({ canStart: false, canStop: true });
    setStatus('Kamera açık (kullanıcı izni ile).');
  } catch (error) {
    if (error.name === 'NotAllowedError') {
      setStatus('İzin reddedildi. Kamera açılmadı.');
    } else {
      setStatus(`Kamera açılamadı: ${error.name}`);
    }
  }
};

startBtn.addEventListener('click', startStream);
stopBtn.addEventListener('click', stopStream);
window.addEventListener('beforeunload', stopStream);
