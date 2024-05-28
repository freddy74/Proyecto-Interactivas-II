import "../../index.css";
import React, { useState } from "react";
import { Sidebar } from "../navigation/Sidebar";
import { HealthIcon } from "../../assets/icons/HealthIcon";
import { SleepIcon } from "../../assets/icons/SleepIcon";
import { GymIcon } from "../../assets/icons/GymIcon";
import { WarningIcon } from "../../assets/icons/WarningIcon";

export function Form() {
  const PasoFormulario = () => {
    const [paso, setPaso] = useState(1);

    const hideWarning = () => {
      let options = document.getElementById("options");
      let warning = document.getElementById("warning");

      warning.style.display = "none";
    }

    const nextStep = () => {

      let options = document.getElementById("options");
      let warning = document.getElementById("warning");

      if (
        paso === 1 &&
        options.value === "option1"
      ) {
        //alert("Por favor seleccione una respuesta");
        warning.style.display = "flex";
        return;
      }
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
    const [soccerChecked, setSoccerChecked] = useState(false);
    const [tennisChecked, setTennisChecked] = useState(false);
    const [swimmingChecked, setSwimmingChecked] = useState(false);
    const [runningChecked, setRunningChecked] = useState(false);
    const [gymChecked, setGymChecked] = useState(false);
    const [noneChecked, setNoneChecked] = useState(true);

    const handleDiabetesChange = () => {
      setDiabetesChecked(!diabetesChecked);
      if (!diabetesChecked && noneChecked) {
        setNoneChecked(false);
      }
    };

    const handleHypertensionChange = () => {
      setHypertensionChecked(!hypertensionChecked);
      if (!hypertensionChecked && noneChecked) {
        setNoneChecked(false);
      }
    };

    const handdleAnxietyChange = () => {
      setAnxietyChecked(!anxietyChecked);
      if (!anxietyChecked && noneChecked) {
        setNoneChecked(false);
      }
    };

    const handdleAsthmaChange = () => {
      setAsthmaChecked(!asthmaChecked);
      if (!asthmaChecked && noneChecked) {
        setNoneChecked(false);
      }
    };

    const handdleObesityChange = () => {
      setObesityChecked(!obesityChecked);
      if (!obesityChecked && noneChecked) {
        setNoneChecked(false);
      }
    };

    const handdleSoccerChange = () => {
      setSoccerChecked(!soccerChecked);
      if (!soccerChecked && noneChecked) {
        setNoneChecked(false);
      }
    };

    const handdleTennisChange = () => {
      setTennisChecked(!tennisChecked);
      if (!tennisChecked && noneChecked) {
        setNoneChecked(false);
      }
    };

    const handdleSwimmingChange = () => {
      setSwimmingChecked(!swimmingChecked);
      if (!swimmingChecked && noneChecked) {
        setNoneChecked(false);
      }
    };

    const handdleRunningChange = () => {
      setRunningChecked(!runningChecked);
      if (!runningChecked && noneChecked) {
        setNoneChecked(false);
      }
    };

    const handdleGymChange = () => {
      setGymChecked(!gymChecked);
      if (!gymChecked && noneChecked) {
        setNoneChecked(false);
      }
    };

    const handdleNoneChange = () => {
      setNoneChecked(!noneChecked);
      setAnxietyChecked(false);
      setAsthmaChecked(false);
      setObesityChecked(false);
      setDiabetesChecked(false);
      setHypertensionChecked(false);
      setSoccerChecked(false);
      setTennisChecked(false);
      setSwimmingChecked(false);
      setRunningChecked(false);
      setGymChecked(false);
    };

    return (
      <div className="flex justify-end max-lg:justify-center">
        <Sidebar username="Freddy Garro" />
        <div className=" min-h-screen flex max-sm:items-start items-center justify-center max-lg:w-[90vw] md:w-[80vw] max-sm:w-[95vw] lg:w-[75vw] p-[40px] max-sm:p-[20px] max-sm:mt-[80px]  ">
          <div className="w-[50%] max-lg:w-[90vw] max-sm:w-[100%] min-h-[500px] bg-white rounded-2xl p-[40px] max-sm:p-[20px] border-solid border-custom-blue border-[0.5px] border-opacity-50 max-sm:mt-[40px]">
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
              <form action="" method="">
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
                    onChange={hideWarning}
                    className="font-main font-light text-custom-dark w-full border-solid border-custom-blue border-[0.5px] border-opacity-50 py-[10px] outline-none rounded-md px-[10px]"
                    id="options"
                    name="options"
                  >
                    <option
                      className="font-main font-light text-custom-dark"
                      value="option1"
                      disabled
                      selected
                      hidden
                    >
                      Select an option
                    </option>

                    <option
                      className="font-main font-light text-custom-dark"
                      value="option1"
                    >
                      Less than 6 hours
                    </option>
                    <option
                      className="font-main font-light text-custom-dark"
                      value="option2"
                    >
                      6 - 7 hours
                    </option>
                    <option
                      className="font-main font-light text-custom-dark"
                      value="option3"
                    >
                      7 - 8 hours
                    </option>
                    <option
                      className="font-main font-light text-custom-dark"
                      value="option4"
                    >
                      More than 8 hours
                    </option>
                  </select>
                  <div id="warning" className="gap-[10px]  items-center bg-red-100 p-[10px] rounded-md hidden">
                    <WarningIcon w="16px" h="16px" color="rgb(220 38 38"/>
                    <p className="font-main font-light text-[14px] text-red-600">You must select an option to continue</p>
                  </div>
                  <div className="flex ">
                    <button
                      type="button"
                      value="Next"
                      className="text-[14px] font-main font-medium text-center bg-custom-blue text-white px-6 py-1 rounded-md hover:opacity-90 duration-300 transition-all shadow-[0_8px_28px_0_rgba(81,97,255,0.25)] btn"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
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
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          diabetesChecked ? "bg-custom-blue" : "bg-white"
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
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          hypertensionChecked ? "bg-custom-blue" : "bg-white"
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
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          anxietyChecked ? "bg-custom-blue" : "bg-white"
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
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          asthmaChecked ? "bg-custom-blue" : "bg-white"
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
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          obesityChecked ? "bg-custom-blue" : "bg-white"
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
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          noneChecked ? "bg-custom-blue" : "bg-white"
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
                  placeholder="Other health problems (if any)"
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
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-row gap-[10px] items-center">
                  <GymIcon />
                  <label
                    className="font-main text-[24px] font-semibold text-custom-dark"
                    for="opciones"
                  >
                    Physical activity
                  </label>
                </div>

                <fieldset className="space-y-2 grid grid-cols-2 grid-rows-3">
                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="soccer"
                      name="soccer"
                      checked={soccerChecked}
                      onChange={handdleSoccerChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="soccer"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          soccerChecked ? "bg-custom-blue" : "bg-white"
                        }`}
                      ></span>
                      Soccer
                    </label>
                  </div>

                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="tennis"
                      name="tennis"
                      checked={tennisChecked}
                      onChange={handdleTennisChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="tennis"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          tennisChecked ? "bg-custom-blue" : "bg-white"
                        }`}
                      ></span>
                      Tennis
                    </label>
                  </div>

                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="running"
                      name="running"
                      checked={runningChecked}
                      onChange={handdleRunningChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="running"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          runningChecked ? "bg-custom-blue" : "bg-white"
                        }`}
                      ></span>
                      Running
                    </label>
                  </div>

                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="swimming"
                      name="swimming"
                      checked={swimmingChecked}
                      onChange={handdleSwimmingChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="swimming"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          swimmingChecked ? "bg-custom-blue" : "bg-white"
                        }`}
                      ></span>
                      Swimming
                    </label>
                  </div>

                  <div className="flex items-center font-main text-custom-dark font-light">
                    <input
                      type="checkbox"
                      id="gym"
                      name="gym"
                      checked={gymChecked}
                      onChange={handdleGymChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="gym"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          gymChecked ? "bg-custom-blue" : "bg-white"
                        }`}
                      ></span>
                      Gym
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
                        className={`w-5 h-5 border border-custom-dark border-opacity-50 rounded mr-2 ${
                          noneChecked ? "bg-custom-blue" : "bg-white"
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
                  placeholder="Other physical activities (if any)"
                  cols="30"
                  rows="3"
                ></textarea>

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

    const clase = ` flex w-[30px] h-[30px] justify-center items-center p-[10px] rounded-md font-main  ${
      pasoActivo
        ? "bg-custom-blue text-white shadow-[0_8px_28px_0_rgba(81,97,255,0.25)]"
        : pasoCompletado
        ? "text-custom-dark border-solid border-custom-blue border-[0.5px] border-opacity-50"
        : "text-custom-dark border-solid border-custom-blue border-[0.5px] border-opacity-50"
    }`;

    return <div className={clase}>{paso}</div>;
  };

  return <PasoFormulario />;
}
