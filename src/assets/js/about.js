import { getDetails } from "./axios"

const appendData = async(hero) =>{

    try{
        const { data } = await getDetails()

        const { hero_content , title , page_content , hero_image } = data[0]

        document.querySelector(`.${hero}`).style.backgroundImage = `url(${hero_image})`
    
        document.querySelector('#title').innerHTML = title

        document.querySelector('#hero_content').innerHTML = hero_content

        document.querySelector('.about-details').innerHTML =  page_content

    }catch(err){
        console.error(err)
    }

}



appendData('hero')


