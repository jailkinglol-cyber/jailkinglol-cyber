const message = `Hi i miss your presence. This week i was really really sick and wanted to spam messages sayo.\n I wish i could meet you. i just look into your pictures when i do miss you but sometimes i'll just stare at the ceiling aimlesly tjinking about u\n\nI miss you so much. I know you're doing well. Neshs is having a SN are you coming? Goodbye...\n\nI never wanted to be a bloke of the past but it seems inevitable in your world. Senior's life is moving fast. Hold on to it before you get taken away.\n\nAnyway, I hope you're doing okay, even though we’re not in each other’s lives anymore.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}



