import { Collapse } from "bootstrap"
import { getFAQList } from "./axios"

const initAccordionCollapse = async(accordionId) => {
    try{
        
        const { data } = await getFAQList()

        const accordionElement = document.querySelector(`#${accordionId}`)


        data.forEach(({ title , text_content },index) => {
            accordionElement.insertAdjacentHTML('beforeend',`
                <div class="accordion-item">
                    <h2 class="accordion-header" >
                    <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#faq_${index}" aria-expanded="false" aria-controls="faq_${index}">
                    ${title}
                    </button>
                    </h2>
                    <div id="faq_${index}" class="accordion-collapse collapse ${index === 0 ? 'show' :''}"  data-bs-parent="#${accordionId}">
                    <div class="accordion-body">
                        ${text_content}
                    </div>
                    </div>
                </div>
            `)  
        
        })

        document.querySelector('#spinner').classList.add('d-none')

        new Collapse(accordionElement)
        
        accordionElement.classList.remove('d-none')
 
    }catch(err){
        console.error(err)
    }
}


initAccordionCollapse('faqList')