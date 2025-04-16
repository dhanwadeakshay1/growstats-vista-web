
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgClass?: string;
}

const PageHeader = ({
  title,
  subtitle,
  bgClass = "bg-gradient-to-r from-growstats-red to-growstats-purple",
}: PageHeaderProps) => {
  return (
    <section className={`${bgClass} py-20 md:py-28`}>
      <div className="container-custom text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
