import React, {useState} from 'react'
import Step1 from './steps/MultiStep1'
import Step2 from './steps/MultiStep2'
import Step3 from './steps/MultiStep3'
import MultiStep4 from './steps/MultiStep4'
import MultiStepFinished from './steps/MultiStepFinished'

const MultiStepForm = ({handleModal,toast}) => {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        ime_auta:[
            {id: 1, text: 'Volvo', checked: false},
            {id: 2, text: 'Saab', checked: false},
            {id: 3, text: 'Peugot', checked: false},
            {id: 4, text: 'BMW', checked: false},
            {id: 5, text: 'Seat', checked: false},
            {id: 6, text: 'Volswagen', checked: false},
            {id: 7, text: 'Audi', checked: false},
            {id: 8, text: 'Citroen', checked: false},
            {id: 9, text: 'Kia', checked: false},
        ],
        usluge: [
            {id:1, text:'Promjena ulja i filtera', price: 65, checked: false},
            {id:2, text:'Promjena pakni', price: 60, checked: false},
            {id:3, text:'Promjena guma', price: 15, checked: false},
            {id:4, text:'Servis klima i uređaja', price: 40, checked: false},
            {id:5, text:'Balansiranje guma', price: 7, checked: false},
            {id:6, text:'Zamjena ulja na kočnicama', price: 30, checked: false},
        ],
        kupon: '',
        popust : false,
        ime_prezime: '',
        email: '',
        telefon: '',
        napomena: '',
        ukupno: 0,
    })

    const handleChange = (e) => {
        /* debugger; */
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleCheckboxChange = (e) => {
        /* debugger; */
        /* setFormData({...formData, [e.target.name]: e.target.checked}) */
        const id = e.target.id;
        const attrValue = e.target.checked ? true : false;
        const newArray = formData.usluge.map((item) => {
            if(item.id == id){
                item.checked = attrValue
                attrValue ?  formData.ukupno += item.price : formData.ukupno -= item.price
                return item
            }
            return item
        })
        setFormData({...formData, ['usluge']: newArray})

    }

    const handleRadioButtonChange = (e) => {
        /* debugger; */
        /* setFormData({...formData, [e.target.name]: e.target.checked}) */
        const id = e.target.id;
        const attrValue = e.target.checked ? true : false;
        const newArray = formData.ime_auta.map((item) => {
            if(item.id == id){
                item.checked = true
                return item
            }
            else{
                item.checked = false
                return item
            }
        })
        setFormData({...formData, ['ime_auta']: newArray})

    }

    const handleCoupon = () => {
        if(formData.kupon === 'TOKIC123' && formData.popust === false && formData.ukupno > 0){
            debugger;
            const ukupno = formData.ukupno * (0.7)
            setFormData({...formData, ['popust']: true, ['ukupno']: ukupno})
            toast("Uspješno si odabrao kupon!.", {autoClose: 1000});
            
        }
        else{
            toast("Kupon je istekao!", {autoClose: 1000});
        }
        
    }
    const next = () => {
        /* debugger; */
        setCurrentStep(currentStep + 1)
    }
    const back = (steps) => {
        steps ? setCurrentStep(currentStep - steps) : setCurrentStep(currentStep - 1)
        
    }

    switch(currentStep){
        case 1:
            return <Step1 data={formData} handleChange={handleRadioButtonChange} next={next} back={handleModal} />
        case 2:
            return <Step2 data={formData} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange} handleCoupon={handleCoupon} next={next} back={back} />
        case 3:
            return <Step3 data={formData} handleChange={handleChange} next={next} back={back} />
        case 4:
            return <MultiStep4 data={formData} handleChange={handleChange} next={next} back={back} />
        default:
            return <MultiStepFinished back={handleModal}/>
    }
}

export default MultiStepForm