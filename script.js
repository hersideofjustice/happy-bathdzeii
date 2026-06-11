let count = 0;

const stars = document.querySelectorAll('.game-star');
const msg = document.getElementById('final-message');

const messages = [
"⭐ Big Forehead Level 1 Unlocked",
"⭐ NASA once considered using your forehead to reflect signals",
"⭐ Height Check: Please remain where you are. We can't find you.",
"⭐ You are now 19 and still fighting the top shelf"
];

stars.forEach((star, index) => {
    star.addEventListener('click', () => {

        if(star.dataset.clicked) return;

        star.dataset.clicked = true;
        star.style.opacity = "0.3";

        msg.innerHTML = `<p>${messages[index]}</p>`;

        count++;

        if(count === 4){

            setTimeout(() => {

                document.body.style.background = "black";

                msg.innerHTML = `
                <h1 style="font-size:3rem;">
                🎆 HAPPY BIRTHDAY VERONICA 🎆
                </h1>
                `;

            }, 1500);

        }

    });
});
