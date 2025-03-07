import {Metadata} from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me",
};

export default function About() {
    return (
        <div className='min-h-[calc(100vh-188px)] flex items-center justify-center mx-8 md:mx-24 lg:mx-72'>
            <div className='flex flex-col space-y-2'>
                <p className='text-green-800 text-2xl font-bold'>About me</p>
                <p className='text-gray-600'>
                    This space is a collection of my experiences and the moments I’ve captured,
                    whether through my travels, everyday life, or spontaneous encounters that tell a unique story.
                    Photography allows me to preserve the beauty of fleeting moments—whether it’s a breathtaking landscape,
                    a quiet street corner, or the emotions reflected in a single expression. Through my lens, I aim to
                    highlight the details that often go unnoticed and share a perspective that blends curiosity, emotion,
                    and creativity. I invite you to explore my work and see the world as I see it.
                </p>
            </div>
        </div>
    )
}
