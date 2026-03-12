const places = ["market", "church", "office", "mall","gym", "bank", "saloon", "eatery", "spa", "club", "office", "airport", "gym", "eatery", "market", "office", "mall", "eatery", "spa", "market", "eatery", "saloon", "church", "office", "spa", "club", "office", "office", "mall", "eatery", "gym", "bank", "saloon", "airport", "gym","eatery" ]



const button = document.getElementById('btn')
const input = document.getElementById('place')
const log = document.getElementById('log')


    
const checkPlaces = (place, visit) => {
    const places = ["market", "church", "office", "mall","gym", "bank", "saloon", "eatery", "spa", "club", "office", "airport", "gym", "eatery", "market", "office", "mall", "eatery", "spa", "market", "eatery", "saloon", "church", "office", "spa", "club", "office", "office", "mall", "eatery", "gym", "bank", "saloon", "airport", "gym","eatery" ]

    const input = document.getElementById('place')
    if (place) {
        console.log(`Suspect visited ${input.value} ${visit} times`)
        log.textContent = `visited ${input.value} ${visit} times`
    }

    //places.includes()

    if (places.includes(input.value)) {
        console.log('ayy')
    } else {
        console.log('Not Found in Database')
        log.textContent = 'Not Found in Database'
    }
}

button.addEventListener('click', () => {

    places.forEach((place, index) => {
        
})

const searchTerm = input.value.toLowerCase().trim();
    
    // Calculate the total visits once
    const visitCount = places.filter(p => p === searchTerm).length;

checkPlaces(input, visitCount)
 
})

  