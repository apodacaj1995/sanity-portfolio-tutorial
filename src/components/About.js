import SanityBlockContent from "@sanity/block-content-to-react";
import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import fullMacKeyboard from "../fullMacKeyboard.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}


export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type =="author"]{

        name,
        bio,
        "authorImage": image.asset->url
    }`
    )
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>

    return (
        <main className="relative bg-blue-200">
            {/* <img src={fullMacKeyboard}
            alt="fullMacKeyboard"
            className="absolute w-full"/> */}
            <div className="p-10 lg:pt-38 container mx-auto relative">
                <section className="bg-blue-500 rounded-lg shadow-2xl lg:flex p-10">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-3/12 h-3/12 mr-8 mt-4" alt={author.name}/>
                    <div className="text-large flex flex-col justify-center">
                        <h1 className="text-6xl cursive text-black">
                            hey, there. i'm{" "}
                            <span className="cursive text-black hover:text-white">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white cursive tracking-wide leading-3">
                            <BlockContent
                            blocks={author.bio}
                            projectId="rxnadaw2"
                            dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )

}