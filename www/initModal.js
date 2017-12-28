$("#modal").iziModal();

$(document).on('click', '.trigger-custom', function (event) {
    event.preventDefault();
    $('#modal').iziModal('open');
});