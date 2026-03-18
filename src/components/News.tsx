"use client";

import { useState } from "react";
import { news } from "@/data/news";
import SectionHeader from "./SectionHeader";

const INITIAL_COUNT = 5;

export default function News() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? news : news.slice(0, INITIAL_COUNT);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader id="news" title="News" />
        <div className="space-y-3">
          {visible.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-baseline"
            >
              <span className="shrink-0 w-24 text-sm font-medium text-primary">
                {item.date}
              </span>
              <p
                className="text-sm text-text-secondary leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </div>
        {news.length > INITIAL_COUNT && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            {showAll ? "Show less" : `Show all (${news.length})`}
          </button>
        )}
      </div>
    </section>
  );
}
