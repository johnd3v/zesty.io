import { Carousel } from "bootstrap"
import { getFeatures } from "./axios"


const initCarousel = async ( carouselId , inidcators , inner ) => {
  try{
    const { data } = await getFeatures()

    data.forEach(({ image , title , subtitle },index) => {

      document.querySelector(`.${inidcators}`).insertAdjacentHTML('beforeend',`<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${index}" ${index === 0 ?  "class='active'" : ""}></button>`)
      
      document.querySelector(`.${inner}`).insertAdjacentHTML('beforeend',`
          <div class="carousel-item  ${index === 0 ? 'active' : ''}">
          <img src="${image}" class="d-block w-100 img-fluid bd-placeholder-img" alt="{title}" style="max-height:50vh;">

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>${title}</h1>
              <p>${subtitle}</p>
            </div>
          </div>
        </div>
      `)
    })

    document.querySelector('#spinner').classList.add('d-none')
    
    new Carousel(`#${carouselId}`)

    document.querySelector(`#${carouselId}`).classList.remove('d-none')

  }catch(err){
    console.error(err)
  }
}


initCarousel('homeCarousel','carousel-indicators','carousel-inner')

