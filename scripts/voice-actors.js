const voiceActors = [
  {
    name: 'Mayumi Tanaka',
    role: 'Monkey D. Luffy',
    image: './assets/images/actor-1.jpeg',
    about:
      'Mayumi Tanaka is a Japanese voice actress from Tokyo, Japan. She is best known for voicing Monkey D. Luffy in the Japanese version of One Piece.',
  },
  {
    name: 'Akemi Okamura',
    role: 'Nami',
    image: './assets/images/actor-2.jpg',
    about:
      'Akemi Okamura is a Japanese voice actress from Tokyo, Japan. She is best known for voicing Nami in the Japanese version of One Piece.',
  },
  {
    name: 'Kazuya Nakai',
    role: 'Roronoa Zoro',
    image: './assets/images/actor-3.webp',
    about:
      'Kazuya Nakai is a Japanese voice actor from Tokyo, Japan. He is best known for voicing Roronoa Zoro in the Japanese version of One Piece.',
  },
  {
    name: 'Kappei Yamaguchi',
    role: 'Usopp',
    image: './assets/images/actor-4.jpeg',
    about:
      'Kappei Yamaguchi is a Japanese voice actor from Tokyo, Japan. He is best known for voicing Usopp in the Japanese version of One Piece.',
  },
  {
    name: 'Hiroaki Hirata',
    role: 'Sanji',
    image: './assets/images/actor-5.jpg',
    about:
      'Kōichi Yamadera is a Japanese voice actor from Tokyo, Japan. He is best known for voicing Sanji in the Japanese version of One Piece.',
  },
  {
    name: 'Yuriko Yamaguchi',
    role: 'Nico Robin',
    image: './assets/images/actor-6.jpg',
    about:
      'Yuko Kobayashi is a Japanese voice actress from Tokyo, Japan. She is best known for voicing Nico Robin in the Japanese version of One Piece.',
  },
];

const generateActorEl = (_) => `<div class="actor-card">
            <img
              src="${_.image}"
              alt="${_.name}"
              class="actor-image"
            />
            <div class="actor-info">
              <h5>${_.name}</h5>
              <h6>${_.role}</h6>
              <span></span>
              <p>${_.about}</p>
            </div>
          </div>`;

const actorListEl = document.getElementById('voice-actor-list');

voiceActors.forEach((actor) => {
  actorListEl.innerHTML += generateActorEl(actor);
});

// Show more/less voice actors in Mobile Version
const actorEl = document.getElementById('voice-actor-section');
const actorBtn = document.getElementById('voice-actor-btn');

actorBtn.addEventListener('click', () => {
  actorEl.classList.toggle('show-less-actor');
});
