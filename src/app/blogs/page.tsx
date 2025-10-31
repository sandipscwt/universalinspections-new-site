import React from "react";
import HeroSection from "./_components/herosection";
import BlogList from "./_components/blogList";
import { generateMetadata } from "../utils/genaratemetadata";
import { ClientFetch } from "@/actions/client-fetch";

export const metadata = generateMetadata({ title: "Blogs | Universal Inspections" });

const Blogs = async () => {
    return(
        <h1>Blog page!</h1>
    )
};

export default Blogs;
