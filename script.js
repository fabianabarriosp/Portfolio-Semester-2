// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const papers = [
    document.querySelector("#p1"),
    document.querySelector("#p2"),
    document.querySelector("#p3"),
    document.querySelector("#p4"),
    document.querySelector("#p5"),
    document.querySelector("#p6"),
    document.querySelector("#p7"),
    document.querySelector("#p8"),
    document.querySelector("#p9"),
    document.querySelector("#p10"),
    document.querySelector("#p11"),
    document.querySelector("#p12"),
    document.querySelector("#p13")
];

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Logic
let currentLocation = 1;
let numOfPapers = papers.length;  // 13 papers = 26 pages
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(50px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(-20px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        if (currentLocation === 1) {
            openBook();
        }
        
        papers[currentLocation - 1].classList.add("flipped");
        papers[currentLocation - 1].style.zIndex = currentLocation;

        currentLocation++;

        if (currentLocation === maxLocation) {
            closeBook(false);
        }
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        if (currentLocation === 2) {
            closeBook(true);
        }

        currentLocation--;

        papers[currentLocation - 1].classList.remove("flipped");
        papers[currentLocation - 1].style.zIndex = numOfPapers - currentLocation;

        if (currentLocation === 1) {
            closeBook(true);
        }
    }
}


//Sticky note / learning outcomes
// Get elements
const popupButton = document.getElementById('popup-button');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-popup');

// Show popup
popupButton.addEventListener('click', () => {
    popup.classList.remove('hidden');
    popup.style.display = 'block';
});

// Close popup
closeButton.addEventListener('click', () => {
    popup.classList.add('hidden');
    popup.style.display = 'none';
});
