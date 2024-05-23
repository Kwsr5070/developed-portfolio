import React, { useState } from 'react';
import { motion } from "framer-motion";

const Tecknologies = () => {
  const SkillBar = ({ name, percentage }) => {
    return (
      <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} className="flex items-center">
        <div className="w-24">{name}</div>
        <div className="flex-1 ml-4 bg-gray-200 rounded-md overflow-hidden">
          <div className="h-6 bg-blue-500"></div>
        </div>
        <div className="ml-2">{percentage}%</div>
      </motion.div>
    );
  };

  const [showMessage, setShowMessage] = useState(true);
  const [showTools, setShowTools] = useState(false);
  const [showSoftSkill, setShowSoftSkill] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  const handleButtonClick = (section) => {
    setShowMessage(section === 'message');
    setShowTools(section === 'tools');
    setShowSoftSkill(section === 'softskill');
    setShowLanguage(section === 'language');
  };

  return (
    <div className='border-b border-neutral-800 pb-8 md:pb-24'>
      <h2 className='my-6 md:my-20 text-center text-2xl md:text-4xl'>Technologies</h2>
      <div className=''>
        <div className='flex flex-col md:flex-row gap-4'>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button onClick={() => handleButtonClick('message')} className='border px-4 md:px-6 py-2 md:py-4 hover:bg-neutral-950'>
              Frontend
            </button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button onClick={() => handleButtonClick('tools')} className='border px-4 md:px-6 py-2 md:py-4 hover:bg-neutral-950 gap-4'>Tools</button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button onClick={() => handleButtonClick('softskill')} className='border px-4 md:px-6 py-2 md:py-4 hover:bg-neutral-950'>Softskill</button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button onClick={() => handleButtonClick('language')} className='border px-4 md:px-6 py-2 md:py-4 hover:bg-neutral-950'>Language</button>
          </motion.div>
        </div>
        {showMessage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="p-4 md:p-8 border border-b-violet-300">
            <h2 className="text-lg md:text-xl text-center font-bold mb-4">Skill Summary</h2>
            <div className="grid gap-2 md:gap-4">
              <SkillBar name="HTML" percentage={85} />
              <SkillBar name="CSS3" percentage={90} />
              <SkillBar name="JavaScript" percentage={80} />
              <SkillBar name="React.js" percentage={95} />
              <SkillBar name="Design System" percentage={75} />
            </div>
          </motion.div>
        )}
        {showTools && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="p-4 md:p-8 border border-b-violet-300">
            <h2 className="text-lg md:text-xl text-center font-bold mb-4">Tools Summary</h2>
            <div className="grid gap-2 md:gap-4">
              <div>tailwind</div>
              <div>daisyui</div>
              <div>figma</div>
              <div>google fonts</div>
              <div>vs code</div>
              <div>graph</div>
            </div>
          </motion.div>
        )}
        {showSoftSkill && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="p-4 md:p-8 border border-b-violet-300">
            <h2 className="text-lg md:text-xl text-center font-bold mb-4">Soft Skill Summary</h2>
            <div className="grid gap-2 md:gap-4">
              <SkillBar  name="Communication" percentage={95}  />
              <SkillBar name="Teamwork" percentage={95} />
              <SkillBar name="Problem Solving" percentage={90} />
              <SkillBar name="Time Management" percentage={99} />
            </div>
          </motion.div>
        )}
        {showLanguage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="p-4 md:p-8 border border-b-violet-300">
            <h2 className="text-lg md:text-xl text-center font-bold mb-4">Language Proficiency</h2>
            <div className="grid gap-2 md:gap-4">
              <SkillBar name="Bangla" percentage={95} />
              <SkillBar name="English" percentage={60} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Tecknologies;
