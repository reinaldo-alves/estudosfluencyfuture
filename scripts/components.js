const viewMoreButtons = document.querySelectorAll('.view-more-expand, .view-more-collapse');
viewMoreButtons.forEach(button => {
    button.onclick = (event) => {
        const holder = button.parentElement.parentElement;
        holder.classList.toggle('view-more--expand');
    }
});

function getModal(id) {
    return document.getElementById(id);
}

function openModal(id) {
    const modal = getModal(id);
    modal.removeAttribute('hidden');
}

function closeModal(id) {
    const modal = getModal(id);
    modal.setAttribute('hidden', 'true');
}