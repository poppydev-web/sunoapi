import React from 'react';
import Swagger from './components/Swagger';
import spec from './docs/swagger-suno-api.json';
import Section from './components/Section';
import Markdown from 'react-markdown';


export default function Docs() {
    return (
        <>
            <Section className="my-10">
                <div className=' border p-4 rounded-2xl shadow-xl hover:shadow-none duration-200'>
                    <Swagger spec={spec} />
                </div>
            </Section>
        </>

    );
}
