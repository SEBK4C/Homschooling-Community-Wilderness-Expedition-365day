import React, { useState } from 'react';

const ProjectTrackerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedWP, setSelectedWP] = useState(null);

  const workPackages = [
    { id: 'WP1', name: 'Site Selection', lead: 'GIS Lead', agent: 'gis-scout', weeks: '1-12', phase: 1, color: '#3B82F6' },
    { id: 'WP2', name: 'Legal & Regulatory', lead: 'Legal Lead', agent: 'legal-navigator', weeks: '4-20', phase: 2, color: '#8B5CF6' },
    { id: 'WP3', name: 'Financial Model', lead: 'Finance Lead', agent: 'finance-analyst', weeks: '1-12', phase: 1, color: '#10B981' },
    { id: 'WP4', name: 'Infrastructure', lead: 'Engineer', agent: 'infrastructure-engineer', weeks: '8-22', phase: 2, color: '#F59E0B' },
    { id: 'WP5', name: 'Operations', lead: 'Ops Lead', agent: 'logistics-planner', weeks: '8-22', phase: 2, color: '#EF4444' },
    { id: 'WP6', name: 'Education', lead: 'Education Dir', agent: 'education-curator', weeks: '12-28', phase: 3, color: '#EC4899' },
    { id: 'WP7', name: 'Community', lead: 'Community Lead', agent: 'community-builder', weeks: '12-26', phase: 3, color: '#06B6D4' },
    { id: 'WP8', name: 'Safety', lead: 'Safety Officer', agent: 'safety-officer', weeks: '8-20', phase: 2, color: '#DC2626' },
    { id: 'WP9', name: 'Technology', lead: 'Tech Lead', agent: 'tech-ops', weeks: '1-10', phase: 1, color: '#6366F1' },
    { id: 'WP10', name: 'Integration', lead: 'Commander', agent: 'mission-control', weeks: '1-48', phase: 0, color: '#1F2937' },
  ];

  const phases = [
    { name: 'Foundation', weeks: '1-12', color: '#DBEAFE' },
    { name: 'Planning', weeks: '8-20', color: '#E0E7FF' },
    { name: 'Community', weeks: '12-24', color: '#FCE7F3' },
  ];

  const keyMetrics = [
    { label: 'Families', value: '20', sub: '~80 people' },
    { label: 'Duration', value: '365', sub: 'days' },
    { label: 'Budget', value: '€1.5M', sub: 'target' },
    { label: 'Agents', value: '10', sub: 'AI assistants' },
  ];

  const dependencies = [
    { from: 'WP1', to: 'WP2', label: 'Location candidates' },
    { from: 'WP1', to: 'WP4', label: 'Terrain data' },
    { from: 'WP1', to: 'WP5', label: 'Access routes' },
    { from: 'WP1', to: 'WP8', label: 'Hazard data' },
    { from: 'WP3', to: 'WP7', label: 'Pricing' },
    { from: 'WP2', to: 'WP6', label: 'Compliance' },
    { from: 'WP2', to: 'WP7', label: 'Waivers' },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Project Tracker</h1>
        <p className="text-xl text-green-100 mb-6">
          AI-Powered Mission Planning for Year-Long Wilderness Expedition
        </p>
        <div className="grid grid-cols-4 gap-4">
          {keyMetrics.map((metric, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold">{metric.value}</div>
              <div className="text-green-200 text-sm">{metric.sub}</div>
              <div className="text-white/80 text-xs mt-1">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
        <p className="text-lg italic text-amber-900">
          "What if 20 families could spend a year living in the wilderness together—learning, 
          working remotely, conducting citizen science, and building genuine community?"
        </p>
      </div>

      {/* System Architecture */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">System Architecture</h2>
        <div className="space-y-4">
          {/* Human Layer */}
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="text-sm font-semibold text-blue-700 mb-3">HUMAN LEADERSHIP TEAM (10 Roles)</div>
            <div className="grid grid-cols-5 gap-2">
              {['Mission Commander', 'GIS Lead', 'Legal Lead', 'Finance Lead', 'Engineer', 
                'Ops Lead', 'Education Dir', 'Community Lead', 'Safety Officer', 'Tech Lead'].map((role, i) => (
                <div key={i} className="bg-white rounded-lg p-2 text-center text-xs font-medium text-gray-700 shadow-sm">
                  {role}
                </div>
              ))}
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center">
            <div className="text-gray-400 text-2xl">↕️</div>
          </div>
          
          {/* Agent Layer */}
          <div className="bg-purple-50 rounded-xl p-4">
            <div className="text-sm font-semibold text-purple-700 mb-3">AI AGENT LAYER (10 Specialists)</div>
            <div className="grid grid-cols-5 gap-2">
              {workPackages.map((wp, i) => (
                <div 
                  key={i} 
                  className="rounded-lg p-2 text-center text-xs font-medium text-white shadow-sm cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: wp.color }}
                  onClick={() => setSelectedWP(wp)}
                >
                  {wp.agent}
                </div>
              ))}
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center">
            <div className="text-gray-400 text-2xl">↕️</div>
          </div>
          
          {/* Research Tools */}
          <div className="bg-gray-100 rounded-xl p-4">
            <div className="text-sm font-semibold text-gray-700 mb-3">RESEARCH TOOLS</div>
            <div className="grid grid-cols-4 gap-2">
              {['Web Search', 'Perplexity Deep Research', 'Multi-Tier Research', 'Apple Notes'].map((tool, i) => (
                <div key={i} className="bg-white rounded-lg p-2 text-center text-xs font-medium text-gray-600 shadow-sm">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Work Package Timeline</h2>
        
        {/* Timeline Header */}
        <div className="flex mb-2">
          <div className="w-32 text-xs font-semibold text-gray-500">Work Package</div>
          <div className="flex-1 flex">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="flex-1 text-center text-xs text-gray-400">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        
        {/* Phase Backgrounds */}
        <div className="flex mb-4">
          <div className="w-32"></div>
          <div className="flex-1 flex h-6">
            <div className="bg-blue-100 rounded-l" style={{ width: '50%' }}>
              <span className="text-xs text-blue-600 p-1">Foundation</span>
            </div>
            <div className="bg-purple-100" style={{ width: '33%' }}>
              <span className="text-xs text-purple-600 p-1">Planning</span>
            </div>
            <div className="bg-pink-100 rounded-r" style={{ width: '17%' }}>
              <span className="text-xs text-pink-600 p-1">Community</span>
            </div>
          </div>
        </div>
        
        {/* Work Package Bars */}
        <div className="space-y-2">
          {workPackages.filter(wp => wp.id !== 'WP10').map((wp) => {
            const [start, end] = wp.weeks.split('-').map(Number);
            const leftPercent = ((start - 1) / 24) * 100;
            const widthPercent = ((end - start + 1) / 24) * 100;
            
            return (
              <div key={wp.id} className="flex items-center">
                <div className="w-32 text-xs font-medium text-gray-700 truncate pr-2">
                  {wp.id}: {wp.name}
                </div>
                <div className="flex-1 relative h-6">
                  <div 
                    className="absolute h-full rounded-full cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
                    style={{ 
                      left: `${leftPercent}%`, 
                      width: `${widthPercent}%`,
                      backgroundColor: wp.color 
                    }}
                    onClick={() => setSelectedWP(wp)}
                  >
                    <span className="text-xs text-white font-medium">{wp.agent}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Integration bar (WP10) */}
        <div className="flex items-center mt-4 pt-4 border-t">
          <div className="w-32 text-xs font-medium text-gray-700">WP10: Integration</div>
          <div className="flex-1 relative h-6">
            <div 
              className="absolute h-full rounded-full bg-gray-800 flex items-center justify-center"
              style={{ left: '0%', width: '100%' }}
            >
              <span className="text-xs text-white font-medium">mission-control (continuous)</span>
            </div>
          </div>
        </div>
        
        {/* Decision Gates */}
        <div className="flex items-center mt-6 pt-4 border-t">
          <div className="w-32 text-xs font-bold text-gray-700">Decision Gates</div>
          <div className="flex-1 relative h-8">
            <div className="absolute flex flex-col items-center" style={{ left: '50%', transform: 'translateX(-50%)' }}>
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-green-500"></div>
              <span className="text-xs text-green-700 font-semibold">Site Selection</span>
            </div>
            <div className="absolute flex flex-col items-center" style={{ left: '83%', transform: 'translateX(-50%)' }}>
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-blue-500"></div>
              <span className="text-xs text-blue-700 font-semibold">Design Complete</span>
            </div>
            <div className="absolute flex flex-col items-center" style={{ left: '100%', transform: 'translateX(-50%)' }}>
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-purple-500"></div>
              <span className="text-xs text-purple-700 font-semibold">Launch Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDependencies = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Work Package Dependencies</h2>
        
        {/* Visual dependency graph */}
        <div className="relative">
          {/* Phase containers */}
          <div className="grid grid-cols-3 gap-4">
            {/* Phase 1 */}
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-sm font-bold text-blue-700 mb-3">Phase 1: Foundation</div>
              <div className="space-y-2">
                {workPackages.filter(wp => wp.phase === 1).map(wp => (
                  <div 
                    key={wp.id}
                    className="rounded-lg p-3 text-white text-sm font-medium cursor-pointer hover:opacity-80"
                    style={{ backgroundColor: wp.color }}
                    onClick={() => setSelectedWP(wp)}
                  >
                    <div className="font-bold">{wp.id}</div>
                    <div className="text-xs opacity-90">{wp.name}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Phase 2 */}
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="text-sm font-bold text-purple-700 mb-3">Phase 2: Planning</div>
              <div className="space-y-2">
                {workPackages.filter(wp => wp.phase === 2).map(wp => (
                  <div 
                    key={wp.id}
                    className="rounded-lg p-3 text-white text-sm font-medium cursor-pointer hover:opacity-80"
                    style={{ backgroundColor: wp.color }}
                    onClick={() => setSelectedWP(wp)}
                  >
                    <div className="font-bold">{wp.id}</div>
                    <div className="text-xs opacity-90">{wp.name}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Phase 3 */}
            <div className="bg-pink-50 rounded-xl p-4">
              <div className="text-sm font-bold text-pink-700 mb-3">Phase 3: Community</div>
              <div className="space-y-2">
                {workPackages.filter(wp => wp.phase === 3).map(wp => (
                  <div 
                    key={wp.id}
                    className="rounded-lg p-3 text-white text-sm font-medium cursor-pointer hover:opacity-80"
                    style={{ backgroundColor: wp.color }}
                    onClick={() => setSelectedWP(wp)}
                  >
                    <div className="font-bold">{wp.id}</div>
                    <div className="text-xs opacity-90">{wp.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Dependency list */}
          <div className="mt-6 pt-4 border-t">
            <div className="text-sm font-bold text-gray-700 mb-3">Key Dependencies</div>
            <div className="grid grid-cols-2 gap-2">
              {dependencies.map((dep, i) => (
                <div key={i} className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
                  <span className="font-medium text-gray-800">{dep.from}</span>
                  <span className="mx-2">→</span>
                  <span className="font-medium text-gray-800">{dep.to}</span>
                  <span className="text-xs text-gray-500 ml-2">({dep.label})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Integration WP */}
      <div className="bg-gray-800 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-2xl">🎯</div>
          <div>
            <div className="font-bold text-lg">WP10: Integration & Mission Control</div>
            <div className="text-gray-300 text-sm">Continuous coordination across all work packages</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-sm font-medium">Weekly Briefings</div>
            <div className="text-xs text-gray-300">Synthesized status for leadership</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-sm font-medium">Decision Packages</div>
            <div className="text-xs text-gray-300">Cross-WP analysis for key decisions</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-sm font-medium">Risk Aggregation</div>
            <div className="text-xs text-gray-300">Master risk register maintenance</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBudget = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Budget Overview</h2>
        
        {/* Budget Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <div className="text-sm text-green-600 font-medium">Conservative</div>
            <div className="text-3xl font-bold text-green-700">€1.14M</div>
            <div className="text-xs text-green-600">€14,250/person</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center border-2 border-blue-300">
            <div className="text-sm text-blue-600 font-medium">Target</div>
            <div className="text-3xl font-bold text-blue-700">€1.49M</div>
            <div className="text-xs text-blue-600">€18,625/person</div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 text-center">
            <div className="text-sm text-amber-600 font-medium">Maximum</div>
            <div className="text-3xl font-bold text-amber-700">€1.96M</div>
            <div className="text-xs text-amber-600">€24,438/person</div>
          </div>
        </div>
        
        {/* Budget Breakdown */}
        <div className="space-y-3">
          {[
            { name: 'Pre-Launch', low: 120, mid: 175, high: 255, color: '#3B82F6' },
            { name: 'Infrastructure', low: 200, mid: 290, high: 425, color: '#10B981' },
            { name: 'Operations', low: 700, mid: 850, high: 1020, color: '#F59E0B' },
            { name: 'Contingency', low: 120, mid: 175, high: 255, color: '#6B7280' },
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="w-32 text-sm font-medium text-gray-700">{item.name}</div>
              <div className="flex-1 relative h-8 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full rounded-full flex items-center justify-end pr-2"
                  style={{ 
                    width: `${(item.mid / 1020) * 100}%`,
                    backgroundColor: item.color 
                  }}
                >
                  <span className="text-xs text-white font-medium">€{item.mid}k</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Comparables */}
        <div className="mt-6 pt-4 border-t">
          <div className="text-sm font-bold text-gray-700 mb-3">Market Comparables</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-sm font-medium text-gray-800">NOLS Semester</div>
              <div className="text-xs text-gray-500">$15,000-20,000 / 3 months</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-sm font-medium text-gray-800">Wilderness Therapy</div>
              <div className="text-xs text-gray-500">$50,000+ / 2-3 months</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-sm font-medium text-gray-800">Gap Year Programs</div>
              <div className="text-xs text-gray-500">$25,000-40,000 / year</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-sm font-medium text-gray-800">International School</div>
              <div className="text-xs text-gray-500">$30,000-50,000 / year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navigation */}
      <div className="flex gap-2 mb-6">
        {['overview', 'timeline', 'dependencies', 'budget'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab 
                ? 'bg-green-700 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'timeline' && renderTimeline()}
      {activeTab === 'dependencies' && renderDependencies()}
      {activeTab === 'budget' && renderBudget()}
      
      {/* Selected WP Modal */}
      {selectedWP && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6" onClick={() => setSelectedWP(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-md w-full" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: selectedWP.color }}
              >
                {selectedWP.id}
              </div>
              <div>
                <div className="font-bold text-lg text-gray-800">{selectedWP.name}</div>
                <div className="text-sm text-gray-500">Weeks {selectedWP.weeks}</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Human Lead:</span>
                <span className="font-medium text-gray-800">{selectedWP.lead}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">AI Agent:</span>
                <span className="font-medium text-gray-800">{selectedWP.agent}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Phase:</span>
                <span className="font-medium text-gray-800">
                  {selectedWP.phase === 0 ? 'Continuous' : `Phase ${selectedWP.phase}`}
                </span>
              </div>
            </div>
            <button 
              onClick={() => setSelectedWP(null)}
              className="mt-4 w-full py-2 bg-gray-100 rounded-lg text-gray-600 font-medium hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTrackerDashboard;
