// form1
document.addEventListener('DOMContentLoaded', function () {
  const savedTujuan = localStorage.getItem('tujuan');
  document.getElementById('tujuan').value = savedTujuan || ''; // Mengisi nilai tujuan ke dalam elemen input dengan id 'tujuan'
});

function generateTicket1() {
  const jumlahTicket = document.getElementById('jumlahTicket').value;
  const tujuan = document.getElementById('tujuan').value;
  const tanggalPemesanan = document.getElementById('tanggalPemesanan').value;

  if (jumlahTicket <= 0 || jumlahTicket > 5) {
    alert('Masukkan jumlah tiket antara 1 hingga 5.');
    return;
  }

  // Generate random 6-digit booking code
  const bookingCode = Math.floor(100000 + Math.random() * 900000);

  // Store data in local storage
  localStorage.setItem('bookingCode', bookingCode);
  localStorage.setItem('jumlahTicket', jumlahTicket);
  localStorage.setItem('tujuan', tujuan);
  localStorage.setItem('tanggalPemesanan', tanggalPemesanan);

  window.location.href = '../html/form2.html';
}

// form 2
window.onload = function () {
  generateTicket2();
};

function generateTicket2() {
  const jumlahTicket = localStorage.getItem('jumlahTicket');
  const bookingCode = localStorage.getItem('bookingCode');
  const tujuan = localStorage.getItem('tujuan');
  const tanggalPemesanan = localStorage.getItem('tanggalPemesanan');

  const ticketCardsContainer = document.getElementById('ticketCards');

  for (let i = 0; i < parseInt(jumlahTicket); i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>Kode Booking: ${bookingCode}</h3>
        <label for="namaPemesan${i}">Nama Pemesan:</label>
        <input type="text" id="namaPemesan${i}" name="namaPemesan${i}"><br><br>
        
        <label for="gender${i}">Gender:</label>
        <select id="gender${i}" name="gender${i}">
          <option value="Laki-Laki">Laki-Laki</option>
          <option value="">Perempuan</option>
        </select><br><br>
        
        <p>Tujuan: ${tujuan}</p>
        <p>Tanggal Pemesanan: ${tanggalPemesanan}</p>
      `;
    ticketCardsContainer.appendChild(card);
  }
}

function redirectToPayment2() {
  window.location.href = '../html/form3.html';
}

// form3

document.addEventListener('DOMContentLoaded', function () {
  const bookingCode = document.getElementById('bookingCode');
  const jumlahTicketElement = document.getElementById('jumlahTicket');

  // Mengambil data dari localStorage
  const savedBookingCode = localStorage.getItem('bookingCode');
  const savedJumlahTicket = localStorage.getItem('jumlahTicket');

  // Menampilkan data di halaman index3.html
  bookingCode.textContent = savedBookingCode;

  // Menampilkan jumlah tiket yang tidak dapat diubah
  const ticketDisplay = document.createElement('p');
  ticketDisplay.textContent = `Jumlah Ticket: ${savedJumlahTicket || 0}`;
  jumlahTicketElement.appendChild(ticketDisplay);
});

function selectBorder(element) {
  var borders = document.querySelectorAll('.border-example');
  borders.forEach(function (border) {
    border.classList.remove('selected');
  });
  element.classList.add('selected');

  const selectedMethod = element.textContent.trim();
  localStorage.setItem('selectedMethod', selectedMethod); // Menyimpan ke localStorage
}

function redirectToPayment() {
  window.location.href = '../html/form4.html';
}

// price.html
function redirectToForm1(tujuan, hargaTiket) {
  localStorage.setItem('tujuan', tujuan);
  localStorage.setItem('hargaTiket', hargaTiket); // Menyimpan harga tiket di localStorage
  window.location.href = 'form1.html'; // Ubah 'form1.html' sesuai dengan URL atau nama file form1 yang diinginkan
}

function redirectToForm4(tujuan) {
  localStorage.setItem('tujuan', tujuan);
  window.location.href = 'form4.html'; // Ubah 'form4.html' sesuai dengan URL atau nama file form4 yang diinginkan
}

// wisata
function redirectToprice() {
  window.location.href = 'price.html'; // Ubah 'form1.html' sesuai dengan URL atau nama file form1 yang diinginkan
}
