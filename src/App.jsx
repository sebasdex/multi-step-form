import Buttons from "./components/Buttons"
import FormSection from "./components/FormSection"
import SideBar from "./components/SideBar"
import { useEffect, useState } from "react"

function App() {
  const monthPlan = [
    {
      id:1,
      img: './images/icon-arcade.svg',
      name: 'Arcade',
      bill: 9,
      time: 'mo'
    },
    {
      id:2,
      img: './images/icon-advanced.svg',
      name: 'Advanced',
      bill: 12,
      time: 'mo'
    },
    {
      id:3,
      img: './images/icon-pro.svg',
      name: 'Pro',
      bill: 15,
      time: 'mo'
    }
  ];
  const monthAdd = [
    {
      id:1,
      name: 'Online service',
      description: 'Access to multiplayer games',
      bill: 1,
      time: 'mo'
    },
    {
      id:2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      bill: 2,
      time: 'mo'
    },
    {
      id:3,
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      bill: 2,
      time: 'mo'
    }
  ];
  const [formData, setFormData] = useState({
    name: '', email: '', number: ''
  });
  const [error, setError] = useState({});
  const [validFull, setValidFull] = useState(false);
  const [step, setStep] = useState(1);
  const [planRadio, setPlanRadio] = useState(false);
  const [planCash, setPlanCash] = useState(monthPlan); 
  const [addOn, setAddOn] = useState(monthAdd); 
  const [planActive, setPlanActive] = useState('Arcade');
  const [finishPlan, setFinishPlan] = useState([]);

  const [checks, setChecks] = useState(Array(addOn.length).fill(false));
  const [pickAdd, setPickAdd] = useState([]);

  function handleChangePick(index, itemId) {
    const newChecks = [...checks];
    newChecks[index] = !newChecks[index];
    setChecks(newChecks);

    if (newChecks[index]) {
      const selectedAddOn = addOn.find((item) => item.id === itemId);  
      setPickAdd((prevPickAdd) => [...prevPickAdd, selectedAddOn]);
    } else {
      setPickAdd((prevPickAdd) =>
      prevPickAdd.filter((item) => item.id !== itemId)
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, number } = formData;

    // Validar campos vacíos
    const newErrors = {};
    if (name.trim() === '') {
      newErrors.name = 'This field is required';
    }
    if (email.trim() === '') {
      newErrors.email = 'This field is required';
    }
    if (number.trim() === '') {
      newErrors.number = 'This field is required';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() !== '' && !emailRegex.test(email)) {
      newErrors.email = 'Email is not valid';
    }

    // Validate numbers
    const numberRegex = /^\d{10,}$/;
    if (number.trim() !== '' && !numberRegex.test(number)) {
      newErrors.number = 'Phone number is not valid';
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      setValidFull(false);
      return;
    }

    setValidFull(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setError((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleClick = () => {
    if (Object.values(error).every(item => item === '') && validFull) {
      setStep(prevStep => Math.min(prevStep + 1, 5));
    }
  };

  useEffect(() => {
    handleClick();
  }, [validFull]);

  const handlePlanRadio = () => {
    setPlanRadio(!planRadio);
    const newPlan = planCash.map(item => {
      const {bill, ...rest} = item;
      return {
        ...rest,
        bill: bill *10,
        time: 'yr'
      }
    });
    
    if(planRadio){
      setPlanCash(monthPlan);      
      return
    }
    setPlanCash(newPlan);
  }

  const handlePlanClick = (id) =>{
    const newPlan = planCash.filter(item => item.id === id).map(item => item.name);
    setPlanActive(newPlan.toString())
  }

  const addOnPick = () =>{
    const yearAdd = addOn.map(item => {
      const {bill, ...rest} = item;
      return{
        ...rest,
        bill: bill * 10,
        time: 'yr'
      }
    });
    if(!planRadio){
      setAddOn(monthAdd);
      return
    }
    setAddOn(yearAdd);
  }

  useEffect(()=>{
    addOnPick();
    updateFinish();
  },[planRadio]);

  useEffect(()=>{
    finishTotal();
  },[planCash, planActive]);

  const finishTotal = () =>{
    const finish = planCash.filter(item => item.name === planActive);
    setFinishPlan(finish);
  }

  const updateFinish = ()=> {
    const prevPickAdd = pickAdd.map(item=> {
      const {bill, ...rest} = item;
      return{
        ...rest,
        bill:bill/10,
        time:'mo'
      }
    });
    const newPickAdd = pickAdd.map(item=> {
      const {bill, ...rest} = item;
      return{
        ...rest,
        bill:bill*10,
        time:'yr'
      }
    });
    if(planRadio){
      setPickAdd(newPickAdd)
    }else{
      setPickAdd(prevPickAdd);
    }    
  }


  return (
    <main className="bg-[hsl(206,94%,87%)] md:min-h-screen flex flex-col justify-center items-center">
      <section className="md:bg-white md:w-[65rem] w-96 h-[40rem] md:flex justify-center items-center p-4 gap-2 m-5 rounded-lg md:max-w-full">
        <SideBar
          step={step}
          setStep={setStep} />
        <form onSubmit={handleSubmit} noValidate
          className="w-full p-2 flex flex-col justify-between md:p-10 h-full">
          <FormSection
            error={error}
            setError={setError}
            handleChange={handleChange}
            formData={formData}
            step={step}
            setStep={setStep}
            handlePlanRadio={handlePlanRadio}
            planRadio={planRadio}
            planCash={planCash}
            handlePlanClick={handlePlanClick}
            planActive={planActive}
            addOn={addOn}
            finishPlan={finishPlan}
            checks={checks}
            handleChangePick={handleChangePick}
            pickAdd={pickAdd}
          />
          {step <= 4 ? <Buttons
            handleClick={handleClick}
            step={step}
            setStep={setStep} />
            : ''
          }
        </form>
      </section>
    </main>
  )
}

export default App
