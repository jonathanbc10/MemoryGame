const cardArray = [
    {
        "name": "conejo",
        "img": "./img/conejo.jpg"
    },
    {
        "name": "gatito",
        "img": "./img/gatito.jpg"
    },
    {
        "name": "poodle",
        "img": "./img/poodle.jpg"
    },
    {
        "name": "schnauzer",
        "img": "./img/schnauzer.jpg"
    },
    {
        "name": "shiba",
        "img": "./img/shiba.jpg"
    },
    {
        "name": "tortuga",
        "img": "./img/tortuga.jpg"
    },
    {
        "name": "conejo",
        "img": "./img/conejo.jpg"
    },
    {
        "name": "gatito",
        "img": "./img/gatito.jpg"
    },
    {
        "name": "poodle",
        "img": "./img/poodle.jpg"
    },
    {
        "name": "schnauzer",
        "img": "./img/schnauzer.jpg"
    },
    {
        "name": "shiba",
        "img": "./img/shiba.jpg"
    },
    {
        "name": "tortuga",
        "img": "./img/tortuga.jpg"
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const scoreDisplay = document.querySelector('#result')
const chosenOnes = []
const chosenOnesId = []
const guessed = []
let score = 0

const checkMatch = () => {
    const cards = document.querySelectorAll('#grid img')
    const optOneId = chosenOnesId[0]
    const optTwoId = chosenOnesId[1]

    if (chosenOnes[0] === chosenOnes[1] && optOneId !== optTwoId) {
        cards[optOneId].removeEventListener('click', flip)
        cards[optTwoId].removeEventListener('click', flip)
        score++
        scoreDisplay.textContent = score
        guessed.push(chosenOnes.slice())
    } else {
        setTimeout(() => {
            cards[optOneId].setAttribute('src', './img/blank.jpg')
            cards[optTwoId].setAttribute('src', './img/blank.jpg')
            cards[optOneId].classList.remove('flip')
            cards[optTwoId].classList.remove('flip')
        }, 1000)
    }

    chosenOnes.splice(0, 2)
    chosenOnesId.splice(0, 2)

    if (score === cardArray.length / 2) {
        alert('Congratulations! You won the game! :]')
        resetGame()
    }
}

const resetGame = () => {
    score = 0
    scoreDisplay.textContent = score
    guessed.length = 0

    const cards = document.querySelectorAll('#grid img')
    cards.forEach((card, index) => {
        card.setAttribute('src', 'img/blank.jpg')
        card.addEventListener('click', flip)
        card.classList.remove('flip')
    })

    cardArray.sort(() => 0.5 - Math.random())
}

const flip = (e) => {
    const cardId = e.getAttribute('data-id')
    e.setAttribute('src', cardArray[cardId].img)
    e.classList.add('flip')
    chosenOnes.push(cardArray[cardId].name)
    chosenOnesId.push(cardId)
    if (chosenOnes.length === 2) {
        checkMatch()
    }
}

const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', () => flip(card))
        gridDisplay.appendChild(card)
    }
}

createBoard()