import FAQsText from '../data/FAQsText.json';
import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';


export const FAQSection = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center text-text mb-8">
                Frequently Asked Questions:</h1>
            <Accordion type="single" collapsible>
                {FAQsText.map((faq) => (
                    <AccordionItem 
                    key={faq.id}
                    value={faq.FAQnumber} 
                    className="border-b border-border"
                    >
                        <AccordionTrigger className="text-text font-semibold hover:no-underline hover:text-gold-light">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent  className="text-text/80">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>

    )
}

