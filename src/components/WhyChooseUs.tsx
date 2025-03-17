'use client';

import { StickyScroll } from "./ui/sticky-scroll-reveal";
import musicSchoolContent from "@/data/musicData";
const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs