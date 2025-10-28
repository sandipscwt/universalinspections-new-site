import HeroSection from './_components/heroSection'
import AutomativeRvSection from './_components/automativeRvSection'
import WhatWeDoSection from './_components/whatWeDoSection'
import ScheduleInspectionSection from './_components/scheduleInspectionSection'
import TestimonialsSection from './_components/testimonialSection'
import HowItWorks from './_components/howItWork'
import WarrantyInspection from './_components/warrantyInspection'
import { generateMetadata } from '../utils/genaratemetadata'
import { ClientFetch } from '@/actions/client-fetch'

export const metadata = generateMetadata({ title: "Home | Universal Inspections" });

interface BannerBox {
    heading: string
    text: string
    icon: string
}
interface BannerData {
    banner_background: string
    banner_background_file_type: string
    banner_button_text: string
    banner_heading: string
    banner_subheading: string
    banner_bottom_boxes: BannerBox[]
}

interface PurchaseInspectionFeature {
    icon: string
    title: string
    description: string
}

interface PurchaseInspectionData {
    purchase_inspection_heading: string
    purchase_inspection_images: string[]
    purchase_inspection_content: string
    purchase_inspection_features: PurchaseInspectionFeature[]
    purchase_inspection_button_text: string
}
interface Service {
    id: number;
    name: string;
    banner_image: string; 
    icon: string;
    image: string | null;
    short_content: string; 
    content: string; 
    status: number;
    slug: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}
interface ServicesDataType {
    service_heading: string
    service_content: string
    service_background_image: string
    service_bottom_heading: string
    service_bottom_contact_text1: string
    service_bottom_contact_text2: string
    service_bottom_icon1: string
    service_bottom_icon2: string
    services: Service[]
}

interface ScheduleStep {
    [key: string]: unknown; 
}

interface ScheduleInspectionData {
    heading: string
    content: string
    image: string
    steps: ScheduleStep[]
    button_text: string
}




interface HowItWorksStep {
    image: string
    text: string
}
interface HowItWorksData {
    how_it_works_heading: string
    how_it_works_content: string
    how_it_works_image: string
    how_it_works_steps: HowItWorksStep[]
}

interface WarrantyData {
    warranty_inspections_heading: string
    warranty_inspections_content: string
    warranty_inspections_background_image: string
}

interface Testimonial {
    id: number
    customer_name: string
    testimonial_title: string
    rating: number
    content: string
}

interface TestimonialData {
    testimonials_title: string
    testimonials_content: string
    testimonials: Testimonial[]
}
interface HomeAPIResponse {
    banner_section: BannerData
    purchase_inspection_section: PurchaseInspectionData
    services_section: ServicesDataType
    schedule_inspection_section: ScheduleInspectionData
    how_it_works_section: HowItWorksData
    warranty_section: WarrantyData
    testimonial_section: TestimonialData
}


const Home = async () => {
    try {
        const res = await ClientFetch(`${process.env.API_URL}/home-page-data`, { cache: "no-store" })
        const HomedataRaw = await res.json()
        console.log("Homedata-------", JSON.stringify(HomedataRaw, null, 2))
        const data: HomeAPIResponse = HomedataRaw?.data
        const bannerData = data?.banner_section


        // console.log("bannerData------->>>>>", JSON.stringify(bannerData, null, 2)) 
        const purchaseData = data?.purchase_inspection_section



        console.log("purchaseData------->>>>>", JSON.stringify(purchaseData, null, 2))
        const servicesData = data?.services_section

        console.log("servicesData------->>>>>", JSON.stringify(servicesData, null, 2))
        const scheduleData = data?.schedule_inspection_section
        const howItWorkData = data?.how_it_works_section

        // console.log("scheduleData------->>>>>", JSON.stringify(scheduleData, null, 2)) 
        const warrantyData = data?.warranty_section
        const testimonialData = data?.testimonial_section

        return (
            <>
                {bannerData && <HeroSection data={bannerData} />}
                {purchaseData && <AutomativeRvSection data={purchaseData} />}
                {servicesData && <WhatWeDoSection data={servicesData} />}
                {scheduleData && <ScheduleInspectionSection data={scheduleData} />}
                {howItWorkData && <HowItWorks data={howItWorkData} />}
                {warrantyData && <WarrantyInspection data={warrantyData} />}
                {testimonialData && <TestimonialsSection data={testimonialData} />}
            </>
        )
    } catch (error) {
        console.error("Error loading Home data:", error)
        return (
            <div className="text-center py-20 text-red-200" > Failed to load home page data. </div>)
    }
}

export default Home