// event pada saat link di klik
$('.page-scroll').on('click', function() {
    
    // ambil isi href
    var tujuan = $(this).attr('href');
    // console.log(href);

    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    // console.log(elemenTujuan);

    // pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000);

    e.preventDefault();
    
});