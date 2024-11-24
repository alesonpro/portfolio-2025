import React from 'react';

function Testimonials() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-16">
            <h2
                className="
                text-black-secondary 
                font-bold 
                text-left 
                leading-tight 
                text-[46px] 
                md:text-[50px] 
                lg:text-[110px] 
                max-w-[90%] 
                md:max-w-[80%] 
                lg:max-w-none 
                sm:max-w-[25ch]
                "
                style={ {
                    wordBreak: 'break-word', // Ensures long words break properly
                } }
            >
                Words from Those Who’ve Worked With Me
            </h2>
        </section>
    );
}

export default Testimonials;
