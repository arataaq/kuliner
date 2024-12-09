"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Product() {
  const { ref } = useSectionInView("Product", 0.5);

  return (
    <section ref={ref} id="product" className="scroll-mt-28 mb-28">
      <SectionHeading>My Product</SectionHeading>
      <div>
        {productData.map((product, index) => (
          <React.Fragment key={index}>
            <Product {...product} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
