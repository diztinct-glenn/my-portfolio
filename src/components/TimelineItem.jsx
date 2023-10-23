import React from 'react';

function TimelineItem({ year, title, duration, company, company_url, details}) {
  return (
    <div>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-cream dark:border-midnight dark:bg-stone-700" />
          <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-cream dark:text-midnight bg-midnight dark:bg-cream rounded-md">
              {year}
            </span>
            <h3 className="text-lg font-semibold text-midnight dark:text-cream">
              {title}
            </h3>
            <span className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
              {duration}
            </span>
            <span className="text-md italic font-semibold text-midnight dark:text-cream">
              <a
                href={company_url}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {company}
              </a>
            </span>
          </div>
          <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
            {details}
          </p>
        </li>
      </ol>
    </div>
  )
}

export default TimelineItem;
