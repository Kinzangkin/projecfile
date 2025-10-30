"use client"
import React, { useState } from 'react'
import Maincard from './ui/Maincard';
import projects from '@/data/projects.json'

function Main() {
    const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Project" },
    { id: "Am", label: "Alight Motion" },
    { id: "Ae", label: "After Effect" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  return (
    <div className='flex flex-col justify-center items-center space-y-10 mb-20'>
        <div className='text-sm'>
            {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative z-10 px-5 py-2 text-sm font-medium rounded-full transition-all ${
              activeTab === tab.id ? "text-white" : "text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
        </div>

        <div className='grid sm:grid-cols-4 gap-5'>
            {filteredProjects.map((item) => (
            <Maincard 
            key={item.id}
            title={item.title}
            media={item.media}
            link={item.link}
            type={item.type}
            />
            ))}
        </div>
    </div>
  )
}

export default Main