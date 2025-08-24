import React, { useState } from 'react';
import benchmarks from '../marketing_benchmarks.json';
import '../App.css';

const steps = [
  'Brand',
  'Industry',
  'Objective',
  'Platforms',
  'Budget',
];

const industries = Array.from(new Set(benchmarks.map(b => b.industry))).sort();
// Removed unused platformsList

const getObjectives = (industry) => {
  if (!industry) return [];
  return Array.from(new Set(benchmarks.filter(b => b.industry === industry).map(b => b.objective)));
};
const getPlatforms = (industry, objective) => {
  if (!industry || !objective) return [];
  return Array.from(new Set(benchmarks.filter(b => b.industry === industry && b.objective === objective).map(b => b.platform)));
};

function allocateBudget({ industry, objective, platforms, budget }) {
  // Filter benchmarks for selected industry, objective, and platforms
  const filtered = benchmarks.filter(b =>
    b.industry === industry &&
    b.objective.toLowerCase().includes(objective.toLowerCase()) &&
    platforms.includes(b.platform)
  );
  if (filtered.length === 0) return [];

  // For each option, estimate conversions per $1 spent
  const perf = filtered.map(b => {
    // Use CPC and conversion_rate if available, else CPM
    let conversionsPerDollar = 0;
    if (b.CPC && b.conversion_rate) {
      const clicksPerDollar = 1 / b.CPC;
      conversionsPerDollar = clicksPerDollar * b.conversion_rate;
    } else if (b.CPM && b.conversion_rate) {
      const impressionsPerDollar = 1000 / b.CPM;
      // Assume 1% CTR if not given, then conversion rate
      const clicksPerDollar = impressionsPerDollar * 0.01;
      conversionsPerDollar = clicksPerDollar * b.conversion_rate;
    }
    return { ...b, conversionsPerDollar };
  });

  // Sort by conversionsPerDollar DESC
  perf.sort((a, b) => b.conversionsPerDollar - a.conversionsPerDollar);

  // Allocate budget greedily to best performers, with a minimum per option
  let remaining = budget;
  const minPerOption = Math.max(100, Math.floor(budget * 0.05));
  const plan = perf.map((b, i) => {
    // Weighted allocation: best gets most, but all get at least minPerOption
    let weight = (perf.length - i) / perf.length;
    let alloc = Math.round((budget * weight) / perf.length);
    alloc = Math.max(alloc, minPerOption);
    if (alloc > remaining) alloc = remaining;
    remaining -= alloc;
    if (i === perf.length - 1) alloc += remaining; // last gets the rest
    // Estimate results
    let impressions = b.CPM ? Math.round((alloc / b.CPM) * 1000) : null;
    let clicks = b.CPC ? Math.round(alloc / b.CPC) : null;
    let conversions = clicks && b.conversion_rate ? Math.round(clicks * b.conversion_rate) : null;
    return {
      platform: b.platform,
      format: b.format,
      placement: b.placement,
      spend: alloc,
      CPM: b.CPM,
      CPC: b.CPC,
      conversions,
      impressions,
      objective: b.objective,
    };
  });
  // Sort by platform, then spend desc
  plan.sort((a, b) => a.platform.localeCompare(b.platform) || b.spend - a.spend);
  return plan;
}

function BudgetAllocator() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    brand: '',
    industry: '',
    objective: '',
    platforms: [],
    budget: '',
  });
  const [plan, setPlan] = useState(null);
  const [planError, setPlanError] = useState("");
  const [groupBy, setGroupBy] = useState('platform');
  const percent = Math.round((step / (steps.length - 1)) * 100);

  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="App">
      <div className="gradient-bg">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo-text" style={{ textDecoration: 'none' }}>adsperform</a>
        </div>
      </nav>
      <section className="hero" style={{ minHeight: 'auto', padding: '120px 2rem 40px' }}>
        <div style={{ width: '90vw', maxWidth: 1400, margin: '0 auto' }}>
          {!plan && <>
            <div className="budget-stepper">
              <div style={{ height: 8, background: '#222', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
                <div style={{ width: percent + '%', height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)', transition: 'width 0.3s' }} />
              </div>
              <div className="budget-step-label">{steps[step]}</div>
            </div>
            {/* Step-by-step form UI skeleton */}
            {step === 0 && (
              <div>
                <label className="form-label">What is your brand?</label>
                <input className="email-input" type="text" value={form.brand} onChange={e => setForm(f => ({ ...f, brand: e.target.value }))} placeholder="Brand name" />
              </div>
            )}
            {step === 1 && (
              <div>
                <label className="form-label">Select your industry</label>
                <select className="email-input" value={form.industry} onChange={e => setForm(f => ({ ...f, industry: e.target.value, objective: '', platforms: [] }))}>
                  <option value="">Choose industry...</option>
                  {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
              </div>
            )}
            {step === 2 && (
              <div>
                <label className="form-label">What is your main objective?</label>
                <select className="email-input" value={form.objective} onChange={e => setForm(f => ({ ...f, objective: e.target.value, platforms: [] }))}>
                  <option value="">Choose objective...</option>
                  {getObjectives(form.industry).map(obj => <option key={obj} value={obj}>{obj}</option>)}
                </select>
              </div>
            )}
            {step === 3 && (
              <div>
                <label className="form-label">Which platforms do you want to use?</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  {getPlatforms(form.industry, form.objective).map(platform => (
                    <label key={platform} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <input
                        type="checkbox"
                        checked={form.platforms.includes(platform)}
                        onChange={e => {
                          setForm(f => {
                            const arr = f.platforms.includes(platform)
                              ? f.platforms.filter(p => p !== platform)
                              : [...f.platforms, platform];
                            return { ...f, platforms: arr };
                          });
                        }}
                      />
                      {platform}
                    </label>
                  ))}
                </div>
              </div>
            )}
            {step === 4 && (
              <div>
                <label className="form-label">Monthly ad budget (USD)</label>
                <input className="email-input" type="number" min="100" step="50" value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} placeholder="$5000" />
              </div>
            )}
          </>}
          {plan && (
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div style={{
                background: 'rgba(139,92,246,0.08)',
                borderRadius: 12,
                padding: '1.2rem 2rem',
                marginBottom: 24,
                color: '#fff',
                fontWeight: 500,
                fontSize: '1.05rem',
                width: '100%',
                maxWidth: 700,
                boxSizing: 'border-box',
                boxShadow: '0 2px 12px rgba(139,92,246,0.08)'
              }}>
                <div><b>Brand:</b> {form.brand || <span style={{ color: '#a3a3a3' }}>N/A</span>}</div>
                <div><b>Industry:</b> {form.industry}</div>
                <div><b>Objective:</b> {form.objective}</div>
                <div><b>Platforms:</b> {form.platforms.join(', ')}</div>
                <div><b>Budget:</b> ${form.budget}</div>
              </div>
              <h2 style={{ color: '#8b5cf6', textAlign: 'center', marginBottom: 24 }}>Recommended Budget Allocation</h2>
              <div style={{ marginBottom: 16, textAlign: 'center' }}>
                <label style={{ color: '#fff', fontWeight: 500, fontSize: 16, marginRight: 12 }}>Group by:</label>
                <select value={groupBy} onChange={e => setGroupBy(e.target.value)} style={{ fontSize: 16, padding: '0.4rem 1rem', borderRadius: 8, border: '1px solid #8b5cf6', background: '#18181b', color: '#fff' }}>
                  <option value="platform">Platform</option>
                  <option value="format">Format</option>
                  <option value="placement">Placement</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <div className="budget-table-wrapper">
                  <table className="budget-table">
                    <thead>
                      <tr>
                        <th>Platform</th>
                        <th>Format</th>
                        <th>Placement</th>
                        <th>Spend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(() => {
                        if (groupBy === 'none') {
                          return plan.map((row, i) => (
                            <tr key={i}>
                              <td>{row.platform}</td>
                              <td>{row.format}</td>
                              <td>{row.placement}</td>
                              <td>${row.spend}</td>
                            </tr>
                          ));
                        }
                        const groupVals = Array.from(new Set(plan.map(row => row[groupBy])));
                        return groupVals.map(val => {
                          const groupRows = plan.filter(row => row[groupBy] === val);
                          const total = groupRows.reduce((sum, row) => sum + row.spend, 0);
                          return [
                            <tr key={val} style={{ background: 'rgba(139,92,246,0.08)', fontWeight: 700 }}>
                              <td colSpan={3} style={{ textAlign: 'left' }}>{groupBy.charAt(0).toUpperCase() + groupBy.slice(1)}: {val}</td>
                              <td>${total}</td>
                            </tr>,
                            ...groupRows.map((row, i) => (
                              <tr key={val + '-' + i}>
                                <td>{row.platform}</td>
                                <td>{row.format}</td>
                                <td>{row.placement}</td>
                                <td>${row.spend}</td>
                              </tr>
                            ))
                          ];
                        }).flat();
                      })()}
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: 32 }}>
                <button className="btn-secondary" onClick={() => { setPlan(null); setStep(0); setPlanError(""); }}>Back to form</button>
              </div>
            </div>
          )}
          {!plan && (
            <div className="budget-btn-row">
              <button className="btn-secondary" onClick={handleBack} disabled={step === 0}>Back</button>
              {step < steps.length - 1 && (
                <button className="btn-primary" onClick={handleNext} disabled={
                  (step === 0 && !form.brand) ||
                  (step === 1 && !form.industry) ||
                  (step === 2 && !form.objective) ||
                  (step === 3 && form.platforms.length === 0)
                }>Next</button>
              )}
              {step === steps.length - 1 && (
                <>
                  <button className="btn-primary" onClick={() => {
                    console.log('Form values:', form);
                    const result = allocateBudget(form);
                    console.log('Plan result:', result);
                    if (result.length === 0) {
                      setPlanError("No plan could be generated for your selection. Please try different options or check your benchmark data.");
                      setPlan(null);
                    } else {
                      setPlan(result);
                      setPlanError("");
                    }
                  }} disabled={(!form.budget || form.budget < 100)}>
                    Generate Plan
                  </button>
                  {planError && (
                    <div style={{ color: '#f87171', marginTop: 12, fontWeight: 500 }}>{planError}</div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default BudgetAllocator; 