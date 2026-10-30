var tombol = document.getElementById("tombolAtas");

// deteksi aktivitas scroll
window.onscroll = function() {

    // cek posisi scroll halaman
    if (document.documentElement.scrollTop > 500) {

        // nampilin tombol kalo scroll > 500px
        tombol.classList.add("muncul");

    } else {

        // nyembunyiin tombol kalo di scroll < 500px
        tombol.classList.remove("muncul");
    }
};

// function back to top halaman
function kembaliKeAtas() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
