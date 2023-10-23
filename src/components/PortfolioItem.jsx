import React from 'react';

function PortfolioItem({ title, videoPlaceholder, videoSrc, stack, link}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-midnight dark:border-cream rounded-md overflow-hidden">
      {/* <img src={videoSrc} alt="" className="w-full h-36 md:h-48 object-cover cursor-pointer"/> */}
      <video loop autoPlay muted poster={videoPlaceholder}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-cream mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-cream">
          {stack.map((item, index) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-midnight dark:border-cream rounded-md" key={index}>
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  )
}

export default PortfolioItem;
