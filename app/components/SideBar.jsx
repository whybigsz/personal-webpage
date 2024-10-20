"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Users, Settings, HelpCircle, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../lib/utils';



const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: Mail, label: 'Messages', href: '/messages' },
  { icon: HelpCircle, label: 'Help', href: '/help' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <motion.div
      className={cn(
        "fixed left-0 top-0 h-screen bg-gradient-radial from-blue-600 to-slate-900 text-white transition-all duration-300 ease-in-out",
        isExpanded ? "w-64" : "w-20"
      )}
      initial={false}
      animate={{ width: isExpanded ? 300 : 80 }}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          {isExpanded && (
            <motion.h1
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Menu
            </motion.h1>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-full p-2 hover:bg-gray-700"
          >
            {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 p-4">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.label}
                className="rounded-lg hover:bg-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-4 rounded-lg p-3 transition-colors duration-200"
                >
                  <item.icon size={24} />
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  )
}