function openSidebar(id, cover) {
    if (id === 'sidebar-1') {
        document.getElementById(id).style.width = 'fit-content';
    }
    document.getElementById(id).classList.toggle('active');
    document.getElementById(cover).classList.toggle('active');

    document.getElementById(cover).addEventListener('click', () => {

        if (document.getElementById(id).classList.contains('active')) {
            if (id === 'sidebar-1') {
                document.getElementById(id).style.width = '0px';
            }
            else if (id.includes('small-sidebar')) {
                const new_id = id.split(id)[1] || '';
                document.getElementById('sidebar').classList.remove('active');
                document.getElementById('cover').classList.remove('active');
                document.getElementById(id).classList.remove('active');
                document.getElementById('small-cover').classList.remove('active');
            }
            else if (id.includes('mini-sidebar')) {
                document.getElementById('sidebar').classList.remove('active');
                document.getElementById('cover').classList.remove('active');
                document.getElementById('small-sidebar0').classList.remove('active');
                document.getElementById('small-cover').classList.remove('active');
                document.getElementById(id).classList.remove('active');
                document.getElementById('mini-cover').classList.remove('active');
            }
            document.getElementById(id).classList.remove('active');
            document.getElementById(cover).classList.remove('active');

        }
    });
}


function closeSidebar(id, cover) {
    if (id === 'sidebar-1') {
        document.getElementById(id).style.width = '0px';
    }
    document.getElementById(id).classList.remove('active');
    document.getElementById(cover).classList.remove('active');

}

function openSecondBar(id_1, id_2, id_3, id_4) {
    document.getElementById(id_1).style.display = 'block';
    document.getElementById(id_2).style.display = 'none';
    document.getElementById(id_3).style.display = 'none';
    document.getElementById(id_4).style.display = 'none';
}

function bothOpenClose() {
    openSidebar('sidebar-1', 'content-cover');
    closeSecondbar();
}
function closeSecondbar() {
    document.getElementById('mini-sidebar-1').style.display = 'none';
    document.getElementById('mini-sidebar-2').style.display = 'none';
    document.getElementById('mini-sidebar-3').style.display = 'none';
    document.getElementById('mini-sidebar-4').style.display = 'none';
}

function closeBothSidebar(sidebar, small_sidebar) {
    document.getElementById(sidebar).classList.remove('active');
    document.getElementById('cover').classList.remove('active');
    document.getElementById(small_sidebar).classList.remove('active');
    document.getElementById('small-cover').classList.remove('active');

}
function closeThreeSidebar(sidebar, small_sidebar, mini_sidebar) {
    document.getElementById(sidebar).classList.remove('active');
    document.getElementById('cover').classList.remove('active');
    document.getElementById(small_sidebar).classList.remove('active');
    document.getElementById('small-cover').classList.remove('active');
    document.getElementById(mini_sidebar).classList.remove('active');
    document.getElementById('mini-cover').classList.remove('active');

}

function moveCursor(cursorId, event) {
    const cursor = document.getElementById(cursorId);
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
}

document.addEventListener('mousemove', function (e) {
    moveCursor('custom-cursor-1', e);
    moveCursor('custom-cursor-2', e);
    moveCursor('custom-cursor-3', e);
    moveCursor('custom-cursor-4', e);
});


const countries = [
    { img: 'https://cdn-icons-png.flaticon.com/512/206/206626.png', name: 'United State (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/206/206606.png', name: 'India (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/555/555473.png', name: 'Canada (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/555/555604.png', name: 'Afghanistan (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197604.png', name: 'Åland Islands (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197633.png', name: 'Albania (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197646.png', name: 'Algeria (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197599.png', name: 'Angola (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197573.png', name: 'Argentina (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197561.png', name: 'Aruba (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197507.png', name: 'Australia (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197598.png', name: 'Austria (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197621.png', name: 'Bangladesh (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197593.png', name: 'Belgium (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197563.png', name: 'Belize (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197613.png', name: 'Benin (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197627.png', name: 'Bhutan (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197606.png', name: 'Brazil (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197601.png', name: 'China (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197605.png', name: 'Chile (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197580.png', name: 'Denmark (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197603.png', name: 'Ecuador (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197598.png', name: 'Egypt (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197619.png', name: 'Estonia (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197578.png', name: 'Iceland (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197587.png', name: 'Indonesia (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197618.png', name: 'Iraq (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197590.png', name: 'Italy (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197586.png', name: 'Jordan (INR ₹)' },
    { img: 'https://cdn-icons-png.flaticon.com/512/197/197601.png', name: 'Kuwait (INR ₹)' }
];


document.getElementById('select-list-data').addEventListener('click', function (event) {
    event.preventDefault();
    dropDown.classList.toggle('show');
});

countries.forEach(country => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'listOption';
    optionDiv.innerHTML = `
        <img src="${country.img}" />
        <span>${country.name}</span>
    `;
    dropDown.appendChild(optionDiv);
});

dropDown.addEventListener('click', function (e) {
    if (e.target.closest('.listOption')) {
        const selectedCountry = e.target.closest('.listOption').querySelector('span').textContent;
        const selectedImage = e.target.closest('.listOption').querySelector('img').src;

        document.getElementById('dropDown-country-name').textContent = selectedCountry;
        document.getElementById('dropDown-image').src = selectedImage;

        dropDown.classList.remove('show');
    }
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('#select-list-data') && !event.target.closest('#dropDown')) {
        dropDown.classList.remove('show');
    }
});
