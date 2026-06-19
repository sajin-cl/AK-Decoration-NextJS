"use client";

import { useState } from "react";
import Image from "next/image";
import GALERY_DATA from "@/data/galleryData";
import { cn } from "@/lib/utils";

const FILTERS = [
    {
        label: "All Works",
        slug: "all-works",
    },
    {
        label: "Stage Design",
        slug: "stage-decoration",
    },
    {
        label: "Floral Artistry",
        slug: "floral-decoration",
    }
];

const GallerySection = () => {
    const [activeFilter, setActiveFilter] = useState("all-works");

    const images =
        activeFilter === "all-works"
            ? [
                ...GALERY_DATA["stage-decoration"]?.images,
                ...GALERY_DATA["floral-decoration"]?.images,
            ]
            : GALERY_DATA[activeFilter]?.images || [];


    return (
        <section className="w-full bg-white py-30 px-10 md:px-20 overflow-x-hidden">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

                <div>
                    <p className="font-mono text-primary text-xs font-bold tracking-widest uppercase mb-3">
                        PORTFOLIO PORTFOLIO
                    </p>

                    <h2 className="font-bodoni text-4xl md:text-5xl text-secondary">
                        Curated Masterpieces
                    </h2>
                </div>

                {/* Filters */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-8">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter?.slug}
                                onClick={() => setActiveFilter(filter?.slug)}
                                className={cn(`relative text-sm font-semibold uppercase transition-all cursor-pointer
                                ${activeFilter === filter?.slug
                                        ? "text-primary"
                                        : "text-gray-500 hover:text-secondary"
                                    }`)}
                            >
                                {filter.label}

                                {activeFilter === filter?.slug && (
                                    <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-primary"></span>
                                )}
                            </button>
                        ))}
                    </div>

                </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {images.map((item, index) => (
                    <div
                        key={`${index}-${item}`}
                        className="overflow-hidden  border-10 border-gray-100  md:border-none rounded"
                    >
                        <Image
                            src={item}
                            alt={item + index}
                            width={800}
                            height={500}
                            quality={65}
                            className="w-full h-[400px]  object-cover transition duration-500 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;