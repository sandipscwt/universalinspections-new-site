"use client";
import Container from '@/components/container'
import React, { useEffect, useMemo, useState } from "react";
import style from "./style.module.css";
import InputfileComponent from '@/components/formFields/InputfileComponent';
import TextArea from '@/components/formFields/TextArea';
import { FormButton } from '@/components/layout/button';
import RadioGroup from '@/components/formFields/RadioGroup';
import CustomSelect from '@/components/formFields/CustomSelect';
import { useForm, Controller, useWatch } from "react-hook-form";
import { ServerFetch } from '@/actions/server-fetch';
import { ErrorToast, SuccessToast } from "@/lib/toast";

type OptionType = { value: string; label: string };


type FormValues = {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zip: string;
    availability_preference: "Full-Time" | "Part-Time" | "Either";
    dispatching_experience: string;
    software_proficiency: string;
    education: string;
    work_experience: string;
};

const FormSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }, reset,
        watch,
        setValue,
        trigger,
        resetField,
    } = useForm<FormValues>({
        defaultValues: {
            //availability_preference: "Either",
        },
        mode: "onChange",
        reValidateMode: "onChange",
        shouldFocusError: true,
    });

    const [countryOptions, setCountryOptions] = useState<OptionType[]>([]);
    const [countryOpt, setCountryOpt] = useState<OptionType | null>(null);
    const [stateOptions, setStateOptions] = useState<OptionType[]>([]);
    const [stateOpt, setStateOpt] = useState<OptionType | null>(null);

    useEffect(() => {
        register("country", { required: "Country is required" });
        register("state", { required: "State is required" });
    }, [register]);

    // Load countries
    useEffect(() => {
        (async () => {
            const res = await ServerFetch(`/country-list-data`, { cache: "no-store" });
            setCountryOptions(
                (res?.data ?? []).map((c: any) => ({ value: String(c.id), label: c.name }))
            );
        })();
    }, []);

    // When country changes, fetch states
    useEffect(() => {
        const id = countryOpt?.value;
        if (!id) {
            setStateOptions([]);
            setStateOpt(null);
            return;
        }
        (async () => {
            const res = await ServerFetch(`/state-list-data-of-country/${id}`, { cache: "no-store" });
            //const json = res.data;
            setStateOptions(
                (res?.data ?? []).map((s: any) => ({ value: String(s.id), label: s.name }))
            );
            resetField("state");
            setStateOpt(null);
            // optionally validate country
            trigger("country");
        })();
    }, [countryOpt, resetField, trigger]);

    const onSubmit = async (data: FormValues) => {
        const dispatcherApp = await ServerFetch(
            `/submit-dispatcher-application`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );
        console.log(dispatcherApp);
        if (dispatcherApp?.status) {
            SuccessToast(dispatcherApp?.message);
            reset();
        } else {
            ErrorToast(dispatcherApp?.message);
        }
    };

    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className={`${style.contact_wrapper}`}>
                    <div className={`${style.titleContainer} text-center`}>
                        <h2>
                            Start Your Career as a Dispatcher
                        </h2>

                        <form className='mt-[20px]' onSubmit={handleSubmit(onSubmit)} noValidate>


                            <div className=" mt-[20px]  gap-3 grid grid-cols-1 sm:grid-cols-2">
                                <InputfileComponent
                                    placeholder="First Name"
                                    {...register("first_name", { required: "First Name is required" })}
                                />
                                {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
                                <InputfileComponent
                                    placeholder="Last Name"
                                    {...register("last_name", { required: "Last Name is required" })}
                                />
                                {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
                            </div>

                            <div className=" mt-[20px]  gap-3 grid grid-cols-1 sm:grid-cols-2">
                                <InputfileComponent
                                    placeholder="Phone"
                                    {...register("phone", {
                                        required: "Phone is required",
                                        pattern: { value: /^[0-9+\-() ]+$/, message: "Invalid phone number" },
                                    })}
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                <InputfileComponent
                                    placeholder="Email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                                    })}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            <div className=" mt-[20px]  gap-3 grid grid-cols-1 sm:grid-cols-2">
                                <InputfileComponent
                                    placeholder="Address"
                                    {...register("address", { required: "Address is required" })}
                                />
                                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}

                                <CustomSelect
                                    placeholder="Select Country"
                                    options={countryOptions}
                                    value={countryOpt}
                                    onChange={(opt) => {
                                        setCountryOpt(opt);
                                        setValue("country", opt?.value ?? "", { shouldValidate: true, shouldDirty: true });
                                        // If you want instant validation message update:
                                        trigger("country");
                                    }}
                                    required
                                    error={!!errors.country}
                                />
                                {errors.country && (
                                    <p className="text-red-500 text-sm">{errors.country.message}</p>
                                )}

                            </div>

                            <div className=" mt-[20px]  gap-3 grid grid-cols-1 sm:grid-cols-2">
                                <CustomSelect
                                    placeholder={countryOpt ? "Select State" : "Select a country first"}
                                    options={stateOptions}
                                    value={stateOpt}
                                    onChange={(opt) => {
                                        setStateOpt(opt);
                                        setValue("state", opt?.value ?? "", { shouldValidate: true, shouldDirty: true });
                                        trigger("state");
                                    }}
                                    disabled={!countryOpt}
                                    required
                                    error={!!errors.state}
                                />
                                {errors.state && (
                                    <p className="text-red-500 text-sm">{errors.state.message}</p>
                                )}

                                <InputfileComponent
                                    placeholder="City"
                                    {...register("city", { required: "City is required" })}
                                />
                                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}


                            </div>
                            <div className="relative flex flex-col sm:flex-row items-center bg-white border border-[#2A2D3461] rounded-md shadow-sm h-auto sm:h-[45px] mt-[20px] p-2 sm:p-0">
                                <InputfileComponent
                                    placeholder="Zip Code"
                                    {...register("zip", { required: "Zip code is required" })}
                                />
                                {errors.zip && <p className="text-red-500 text-sm">{errors.zip.message}</p>}
                            </div>

                            <div className="relative flex flex-col sm:flex-row items-center bg-white border border-[#2A2D3461] rounded-md shadow-sm h-auto sm:h-[45px] mt-[20px] p-2 sm:p-0">
                                <RadioGroup
                                    label="Availability Preference:"
                                    name="availability_preference"
                                    options={["Full-Time", "Part-Time", "Either"]}
                                    register={register}
                                    rules={{ required: "Please select availability" }}
                                />
                                {errors.availability_preference && (
                                    <p className="text-red-500 text-sm">{errors.availability_preference.message}</p>
                                )}
                            </div>


                            {/* Message */}
                            <div className="mt-[20px]">
                                <TextArea
                                    placeholder="Dispatching Experience"
                                    {...register("dispatching_experience", { required: "Please enter your experience" })}
                                />
                                {errors.dispatching_experience && <p className="text-red-500 text-sm">{errors.dispatching_experience.message}</p>}
                            </div>

                            <div className="mt-[20px]">
                                <TextArea
                                    placeholder="Software Proficiency (e.g., Google Workspace, MS Office, Dispatching Software)"
                                    {...register("software_proficiency", { required: "Please list your software proficiency" })}
                                />
                                {errors.software_proficiency && <p className="text-red-500 text-sm">{errors.software_proficiency.message}</p>}
                            </div>

                            <div className="mt-[20px]">
                                <TextArea
                                    placeholder="Education"
                                    {...register("education", { required: "Education is required" })}
                                />
                                {errors.education && <p className="text-red-500 text-sm">{errors.education.message}</p>}
                            </div>

                            <div className="mt-[20px]">
                                <TextArea
                                    placeholder="Work Experience"
                                    {...register("work_experience", { required: "Work experience is required" })}
                                />
                                {errors.work_experience && <p className="text-red-500 text-sm">{errors.work_experience.message}</p>}
                            </div>


                            {/* Submit */}
                            <div className="p-0 mt-[20px] flex items-start">
                                <FormButton title={isSubmitting ? "Submitting..." : "Submit"} disabled={isSubmitting} />
                            </div>
                        </form>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default FormSection
