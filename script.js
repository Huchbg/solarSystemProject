// jupiter weightEarth/9.8 * 24.79
// Mercury weightEarth/9.8 *3.7
//Venus weightEarth/9.8 * 8.87
//Moon weightEarth/9.8 * 1.62
//Mars weightEarth/9.8 * 3.93
//Saturn weightEarth/9.8 * 10.44
//Uranus weightEarth/9.8 * 8.69
//Neptun weightEarth/9.8 * 11.15
//Plupo weightEarth/9.8 * 0.62

const dynamicDiv=document.querySelector('.imagesAndMore')

const btnCalculate=document.querySelector('.BTN')

const selectPlanet=document.querySelector('.SELECT')

const textInput=document.querySelector('#mass')

console.log(textInput)
btnCalculate.addEventListener('click',OnClick)


function OnClick(){
    const error=CheckForErrors()
    if(error=='no'){

        const masNumber=Number(textInput.value).toFixed(2)/9.8
        const planet=selectPlanet.value
        const [gravity,imagConfig] = PlanetConfiguration(planet)

        const image=document.createElement('img')
        image.classList.add("image")
        image.src=imagConfig
        
        dynamicDiv.innerHTML=''
        dynamicDiv.appendChild(image)

        const calculatedNumber=masNumber*gravity

        const formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,      
            maximumFractionDigits: 2,
        });
         
        const formatedValue=formatter.format(calculatedNumber)
        
        console.log(formatedValue)
        const information=document.createElement('div')
        information.classList.add("Information")
        
        const heading=document.createElement('p')
        heading.classList.add("informationHeading")
        heading.textContent=`The weight of an object on ${planet.toUpperCase()}`

        information.appendChild(heading)

        const numberHeading=document.createElement('p')
        numberHeading.classList.add("numbers")
        numberHeading.textContent=`${formatedValue} kg`

        information.appendChild(numberHeading)

        dynamicDiv.appendChild(information)

    }
    else if(error=='number'){
        let errorDescription = 'Try putting in a number.'
        if(textInput.value==''){
            errorDescription='Mass is required.'
        }
        OnError(errorDescription)
    }
    else if(error=='planet'){
        const errorDescription='You did not select a planet.'
        OnError(errorDescription)
    }
}

function CheckForErrors(){
    const unputedText=textInput.value
    if(isNaN(unputedText)||unputedText==''){
        return 'number'
    }

    const output=selectPlanet.value
    if(output=='none'){
        return 'planet'
    }

    return 'no'
}

function PlanetConfiguration(planet){
    
    let gravity = 0
    let configurimage=''
    switch(planet){
        case 'Earth':
            gravity=9.8
            configurimage='images/earth.png'
        break;
        case "Moon":
            gravity=1.62
            configurimage='images/moon.png'
        break;
        case "Mars":
            gravity=3.93
            configurimage='images/mars.png'
        break;
        case "Venus":
            gravity=8.87
            configurimage='images/venus.png'
        break;
        case "Mercury":
            gravity=3.7
            configurimage='images/mercury.png'
        break;
        case "Saturn":
            gravity=10.44
            configurimage='images/saturn.png'
        break;
        case "Uranus":
            gravity=8.69
            configurimage='images/uranus.png'
        break;
        case "Neptun":
            gravity=11.15
            configurimage='images/neptune.png'
        break;
        case "Plupo":
            gravity=0.62
            configurimage='images/pluto.png'
        break;
        case "Jupiter":
            gravity=24.79
            configurimage='images/jupiter.png'
        break;
        default:
            console.log('something is definitely wrong')
    }

    return [gravity,configurimage]
}

function OnError(err){
    dynamicDiv.textContent=''
    const information = document.createElement('div')
    information.classList.add("Information")
    const informationhead=document.createElement('p')
    informationhead.classList.add("informationHeading")
    informationhead.textContent=err
    information.appendChild(informationhead)
    dynamicDiv.appendChild(information)
}