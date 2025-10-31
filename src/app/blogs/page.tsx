import React from "react";
import { generateMetadata } from "../utils/genaratemetadata";

export const metadata = generateMetadata({ title: "Blogs | Universal Inspections" });

const Blogs = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    return(
        <h1>{apiUrl} + hiiii</h1>
    )
};

export default Blogs;
