import Finishing from "./Finishing"
import FormPersonal from "./FormPersonal"
import HeaderPersonal from "./HeaderPersonal"
import Pick from "./Pick"
import Plan from "./Plan"
import Thanks from "./Thanks"

function FormSection({ error, setError, handleChange, formData, step, setStep, handlePlanRadio, planRadio, planCash, handlePlanClick, planActive, addOn, finishPlan, checks, handleChangePick, pickAdd }) {
    return (
        <>
            <div className='bg-white m-4 -mt-16 rounded-lg p-4 md:m-0 md:flex-1 flex flex-col justify-center gap-6 pb-16 mb-28 md:p-0'>
                <HeaderPersonal
                    title={`${step === 1 ? 'Personal info' :
                        step === 2 ? 'Select your plan' :
                            step === 3 ? 'Pick add-ons' :
                                step === 4 ? 'Finishing up' : ''}`}
                    desc={`${step === 1 ? 'Please provide your name, email,address, and phone number.'
                        : step === 2 ? 'You have the option of monthly or yearly billing.'
                            : step === 3 ? 'Add-ons help enhance your gaming experience'
                                : step === 4 ? 'Double-check everything looks OK before confirming'
                                    : ''} `} />
                {step === 1 ?
                    <FormPersonal
                        error={error}
                        setError={setError}
                        handleChange={handleChange}
                        formData={formData}
                    /> : step === 2 ?
                        <Plan
                            handlePlanRadio={handlePlanRadio}
                            planRadio={planRadio}
                            planCash={planCash}
                            handlePlanClick={handlePlanClick}
                            planActive={planActive}
                        />
                        : step === 3 ?
                            <Pick addOn={addOn}
                            checks={checks}
                            handleChangePick={handleChangePick} />
                            : step === 4 ?
                                <Finishing 
                                finishPlan={finishPlan}
                                pickAdd={pickAdd}
                                setStep={setStep}
                                />
                                : step === 5 ?
                                    <Thanks /> : ''
                }
            </div>
        </>
    )
}

export default FormSection