"use client"

import React from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useState, useRef } from 'react';
import { ADMIN_INFO } from '@/data/customData';
import Link from 'next/link';
import { toast } from 'react-toastify';

const CONTACT_INFO = [
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/location-Icon_gmqqeh.png`,
        title: 'Our Studio',
        desc: 'AK Decoration Headquarters \n Nagercoil - Kanyakumari Main Rd, \n Kanyakumari District, Tamil Nadu.'
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/call-Icon_nfskv4.png`,
        title: 'Speak with Us',
        desc: `${ADMIN_INFO.phone} \n Available Mon-Sat, 9 AM to 8 PM`
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/mail-Icon_dnjeqn.png`,
        title: 'General Inquiries',
        desc: `${ADMIN_INFO.email} \n For collaborations and careers.`
    }
];


const CTA = () => {

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNo: '',
        eventType: '',
        eventDate: '',
        message: ''
    });


    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev => ({
            ...prev,
            [name]: value,
        })));

        setErrors((prev => {
            const updated = { ...prev };
            delete updated[name];
            return updated;
        }));
    };



    /* --- Form Validation --- */

    const validateForm = () => {
        const newErrors = {};

        if (!formData?.fullName.trim()) newErrors.fullName = "Name is required";
        if (!formData?.eventType) newErrors.eventType = "Event type is required";

        if (!formData?.phoneNo) { newErrors.phoneNo = "Phone no is required"; }
        else if (formData?.phoneNo.length < 10 || formData?.phoneNo.length > 10) { newErrors.phoneNo = "Phone no must be 10 digits"; }

        if (!formData?.eventDate) newErrors.eventDate = "Event date is required";
        if (!formData?.message.trim()) newErrors.message = "Message is required";

        return newErrors;
    };


    /* --- Form Submition (using formsubmit.co)--- */

    const submitForm = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return;
        }

        setLoading(true);

        const formDataToSend = new FormData(formRef.current);
        formDataToSend.append("_captcha", "false");
        formDataToSend.append("_template", "table");
        formDataToSend.append("_subject", "Decoration Event Inquiry : AK DECORATION");

        try {
            const res = await fetch(
                `https://formsubmit.co/${process.env.NEXT_PUBLIC_FORMSUBMIT_TOKEN}`,
                {
                    method: "POST",
                    body: formDataToSend,
                }
            );

            if (res.ok) {
                formRef.current.reset();

                setFormData({ fullName: '', phoneNo: '', eventType: '', eventDate: '', message: '' });

                toast.success("Inquiry submitted successfully!");
            }
        }
        catch (err) {
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    };



    return (
        <section
            id="cta-section"
            className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-10"
        >
            <div className="flex flex-col lg:flex-row gap-20">

                {/* Left Section */}
                <div className="w-full lg:w-1/2">

                    <h2 className="font-bodoni text-[35px] md:text-[42px] font-bold text-[#1B1C1C]">
                        Begin your Journey
                    </h2>

                    <span className="inline-block w-14 h-[2px] bg-primary mt-2 mb-10"></span>

                    {/*  Form Starting Point */}
                    <form ref={formRef} onSubmit={submitForm}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/*1.Name Field*/}
                            <div>
                                <label htmlFor='full-name' className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">
                                    Full Name
                                </label>

                                <input
                                    name='fullName'
                                    id='full-name'
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full border-b border-gray-300 pb-3 text-sm outline-none"
                                />
                                {errors?.fullName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>
                            {/*2.Event Type Field*/}
                            <div>
                                <label htmlFor='event-type'
                                    className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2"
                                >
                                    Event Type
                                </label>

                                <select name="eventType"
                                    id="event-type"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    className="border-b-1 w-full border-gray-400 border-0 focus:outline-none pb-3"
                                >
                                    <option value="">Select</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Reception">Reception</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Corporate">Corporate Event</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors?.eventType && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.eventType}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/*3.Phone number Field */}
                        <div className='mb-8'>
                            <label
                                htmlFor='phone-no'
                                className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">
                                Phone number
                            </label>

                            <input
                                type="text"
                                id='phone-no'
                                name='phoneNo'
                                placeholder="Enter your phone number"
                                value={formData.phoneNo}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 pb-3 text-sm outline-none"
                            />
                            {errors?.phoneNo && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.phoneNo}
                                </p>
                            )}
                        </div>

                        {/*4.Event Date Field*/}
                        <div className="mb-8">
                            <label
                                htmlFor='event-date'
                                className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2"
                            >
                                Date of Event
                            </label>

                            <input
                                id='event-date'
                                name='eventDate'
                                type="date"
                                value={formData.eventDate}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 pb-3 text-sm outline-none"
                            />
                            {errors?.eventDate && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.eventDate}
                                </p>
                            )}
                        </div>
                        {/*5.Message Field*/}
                        <div className="mb-10">
                            <label
                                htmlFor='message'
                                className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2"
                            >
                                Your Message
                            </label>

                            <textarea
                                id='message'
                                name='message'
                                rows={1}
                                placeholder="Describe your idea for the event..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 pb-3 text-sm outline-none resize-none"
                            />
                            {errors?.message && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>
                        {/*Submit Button*/}
                        <Button
                            type='submit'
                            disabled={loading}
                            className="px-10 py-3 bg-black text-white"
                        >
                            {loading ? "Sending..." : "SEND INQUIRY"}
                        </Button>

                    </form>
                    {/*  Form Ending Point */}
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2">

                    <div className="grid grid-cols-2 gap-x-12 gap-y-14">

                        {CONTACT_INFO.map((item, index) => (
                            <div key={index}>
                                <Image
                                    src={item?.icon}
                                    alt={item?.title}
                                    width={20}
                                    height={20}
                                    quality={65}
                                    unoptimized
                                    className="mb-4"
                                />

                                <h3 className="font-bodoni text-[20px] font-bold text-primary mb-2">
                                    {item?.title}
                                </h3>

                                <p className="text-[14px] leading-7 text-gray-500 whitespace-pre-line">
                                    {item?.desc}
                                </p>
                            </div>
                        ))}

                        <div>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/share-Icon_xvsab6.png`}
                                alt="Social"
                                width={18}
                                height={18}
                                quality={65}
                                unoptimized
                                className="mb-4"
                            />

                            <h3 className="font-bodoni text-[20px] font-bold text-primary mb-4">
                                Social Connection
                            </h3>

                            <div className="flex gap-3">
                                <Link href={'/contact'}
                                    className="w-8 h-8 border border-gray-300 flex items-center justify-center">
                                    <FaFacebookF size={12} />
                                </Link>

                                <Link href={'https://www.instagram.com/ak_decoration_service/?hl=en'}
                                    className="w-8 h-8 border border-gray-300 flex items-center justify-center">
                                    <FaInstagram size={12} />
                                </Link>

                                <Link
                                    href={'https://api.whatsapp.com/send/?phone=917550305180&text=Hello+I+need+decoration+service&type=phone_number&app_absent=0'}
                                    className="w-8 h-8 border border-gray-300 flex items-center justify-center">
                                    <FaWhatsapp size={12} />
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Special Features Box */}
                    <div className="mt-16 border border-gray-200 p-8 relative">

                        <h3 className="font-bodoni text-[28px] font-bold text-primary mb-6">
                            Special Features
                        </h3>

                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>› Destination Wedding Decor</li>
                            <li>› Custom stage design process</li>
                            <li>› Custom Lighting & SFX</li>
                        </ul>

                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-300 text-2xl">
                            ?
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default CTA