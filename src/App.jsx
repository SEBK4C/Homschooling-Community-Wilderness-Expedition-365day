import React, { useState, useEffect } from 'react';
import ProjectTrackerDashboard from '../outputs/project-tracker-dashboard.jsx';

// Navigation Component
const Navigation = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'mission', label: 'Mission' },
    { id: 'cohousing', label: 'Co-Housing' },
    { id: 'governance', label: 'Governance' },
    { id: 'safety', label: 'Safety' },
    { id: 'dashboard', label: 'Progress' },
    { id: 'join', label: 'Join Us' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Waldorf-style hand-drawn tree - organic, flowing curves */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4c-3.5 0.3-6 2.8-5.5 6.2 0.3 2.2 2 3.8 4 4.5M12 4c3.5 0.3 6 2.8 5.5 6.2-0.3 2.2-2 3.8-4 4.5"
                />
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M12 14.5c0.2 2.5-0.1 4.5 0 6.5"
                />
                <path
                  strokeLinecap="round"
                  strokeWidth={1.5}
                  d="M9 21c1-0.8 2-1 3-1s2 0.2 3 1"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Wild Year</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-stone-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block px-4 py-3 text-stone-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = ({ onNavigate }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
        alt="Sunlit forest"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
      <div className="inline-flex items-center gap-2 bg-emerald-900/50 backdrop-blur-sm border border-emerald-700/50 rounded-full px-4 py-2 mb-8">
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
        <span className="text-emerald-300 text-sm font-medium">Now Planning: 2027 Expedition</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        One Year in the
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
          Wilderness Together
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-stone-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        20 families. 365 days. A transformative journey of community, education,
        and deep connection with the natural world.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <button
          onClick={() => onNavigate('join')}
          className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-emerald-900/50 hover:shadow-xl hover:shadow-emerald-900/50 hover:-translate-y-0.5"
        >
          Join the Expedition
        </button>
        <button
          onClick={() => onNavigate('mission')}
          className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all duration-200"
        >
          Learn More
        </button>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { value: '20', label: 'Families', sub: '~80 people' },
          { value: '365', label: 'Days', sub: 'Full year' },
          { value: '100%', label: 'Open Source', sub: 'Transparent' },
          { value: '10', label: 'Locations', sub: 'Researching' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
            <div className="text-emerald-400 font-medium">{stat.label}</div>
            <div className="text-stone-500 text-sm">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
);

// Mission Section
const MissionSection = () => (
  <section id="mission" className="py-24 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">
          Raising Children in Nature
        </h2>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
          We believe the best education happens when families learn, grow, and overcome
          challenges together—immersed in the natural world.
        </p>
      </div>

      {/* Featured Quote */}
      <div className="bg-gradient-to-br from-emerald-900 to-stone-900 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="relative">
          <svg className="w-12 h-12 text-emerald-500/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6">
            What if 20 families could spend a year living in the wilderness together—learning,
            working remotely, conducting citizen science, and building genuine community?
          </p>
          <p className="text-emerald-400 font-medium">
            — The Wild Year Vision
          </p>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            ),
            title: 'Experiential Education',
            description: 'Learning through doing. From tracking wildlife to understanding ecosystems, every day brings hands-on discovery that no classroom can replicate.'
          },
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            ),
            title: 'Community Bonds',
            description: 'Stronger together. Families supporting families through shared challenges, celebrations, and the daily rhythm of life in nature.'
          },
          {
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: 'Earth Stewardship',
            description: 'Developing a profound respect and understanding of our planet. Children who grow up in nature become its fiercest protectors.'
          },
        ].map((pillar, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-stone-100">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">{pillar.title}</h3>
            <p className="text-stone-600 leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Co-Housing Section
const CoHousingSection = () => (
  <section id="cohousing" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1600&auto=format&fit=crop"
              alt="Nordic forest cabin community"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-amber-500 text-stone-900 text-sm font-bold px-3 py-1 rounded-full mb-2">
                Danish Innovation
              </span>
              <p className="text-white text-lg font-medium">
                Inspired by 50+ years of successful co-housing communities
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500 rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400 rounded-2xl -z-10"></div>
        </div>

        {/* Content Side */}
        <div>
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Community Design</span>
          <h2 className="text-4xl font-bold text-stone-900 mt-2 mb-6">
            The Co-Housing Model
          </h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Born in Denmark in the 1960s, co-housing offers a thoughtful approach to
            community living. Private homes clustered around shared spaces, where neighbors
            become extended family.
          </p>

          <div className="space-y-6">
            {[
              {
                title: 'Private + Shared',
                description: 'Each family maintains private living quarters while sharing common facilities—kitchens, workshops, gardens, and gathering spaces.'
              },
              {
                title: 'Intentional Community',
                description: 'Residents actively participate in the design and ongoing governance of their community, creating spaces that truly meet their needs.'
              },
              {
                title: 'Collaborative Living',
                description: 'Shared meals, childcare, and resources reduce individual burdens while building deeper connections between families.'
              },
              {
                title: 'Wilderness Adaptation',
                description: 'We adapt these principles for an expedition context—portable infrastructure, shared responsibilities, and collective resilience.'
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">{item.title}</h4>
                  <p className="text-stone-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Governance Section
const GovernanceSection = () => (
  <section id="governance" className="py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Decision Making</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
          Consensus-Based Governance
        </h2>
        <p className="text-xl text-stone-300 max-w-3xl mx-auto">
          Every voice matters. Our community operates on consensus, ensuring all families
          have equal say in decisions that affect our shared experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Governance Principles */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            Core Principles
          </h3>
          <div className="space-y-4">
            {[
              'Equal voice for all adult community members',
              'Decisions made through facilitated discussion',
              'Seek solutions that everyone can live with',
              'Commitment to hearing all perspectives',
              'Working circles for different focus areas',
              'Transparent communication at all times',
            ].map((principle, i) => (
              <div key={i} className="flex items-center gap-3 text-stone-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>{principle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decision Process */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </span>
            Decision Process
          </h3>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Proposal', desc: 'Any member can bring forward a proposal for consideration' },
              { step: '2', title: 'Discussion', desc: 'Open dialogue to understand concerns and possibilities' },
              { step: '3', title: 'Modification', desc: 'Refine the proposal based on community input' },
              { step: '4', title: 'Consensus Check', desc: 'Confirm all members can support the decision' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-stone-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Working Circles */}
      <div className="bg-gradient-to-r from-emerald-800/50 to-amber-800/50 rounded-3xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Working Circles</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'Safety', icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ) },
            { name: 'Education', icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            ) },
            { name: 'Logistics', icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            ) },
            { name: 'Wellness', icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            ) },
            { name: 'Community', icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            ) },
          ].map((circle, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors flex flex-col items-center">
              <div className="text-white mb-2">{circle.icon}</div>
              <div className="text-white font-medium text-sm">{circle.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Safety Section
const SafetySection = () => (
  <section id="safety" className="py-24 bg-stone-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Mission Critical</span>
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">
          Structured Safety Planning
        </h2>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
          Inspired by mission-planning principles, we are designing systems with built-in redundancy.
          Our goal: thorough risk assessment and preparation for every participant.
        </p>
      </div>

      {/* Mission Structure */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
        <div className="bg-stone-900 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Planned Role Structure</h3>
              <p className="text-stone-400">Defined roles for coordinated safety and operations</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { role: 'Mission Commander', desc: 'Overall coordination & decisions', color: 'bg-stone-800' },
              { role: 'Safety Officer', desc: 'Risk assessment & protocols', color: 'bg-red-600' },
              { role: 'Medical Officer', desc: 'Health & emergency response', color: 'bg-blue-600' },
              { role: 'Operations Lead', desc: 'Daily logistics & supplies', color: 'bg-amber-600' },
              { role: 'Communications', desc: 'External contact & alerts', color: 'bg-emerald-600' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-2xl mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{item.role.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-stone-900 text-sm">{item.role}</h4>
                <p className="text-stone-500 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Systems Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Redundant Communications',
            description: 'Planning for satellite phones, emergency beacons, and mesh radio networks to maintain contact in remote areas.',
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            )
          },
          {
            title: 'Emergency Protocols',
            description: 'Developing detailed response plans for weather, medical, wildlife, and evacuation scenarios, with regular drills planned.',
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )
          },
          {
            title: 'Medical Readiness',
            description: 'Planning for on-site medical support, first aid stations, and evacuation partnerships with local healthcare providers.',
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            )
          },
          {
            title: 'Training & Certification',
            description: 'Requiring all adults to complete wilderness first aid, risk assessment, and emergency response training before departure.',
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            )
          },
          {
            title: 'Daily Check-Ins',
            description: 'Planning for structured morning briefings and evening debriefs to maintain situational awareness and early problem detection.',
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            )
          },
          {
            title: 'Resource Redundancy',
            description: 'Planning for backup supplies beyond projected needs, with multiple water sources, power systems, and food reserves.',
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            )
          },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-stone-200">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-700 mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Image Gallery Section
const GallerySection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-stone-900">Life in the Wild</h2>
        <p className="text-stone-600 mt-2">Where adventure meets learning, and families grow together</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=800&auto=format&fit=crop', alt: 'African savannah' },
          { src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop', alt: 'Mountain landscape' },
          { src: 'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?q=80&w=800&auto=format&fit=crop', alt: 'Children exploring' },
          { src: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?q=80&w=800&auto=format&fit=crop', alt: 'Forest adventure' },
          { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop', alt: 'Camping' },
          { src: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?q=80&w=800&auto=format&fit=crop', alt: 'Nature learning' },
          { src: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=800&auto=format&fit=crop', alt: 'Wildlife' },
          { src: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop', alt: 'Adventure' },
        ].map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl ${i === 0 || i === 7 ? 'md:col-span-2 md:row-span-2' : ''}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Dashboard Section
const DashboardSection = ({ showDashboard, setShowDashboard }) => (
  <section id="dashboard" className="py-24 bg-stone-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Transparency</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
          Mission Progress Dashboard
        </h2>
        <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-8">
          Track our planning progress in real-time. Every decision, every milestone,
          completely transparent and open source.
        </p>

        <button
          onClick={() => setShowDashboard(!showDashboard)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-all duration-200"
        >
          {showDashboard ? 'Hide Dashboard' : 'View Live Dashboard'}
          <svg className={`w-5 h-5 transition-transform ${showDashboard ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Dashboard Preview Cards */}
      {!showDashboard && (
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Work Packages', value: '10', status: 'Active' },
            { label: 'AI Agents', value: '10', status: 'Researching' },
            { label: 'Current Phase', value: '1', status: 'Foundation' },
            { label: 'Target Budget', value: '€1.5M', status: 'Modeling' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white">{item.value}</div>
              <div className="text-stone-400">{item.label}</div>
              <div className="mt-2 inline-flex items-center gap-1.5 text-emerald-400 text-sm">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                {item.status}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full Dashboard */}
      {showDashboard && (
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <ProjectTrackerDashboard />
        </div>
      )}
    </div>
  </section>
);

// Open Source Section
const OpenSourceSection = () => (
  <section className="py-24 bg-gradient-to-br from-emerald-800 to-emerald-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      </div>

      <h2 className="text-4xl font-bold text-white mb-4">
        100% Open Source
      </h2>
      <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
        Every plan, every decision, every research finding is published openly on GitHub.
        We believe radical transparency builds trust and enables collaboration.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a
          href="https://github.com/SEBK4C/Homschooling-Community-Wilderness-Expedition-365day"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 font-semibold rounded-full hover:bg-stone-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          View on GitHub
        </a>
        <a
          href="https://github.com/SEBK4C/Homschooling-Community-Wilderness-Expedition-365day/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors"
        >
          Contribute Ideas
        </a>
      </div>

      <div className="grid grid-cols-3 gap-6 text-center">
        {[
          { value: 'MIT', label: 'License' },
          { value: '10', label: 'AI Agents' },
          { value: '6', label: 'Skills' },
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-emerald-200 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Join Section
const JoinSection = () => (
  <section id="join" className="py-24 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Get Involved</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-6">
            Join the Adventure
          </h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Whether you are a family ready to embark on this journey, an expert who can
            contribute knowledge, or simply someone who believes in our mission—we want
            to hear from you.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { title: 'Families', desc: 'Apply to be one of the 20 founding families' },
              { title: 'Experts', desc: 'Share expertise in wilderness, education, or logistics' },
              { title: 'Partners', desc: 'Organizations aligned with our mission' },
              { title: 'Contributors', desc: 'Help with research, design, or development' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">{item.title}</h4>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">Express Your Interest</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">I am interested as...</label>
              <select className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white">
                <option>Select your interest</option>
                <option>A family wanting to participate</option>
                <option>An expert/advisor</option>
                <option>A potential partner organization</option>
                <option>A contributor (research, development)</option>
                <option>Just following along</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Message (Optional)</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                placeholder="Tell us about yourself and your interest in Wild Year..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-900/20"
            >
              Submit Interest
            </button>
            <p className="text-center text-stone-500 text-sm">
              We will reach out within 48 hours of receiving your submission.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-stone-900 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Waldorf-style hand-drawn tree - organic, flowing curves */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4c-3.5 0.3-6 2.8-5.5 6.2 0.3 2.2 2 3.8 4 4.5M12 4c3.5 0.3 6 2.8 5.5 6.2-0.3 2.2-2 3.8-4 4.5"
                />
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M12 14.5c0.2 2.5-0.1 4.5 0 6.5"
                />
                <path
                  strokeLinecap="round"
                  strokeWidth={1.5}
                  d="M9 21c1-0.8 2-1 3-1s2 0.2 3 1"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Wild Year</span>
          </div>
          <p className="text-stone-400 mb-6 max-w-md">
            A year-long wilderness expedition for families seeking deeper connection—with
            nature, with each other, and with what truly matters.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/SEBK4C/Homschooling-Community-Wilderness-Expedition-365day" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {['Mission', 'Co-Housing', 'Governance', 'Safety', 'Progress'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace('-', '')}`} className="text-stone-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-3">
            <li>
              <a href="https://github.com/SEBK4C/Homschooling-Community-Wilderness-Expedition-365day" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                GitHub Repository
              </a>
            </li>
            <li>
              <a href="https://github.com/SEBK4C/Homschooling-Community-Wilderness-Expedition-365day/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="https://github.com/SEBK4C/Homschooling-Community-Wilderness-Expedition-365day/issues" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                Contribute
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-stone-500 text-sm">
          &copy; {new Date().getFullYear()} Wild Year Expedition. Open source under MIT License.
        </p>
        <p className="text-stone-500 text-sm">
          Made with purpose for families who dream of more.
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'cohousing', 'governance', 'safety', 'dashboard', 'join'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <HeroSection onNavigate={handleNavigate} />
      <MissionSection />
      <CoHousingSection />
      <GovernanceSection />
      <SafetySection />
      <GallerySection />
      <DashboardSection showDashboard={showDashboard} setShowDashboard={setShowDashboard} />
      <OpenSourceSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default App;
