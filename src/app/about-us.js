"use client";

import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import Image from "next/image";
import { useLanguage } from "../../src/context/LanguageContext";


// const EVENT_INFO = [
//   {
//     title: "Cutting-Edge Insights!",
//     description:
//       "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
//     subTitle: "Presentation",
//   },
//   {
//     title: "Practical Knowledge!",
//     description:
//       "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
//     subTitle: "Workshops",
//   },
// ];

export function AboutUs() {
  const { texts, t } = useLanguage();

  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Card
        color="transparent"
        shadow={false}
        className=" lg:!flex-row mb-10 lg:items-start "
      >
        <CardHeader
          floated={false}
          shadow={false}
          className="h-[32rem] max-w-[28rem] shrink-0"
        >
          <Image
            width={768}
            height={768}
            src={'/image/img5.jpg'}
            alt="Forsa Peyzaj hakkında"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="col-span-full lg:col-span-3">
          <Typography variant="h2" color="blue-gray" className="mb-4 font-medium">
            {t(texts.home_page.about_us.title)}
          </Typography>
          <Typography className="mb-12 md:w-8/12 font-medium !text-gray-500">
            {t(texts.home_page.about_us.content1).split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </CardBody>
      </Card>





      {
        // <Typography variant="h6" className="text-center mb-2" color="orange">
        //       About the event
        //     </Typography>
        //     <Typography variant="h3" className="text-center" color="blue-gray">
        //       Why Attend?
        //     </Typography>
        //     <Typography
        //       variant="lead"
        //       className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500">
        //       Welcome to the AI Conference 2023, where the future unfolds! Whether
        //       you’re a seasoned AI professional, a curious newcomer, or a
        //       business leader looking to harness the power of AI, this conference is
        //       designed to inspire, educate, and connect.
        //     </Typography>
        //     <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        //       {EVENT_INFO.map((props, idx) => (
        //         <AboutCard key={idx} {...props} />
        //       ))}
        //       <div className="md:col-span-2">
        //         <AboutCard
        //           title="Networking!"
        //           subTitle="Community"
        //           description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
        //         />
        //       </div>
        //     </div>
      }
    </section>
  );
}

export default AboutUs;
