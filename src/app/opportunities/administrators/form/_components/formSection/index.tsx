"use client";
import Container from '@/components/container'
import React, { useState } from 'react'
import style from "./style.module.css";
import InputfileComponent from '@/components/formFields/InputfileComponent';
import TextArea from '@/components/formFields/TextArea';
import  { FormButton } from '@/components/layout/button';
import RadioGroup from '@/components/formFields/RadioGroup';
import CustomSelect from '@/components/formFields/CustomSelect';

const FormSection = () => {

    const [message, setMessage] = useState('');
    const [error] = useState(false);

    const stateOptions = [
        { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
        { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
        { value: 'Assam', label: 'Assam' },
        { value: 'Bihar', label: 'Bihar' },
        { value: 'Chhattisgarh', label: 'Chhattisgarh' },
        { value: 'Goa', label: 'Goa' },
        { value: 'Gujarat', label: 'Gujarat' },
        { value: 'Haryana', label: 'Haryana' },
        { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
        { value: 'Jharkhand', label: 'Jharkhand' },
        { value: 'Karnataka', label: 'Karnataka' },
        { value: 'Kerala', label: 'Kerala' },
        { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
        { value: 'Maharashtra', label: 'Maharashtra' },
        { value: 'Manipur', label: 'Manipur' },
        { value: 'Meghalaya', label: 'Meghalaya' },
        { value: 'Mizoram', label: 'Mizoram' },
        { value: 'Nagaland', label: 'Nagaland' },
        { value: 'Odisha', label: 'Odisha' },
        { value: 'Punjab', label: 'Punjab' },
        { value: 'Rajasthan', label: 'Rajasthan' },
        { value: 'Sikkim', label: 'Sikkim' },
        { value: 'Tamil Nadu', label: 'Tamil Nadu' },
        { value: 'Telangana', label: 'Telangana' },
        { value: 'Tripura', label: 'Tripura' },
        { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
        { value: 'Uttarakhand', label: 'Uttarakhand' },
        { value: 'West Bengal', label: 'West Bengal' },
        { value: 'Andaman and Nicobar Islands', label: 'Andaman and Nicobar Islands' },
        { value: 'Chandigarh', label: 'Chandigarh' },
        { value: 'Dadra and Nagar Haveli and Daman and Diu', label: 'Dadra and Nagar Haveli and Daman and Diu' },
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
        { value: 'Ladakh', label: 'Ladakh' },
        { value: 'Lakshadweep', label: 'Lakshadweep' },
        { value: 'Puducherry', label: 'Puducherry' }
    ];

    // const handleSubmit = () => {
    //     if (!message.trim()) {
    //         setError(true);
    //     } else {
    //         setError(false);
    //         alert(`Message submitted: ${message}`);
    //     }
    // }

    const handleAvailabilityChange = (value: string) => {
        console.log('Selected:', value);
    };

    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className={`${style.contact_wrapper}`}>
                    <div className={`${style.titleContainer} text-center`}>
                        <h2>
                            Become an Administrators
                        </h2>

                        <form className='mt-[20px]'>


                            <div className=" mt-[20px]  gap-3 grid grid-cols-1 sm:grid-cols-2">
                                <InputfileComponent
                                    placeholder="First Name"
                                    required
                                />

                                <InputfileComponent
                                    placeholder="Last Name"
                                    required
                                />
                            </div>

                            <div className=" mt-[20px]  gap-3 grid grid-cols-1 sm:grid-cols-2">
                                <InputfileComponent
                                    placeholder="Phone"
                                    required
                                />

                                <InputfileComponent
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            <div className=" mt-[20px]  gap-3 grid grid-cols-1 sm:grid-cols-2">
                                <InputfileComponent
                                    placeholder="Address"
                                    required
                                />

                                <InputfileComponent
                                    placeholder="City"
                                    required
                                />
                            </div>

                            <div className=" mt-[20px]  gap-3 grid grid-cols-1 sm:grid-cols-2">
                                <CustomSelect
                                    options={stateOptions}
                                    // value={formData.shareOption}
                                    // onChange={handleSelectChange('shareOption')}
                                    placeholder="Select State"
                                />

                                <InputfileComponent
                                    placeholder="Zip Code"
                                    required
                                />
                            </div>

                            <div className="relative flex flex-col sm:flex-row items-center bg-white border border-[#2A2D3461] rounded-md shadow-sm h-auto sm:h-[45px] mt-[20px] p-2 sm:p-0">
                                <RadioGroup
                                    label="Availability Preference:"
                                    options={['Full-Time', 'Part-Time', 'Either']}
                                    onChange={handleAvailabilityChange}

                                />
                            </div>


                            {/* Message */}
                            <div className="mt-[20px]">
                                <TextArea
                                    placeholder="Administrative Experience"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    error={error}
                                />
                            </div>

                            <div className="mt-[20px]">
                                <TextArea
                                    placeholder="Software Proficiency (e.g., Google Workspace, MS Office, Dispatching Software)"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    error={error}
                                />
                            </div>

                            <div className="mt-[20px]">
                                <TextArea
                                    placeholder="Education"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    error={error}
                                />
                            </div>

                            <div className="mt-[20px]">
                                <TextArea
                                    placeholder="Work Experience"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    error={error}
                                />
                            </div>


                            {/* Submit */}
                            <div className="p-0 mt-[20px] flex items-start">
                                    <FormButton title="Submit"  />
                            </div>
                        </form>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default FormSection
