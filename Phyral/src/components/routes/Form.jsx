import "../../index.css";
import React, { useState } from "react";
import { Sidebar } from "../navigation/Sidebar";

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
      <div className="flex justify-end">
        <Sidebar username="Freddy Garro" />
        <div className=" min-h-screen flex items-center justify-center w-[80vw]  ">
          <div className="w-[50%] h-[80vh] bg-white rounded-2xl p-[40px] border-solid border-custom-blue border-[0.5px] border-opacity-50">
            <h2 className="font-secondary font-bold text-[40px] text-custom-dark mb-[20px]">
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
                  <svg
                    width="22"
                    height="26"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_791_841)">
                      <path
                        d="M17.5213 18.8012C17.9842 18.7484 18.449 18.7057 18.9099 18.6402C19.3895 18.5721 19.7161 18.7043 19.8991 19.0703C20.0915 19.4557 20.0073 19.8198 19.66 20.1511C17.6094 22.1034 15.1581 23.1087 12.3441 23.3017C7.01866 23.6671 1.45609 20.127 0.263822 14C-0.627204 9.42068 0.735384 5.50591 4.40302 2.54495C6.75081 0.648677 9.49002 -0.194258 12.5251 0.0375154C13.1543 0.0856068 13.5244 0.518429 13.3547 1.05679C13.2812 1.28989 13.0481 1.51766 12.829 1.65192C11.6328 2.38464 10.6248 3.31174 9.84269 4.47328C8.54088 6.40628 8.09336 8.54702 8.43869 10.8354C8.96235 14.308 10.8666 16.7406 14.1008 18.1072C15.1862 18.5661 16.3364 18.7678 17.5219 18.8005L17.5213 18.8012Z"
                        fill="#5161FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_791_841">
                        <rect width="20" height="23.3263" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

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
                <div className="flex mt-[40px]">
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
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_792_843)">
                      <path
                        d="M10.046 8.87997C9.77231 8.26751 9.53058 7.7277 9.28886 7.18789C8.91374 6.35061 8.53425 5.51522 8.1654 4.67544C7.97627 4.24585 7.72077 3.91833 7.19787 3.92772C6.68936 3.93711 6.41194 4.23019 6.23096 4.67732C5.87213 5.56594 5.48762 6.44455 5.12754 7.33255C5.02797 7.5774 4.89521 7.68261 4.61653 7.67948C3.27013 7.66508 1.92373 7.67009 0.577332 7.6776C0.400108 7.67885 0.313061 7.62813 0.266094 7.45404C-0.201702 5.72125 -0.0939901 4.04545 0.921133 2.53185C1.997 0.926812 3.50873 0.045076 5.48574 0.0137644C7.13649 -0.0119112 8.51358 0.568607 9.65145 1.75281C9.99901 2.11415 10.0159 2.11791 10.3503 1.76158C11.6635 0.36195 13.3055 -0.160328 15.1692 0.0419448C16.4981 0.185978 17.6246 0.812837 18.5352 1.79915C19.6705 3.0297 20.0889 4.50949 19.9843 6.14959C19.9561 6.59297 19.8434 7.03321 19.7426 7.46844C19.7232 7.55236 19.5785 7.6657 19.4914 7.66633C17.8632 7.6776 16.235 7.68073 14.6075 7.66257C14.481 7.66132 14.3062 7.5223 14.2386 7.40018C13.9349 6.85348 13.6744 6.28298 13.3744 5.7344C13.0344 5.11193 12.3148 4.99044 11.8207 5.46074C11.7255 5.55091 11.6548 5.67366 11.5946 5.79264C11.088 6.79587 10.5864 7.80222 10.046 8.88122V8.87997Z"
                        fill="#5161FF"
                      />
                      <path
                        d="M1.5679 9.58682C1.80524 9.58682 2.04196 9.58682 2.2793 9.58682C3.11407 9.58682 3.94821 9.58682 4.78298 9.58682C5.72483 9.58619 6.48946 9.06893 6.85268 8.19408C6.96227 7.92918 7.08251 7.66867 7.22967 7.33301C7.55594 8.05192 7.84839 8.69256 8.13708 9.33445C8.46585 10.0653 8.77835 10.8036 9.12152 11.5275C9.36387 12.0391 9.9087 12.2596 10.4053 12.0116C10.6364 11.8964 10.8474 11.6578 10.9708 11.4242C11.4511 10.513 11.892 9.58056 12.3491 8.65686C12.3936 8.56731 12.4499 8.4834 12.4781 8.43518C12.8213 8.74266 13.1181 9.08771 13.4876 9.31441C13.7638 9.48412 14.132 9.56678 14.4627 9.57492C15.6613 9.60435 16.8618 9.58619 18.061 9.58745C18.1925 9.58745 18.324 9.59934 18.5651 9.61124C18.371 9.81727 18.2489 9.96193 18.1117 10.0909C16.5912 11.5156 15.0695 12.9384 13.5465 14.3606C12.7549 15.1002 11.9665 15.8435 11.1662 16.5737C10.4285 17.2469 9.56802 17.2463 8.83721 16.5643C7.41253 15.2354 6.001 13.8928 4.57945 12.5608C3.62946 11.6703 2.67257 10.7873 1.72007 9.89931C1.64806 9.8323 1.58857 9.75277 1.52344 9.67888C1.53847 9.64819 1.5535 9.61751 1.56853 9.58682H1.5679Z"
                        fill="#5161FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_792_843">
                        <rect width="20" height="17.0774" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <label
                    className="font-main text-[24px] font-semibold text-custom-dark"
                    for="opciones"
                  >
                    Health problems
                  </label>
                </div>

                <fieldset className="space-y-2">
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
                  placeholder="Other health problems"
                  cols="30"
                  rows="4"
                ></textarea>

                <div className="flex gap-[20px] mt-[40px]">
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
