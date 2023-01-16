let isModalOpen = false;
let conntrastToggle = false;
const scaleFactor = 1 / 20;

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_qk1xq8m",
      "template_f0rwdoh",
      event.target,
      "q1MxGkZnyPYY_KMSu"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarly unavailable. Please contact me directly on: mohammedbarsatzulkarnine@gmail.com"
      );
    });
}

console.log(success);

function toggleModal() {
  //toggle modal
  if (isModalOpen == false) {
    document.body.classList += " modal--open";
    isModalOpen = true;
  } else {
    document.body.classList.remove("modal--open");
    isModalOpen = false;
  }
}

function closeModal() {
  isModalOpen = false;
  return document.body.classList.remove("modal--open");
}

function toggleContrast() {
  if (conntrastToggle == false) {
    document.body.classList += " dark-theme";
    conntrastToggle = true;
  } else {
    document.body.classList.remove("dark-theme");
    conntrastToggle = false;
  }
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}
