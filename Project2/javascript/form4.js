document.addEventListener('DOMContentLoaded', function () {
  displayPaymentInfo();
  const bayarButton = document.getElementById('bayarButton');
  bayarButton.addEventListener('click', handlePayment);
});

function displayPaymentInfo() {
  const bookingCode = localStorage.getItem('bookingCode');
  const tujuan = localStorage.getItem('tujuan');
  const selectedMethod = localStorage.getItem('selectedMethod');
  const bankAccount = getBankAccount(selectedMethod); // Fungsi untuk mendapatkan nomor rekening berdasarkan metode pembayaran
  const hargaTiket = localStorage.getItem('hargaTiket');
  const jumlahTiket = localStorage.getItem('jumlahTicket');
  const hargaTotal = calculateTotalPrice(hargaTiket, jumlahTiket);

  document.getElementById('bookingCode').innerText = bookingCode;
  document.getElementById('tujuan').innerText = tujuan;
  document.getElementById('selectedMethod').innerText = selectedMethod;
  document.getElementById('bankAccount').innerText = bankAccount;
  document.getElementById('hargaTiket').innerText = hargaTiket;
  document.getElementById('jumlahTiket').innerText = jumlahTiket;
  document.getElementById('hargaTotal').innerText = hargaTotal;
}

function handlePayment() {
  // Logic untuk melakukan pembayaran
  // Contoh: Validasi, kirim data ke backend, dll.
  alert('Pembayaran berhasil dilakukan!');
}

function getBankAccount(selectedMethod) {
  // Fungsi untuk mendapatkan nomor rekening berdasarkan metode pembayaran
  // Implementasikan sesuai dengan nomor rekening untuk setiap metode pembayaran
  // Contoh:
  if (selectedMethod === 'Bank Negara Indonesia') {
    return '123-456-789';
  } else if (selectedMethod === 'Bank Republik Indonesia') {
    return '987-654-321';
  }
  // Tambahkan logika untuk metode pembayaran lainnya
}

function calculateTotalPrice(pricePerTicket, quantity) {
  return pricePerTicket * quantity;
}
