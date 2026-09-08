"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AiTools() {
  const [answers, setAnswers] = useState({ level: '', goal: '', time: '', budget: '' });
  const [recLoading, setRecLoading] = useState(false);
  const [recResult, setRecResult] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: 'bot', text: "Hi! I'm the CoachNitesh AI assistant. Ask me anything about the curriculum, fees, or how the live classes work." }
  ]);

  const handleQuizSelect = (key, val) => setAnswers({ ...answers, [key]: val });

  const handleRecSubmit = () => {
    if (!answers.level || !answers.goal || !answers.time || !answers.budget) {
      alert('Please answer all four questions first.');
      return;
    }
    setRecLoading(true);
    setRecResult("");
    setTimeout(() => {
      setRecLoading(false);
      setRecResult("Based on your goals and availability, I recommend enrolling in the upcoming Cohort. It gives you the portfolio pieces and interview prep needed to actually land a role in this market.");
    }, 1200);
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    setChatHistory([...chatHistory, { role: 'user', text: chatInput }]);
    setChatInput("");
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'bot', text: "In the final version, this chat will be connected to your backend AI logic to answer student queries automatically." }]);
    }, 1000);
  };

  return (
    <section id="recommend" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-16 text-center md:text-left">
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[var(--color-text-mute)] text-sm font-mono uppercase tracking-[0.2em] mb-4">
            AI-powered
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Not sure if this fits? Ask the AI.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-[var(--color-text-mute)] mt-4 text-[16px] max-w-2xl leading-relaxed">
            Two small AI tools, built the same way you'll learn to build things in this course: a course recommender and a live Q&A chat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Quiz Card */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-brand-orange)] bg-[var(--color-brand-orange)]/10 px-4 py-1.5 rounded-full mb-8 font-bold">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] animate-pulse"></span>
              Course recommender
            </div>
            
            <div className="space-y-6">
              {[
                { key: 'level', label: 'Where are you starting from?', options: ['Complete beginner', 'Some self-taught experience', 'Working in marketing'] },
                { key: 'goal', label: "What's the goal?", options: ['Get a job in digital marketing', 'Run marketing for my business', 'Freelance / side income'] },
                { key: 'time', label: 'How much time can you give weekly?', options: ['Under 4 hours', '4–8 hours', '8+ hours'] },
                { key: 'budget', label: 'Are you ready for a live cohort?', options: ['Yes, looking for structured learning', 'No, I prefer recorded videos'] }
              ].map((q) => (
                <div key={q.key}>
                  <div className="text-[15px] font-bold text-white mb-3">{q.label}</div>
                  <div className="flex flex-wrap gap-2.5">
                    {q.options.map(opt => (
                      <button 
                        key={opt}
                        onClick={() => handleQuizSelect(q.key, opt)}
                        className={`px-4 py-2.5 rounded-full border text-[14px] font-medium transition-all duration-200 ${answers[q.key] === opt ? 'bg-[var(--color-brand-orange)] border-[var(--color-brand-orange)] text-white shadow-lg' : 'bg-transparent border-white/20 text-[var(--color-text-mute)] hover:border-white/50 hover:text-white'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handleRecSubmit} disabled={recLoading} className="mt-8 w-full bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3.5 rounded-xl font-bold text-[15px] transition-all disabled:opacity-50">
              Get Recommendation
            </button>
            {recLoading && <div className="flex items-center gap-2 mt-5 text-[14px] text-[var(--color-text-dim)]"><span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] animate-pulse"></span> Thinking it through…</div>}
            {recResult && <div className="mt-5 p-5 rounded-xl bg-[var(--color-brand-orange)]/10 border-l-4 border-[var(--color-brand-orange)] text-[15px] leading-relaxed text-white font-medium">{recResult}</div>}
          </motion.div>

          {/* Chat Card */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col">
            <div className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-[#38bdf8] bg-[#38bdf8]/10 px-4 py-1.5 rounded-full mb-8 font-bold self-start">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
              Ask a question
            </div>

            <div className="flex-1 min-h-[400px] overflow-y-auto bg-black/40 rounded-2xl p-5 flex flex-col gap-4 border border-white/5 shadow-inner">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`max-w-[85%] px-4 py-3 text-[14px] leading-relaxed ${msg.role === 'user' ? 'bg-[#2a2b30] text-white self-end rounded-t-2xl rounded-bl-2xl font-medium border border-white/5' : 'bg-transparent text-[var(--color-text-mute)] self-start rounded-t-2xl rounded-br-2xl'}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleChatSend()}
                placeholder="Type your question..."
                className="flex-1 px-5 py-3.5 rounded-full border border-white/10 bg-black/40 text-white text-[14px] outline-none focus:border-[#38bdf8]/50 transition-colors placeholder:text-white/30"
              />
              <button onClick={handleChatSend} className="bg-[#38bdf8] hover:bg-[#209ece] text-black px-6 rounded-full text-[14px] font-bold transition-colors">
                Send
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}