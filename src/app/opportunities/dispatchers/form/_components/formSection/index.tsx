"use client";
import Container from '@/components/container'
import React, { useState } from 'react'
import style from "./style.module.css";
import InputfileComponent from '@/components/formFields/InputfileComponent';
import TextArea from '@/components/formFields/TextArea';
import Button from '@/components/layout/button';
import { MdCall, MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import RadioGroup from '@/components/formFields/RadioGroup';
import CustomSelect from '@/components/formFields/CustomSelect';

const FormSection = () => {

    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const shareOptions = [
        { value: 'public', label: 'Public' },
        { value: 'private', label: 'Private' },
        { value: 'limited', label: 'Limited' },
    ];

    const handleSubmit = () => {
        if (!message.trim()) {
            setError(true);
        } else {
            setError(false);
            alert(`Message submitted: ${message}`);
        }
    }

    const handleAvailabilityChange = (value: string) => {
        console.log('Selected:', value);
    };

    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className={`${style.contact_wrapper}`}>
                    <div className={`${style.titleContainer} text-center`}>
                        <h2>
                            Start Your Career as a Dispatcher
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
                                    options={shareOptions}
                                    // value={formData.shareOption}
                                    // onChange={handleSelectChange('shareOption')}
                                    placeholder="Select share option..."
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
                                    placeholder="Dispatching Experience"
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
                                <Button title="Submit" href="/book" />
                            </div>
                        </form>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default FormSection
