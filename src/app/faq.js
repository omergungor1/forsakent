"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useLanguage } from "../../src/context/LanguageContext";

export function Faq() {
  const { texts, t } = useLanguage();
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            {t(texts.home_page.sss.title)}
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500">
            {t(texts.home_page.sss.text)}
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {
            texts.home_page.sss.data.map(({ title, desc }, key) => (
              <Accordion
                key={key}
                open={open === key + 1}
                onClick={() => handleOpen(key + 1)}
              >
                <AccordionHeader className="text-left text-gray-900">
                  {t(title)}
                </AccordionHeader>
                <AccordionBody>
                  <Typography
                    color="blue-gray"
                    className="font-normal text-gray-500"
                  >
                    {t(desc)}
                  </Typography>
                </AccordionBody>
              </Accordion>
            ))
          }
        </div>
      </div>
    </section>
  );
}


export default Faq;
