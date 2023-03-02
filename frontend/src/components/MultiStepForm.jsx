import React, {useState} from 'react'
import Step1 from './steps/MultiStep1'
import Step2 from './steps/MultiStep2'
import Step3 from './steps/MultiStep3'
import MultiStep4 from './steps/MultiStep4'
import MultiStepFinished from './steps/MultiStepFinished'


const MultiStepForm = ({handleModal,toast}) => {
    //State for current step
    const [currentStep, setCurrentStep] = useState(1)
    //State for form data
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
    // Function which handles input change
    const handleChange = (e) => {
        /* debugger; */
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    // Function which handles checkbox change
    const handleCheckboxChange = (e) => {
        /* debugger; */
        /* setFormData({...formData, [e.target.name]: e.target.checked}) */
        const id = e.target.id;
        const attrValue = e.target.checked ? true : false;
        //Mapping through array and changing price value of checked checkbox
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
    // Function which handles radio button change
    const handleRadioButtonChange = (e) => {
        /* debugger; */
        /* setFormData({...formData, [e.target.name]: e.target.checked}) */
        const id = e.target.id;
        const attrValue = e.target.checked ? true : false;
        //Reseting state of unchekd radio buttons
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
    // Function which handles coupon if applied
    const handleCoupon = () => {
        //Checking if coupon is valid and if it is not already applied
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
    // Function which handles next step
    const next = () => {
        /* debugger; */
        setCurrentStep(currentStep + 1)
    }
    // Function which handles previous step
    const back = (steps) => {
        debugger;
        setCurrentStep(currentStep - steps)
        
    }

    switch(currentStep){
        case 1:
            return (
            <Step1 data={formData} handleChange={handleRadioButtonChange} next={next} quit={handleModal}/>
            )
        case 2:
            return <Step2 data={formData} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange} handleCoupon={handleCoupon} next={next} back={back} quit={handleModal}/>
        case 3:
            return <Step3 data={formData} handleChange={handleChange} next={next} back={back} quit={handleModal} />
        case 4:
            return <MultiStep4 data={formData} handleChange={handleChange} next={next} back={back} quit={handleModal}/>
        default:
            return <MultiStepFinished quit={handleModal}/>
    }
}

export default MultiStepForm