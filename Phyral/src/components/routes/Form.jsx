import "../../index.css";
import React, { useState } from "react";
import { Sidebar } from "../navigation/Sidebar";
import { HealthIcon } from "../../assets/icons/HealthIcon";
import { SleepIcon } from "../../assets/icons/SleepIcon";

export function Form() {
  const PasoFormulario = () => {
    const [paso, setPaso] = useState(1);

    const nextStep = () => {
      setPaso(paso + 1);
    };

    const prevStep = () => {
      setPaso(paso - 1);
    };

    const [diabetesChecked, setDiabetesChecked] = useState(false);
    const [hypertensionChecked, setHypertensionChecked] = useState(false);
    const [anxietyChecked, setAnxietyChecked] = useState(false);
    const [asthmaChecked, setAsthmaChecked] = useState(false);
    const [obesityChecked, setObesityChecked] = useState(false);
    const [noneChecked, setNoneChecked] = useState(true);

    const handleDiabetesChange = () => {
      setDiabetesChecked(!diabetesChecked);
    };

    const handleHypertensionChange = () => {
      setHypertensionChecked(!hypertensionChecked);
    };

    const handdleAnxietyChange = () => {
      setAnxietyChecked(!anxietyChecked);
    };

    const handdleAsthmaChange = () => {
      setAsthmaChecked(!asthmaChecked);
    };

    const handdleObesityChange = () => {
      setObesityChecked(!obesityChecked);
    };

    const handdleNoneChange = () => {
      setNoneChecked(!noneChecked);
    };

    return (
      <div className="flex justify-end max-sm:justify-center">
        <Sidebar username="Freddy Garro" />
        <div className=" min-h-screen flex items-center justify-center w-[80vw] max-sm:w-[90vw] p-[40px] max-sm:p-[20px] max-sm:mt-[80px]">
          <div className="w-[50%] max-sm:w-[100%] h-[85vh] bg-white rounded-2xl p-[40px] max-sm:p-[20px] border-solid border-custom-blue border-[0.5px] border-opacity-50">
            <h2 className="font-secondary font-bold text-[40px] max-sm:text-[30px] text-custom-dark mb-[20px]">
              General information
            </h2>
            <div className="flex justify-between items-center mb-[40px]">
              <PasoNumero paso={1} actual={paso} />
              <div class="border-b-[1px] w-[30%] border-custom-dark border-opacity-50"></div>
              <PasoNumero paso={2} actual={paso} />
              <div class="border-b-[1px] w-[30%] border-custom-dark border-opacity-50"></div>
              <PasoNumero paso={3} actual={paso} />
            </div>
            {paso === 1 && (
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-row gap-[10px] items-center">
                  <SleepIcon />
                  <label
                    className="font-main text-[24px] font-semibold text-custom-dark"
                    for="opciones"
                  >
                    Hours of sleep
                  </label>
                </div>
                <select
                  className="font-main font-light text-custom-dark w-full border-solid border-custom-blue border-[0.5px] border-opacity-50 py-[10px] outline-none rounded-md px-[10px]"
                  id="opciones"
                  name="opciones"
                >
                  <option
                    className="font-main font-light text-custom-dark"
                    value="option1"
                  >
                    Option 1
                  </option>
                  <option
                    className="font-main font-light text-custom-dark"
                    value="option2"
                  >
                    Option 2
                  </option>
                  <option
                    className="font-main font-light text-custom-dark"
                    value="option3"
                  >
                    Option 3
                  </option>
                  <option
                    className="font-main font-light text-custom-dark"
                    value="option4"
                  >
                    Option 4
                  </option>
                </select>
                <div className="flex ">
                  <button
                    className="text-[14px] font-main font-medium text-center bg-custom-blue text-white px-6 py-1 rounded-md hover:opacity-90 duration-300 transition-all shadow-[0_8px_28px_0_rgba(81,97,255,0.25)] btn"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {paso === 2 && (
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-row gap-[10px] items-center">
                  <HealthIcon />
                  <label
                    className="font-main text-[24px] font-semibold text-custom-dark"
                    for="opciones"
                  >
                    Health problems
                  </label>
                </div>


                <fieldset className="space-y-2 grid grid-cols-2 grid-rows-3">
                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="diabetes"
                      name="diabetes"
                      checked={diabetesChecked}
                      onChange={handleDiabetesChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="diabetes"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${diabetesChecked ? "bg-custom-blue" : "bg-white"
                          }`}
                      ></span>
                      Diabetes
                    </label>
                  </div>

                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="hypertension"
                      name="hypertension"
                      checked={hypertensionChecked}
                      onChange={handleHypertensionChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="hypertension"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${hypertensionChecked ? "bg-custom-blue" : "bg-white"
                          }`}
                      ></span>
                      Hypertension
                    </label>
                  </div>

                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="anxiety"
                      name="anxiety"
                      checked={anxietyChecked}
                      onChange={handdleAnxietyChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="anxiety"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${anxietyChecked ? "bg-custom-blue" : "bg-white"
                          }`}
                      ></span>
                      Anxiety
                    </label>
                  </div>

                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="asthma"
                      name="asthma"
                      checked={asthmaChecked}
                      onChange={handdleAsthmaChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="asthma"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${asthmaChecked ? "bg-custom-blue" : "bg-white"
                          }`}
                      ></span>
                      Asthma
                    </label>
                  </div>

                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="obesity"
                      name="obesity"
                      checked={obesityChecked}
                      onChange={handdleObesityChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="obesity"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${obesityChecked ? "bg-custom-blue" : "bg-white"
                          }`}
                      ></span>
                      Obesity
                    </label>
                  </div>

                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="none"
                      name="none"
                      checked={noneChecked}
                      onChange={handdleNoneChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="none"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${noneChecked ? "bg-custom-blue" : "bg-white"
                          }`}
                      ></span>
                      None
                    </label>
                  </div>
                </fieldset>

                <textarea
                  className="w-full border-solid border-custom-blue border-[0.5px] border-opacity-50 outline-none text-[14px] font-main font-light text-custom-dark p-[10px] rounded-md"
                  name="otherProblems"
                  id="otherProblems"
                  placeholder="Other health problems"
                  cols="30"
                  rows="3"
                ></textarea>

                <div className="flex gap-[20px] ">
                  <button
                    className="text-[14px] font-main font-medium text-center text-custom-dark px-6 py-1 rounded-md  duration-300 transition-all border-solid border-custom-dark border-[0.5px] hover:bg-custom-dark hover:text-white btn"
                    onClick={prevStep}
                  >
                    Back
                  </button>

                  <button
                    className="text-[14px] font-main font-medium text-center bg-custom-blue text-white px-6 py-1 rounded-md hover:opacity-90 duration-300 transition-all shadow-[0_8px_28px_0_rgba(81,97,255,0.25)] btn"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {paso === 3 && (
              <div>
                <h2 className="text-lg font-bold mb-4">Paso 3: Confirmación</h2>
                {/* Aquí irían los campos del tercer paso */}
                <div className="flex gap-[20px]">
                  <button
                    className="text-[14px] font-main font-medium text-center text-custom-dark px-6 py-1 rounded-md  duration-300 transition-all border-solid border-custom-dark border-[0.5px] hover:bg-custom-dark hover:text-white btn"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button
                    className="text-[14px] font-main font-medium text-center bg-custom-blue text-white px-6 py-1 rounded-md hover:opacity-90 duration-300 transition-all shadow-[0_8px_28px_0_rgba(81,97,255,0.25)] btn"
                    onClick={nextStep}
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const PasoNumero = ({ paso, actual }) => {
    const pasoActivo = paso === actual;
    const pasoCompletado = paso < actual;

    const clase = ` flex w-[30px] h-[30px] justify-center items-center p-[10px] rounded-md font-main  ${pasoActivo
        ? "bg-custom-blue text-white shadow-[0_8px_28px_0_rgba(81,97,255,0.25)]"
        : pasoCompletado
          ? "text-custom-dark border-solid border-custom-blue border-[0.5px] border-opacity-50"
          : "text-custom-dark border-solid border-custom-blue border-[0.5px] border-opacity-50"
      }`;

    return <div className={clase}>{paso}</div>;
  };

  return <PasoFormulario />;
}
