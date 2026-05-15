import { useState, useEffect } from 'react'
import './App.css'

interface ContentData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  features: Array<{ title: string; description: string }>;
}

function App() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/content');
      const data = await res.json();
      setContent(data);
    } catch (err) {
      console.error('Error fetching content:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (key: string, value: any) => {
    try {
      const res = await fetch('http://localhost:5000/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value })
      });
      if (res.ok) {
        setMessage('Content updated successfully!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      setMessage('Update failed');
    }
  };

  if (loading) return <div className="admin-container">Loading...</div>;
  if (!content) return <div className="admin-container">Error loading content</div>;

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>BexaVolt Admin Panel</h1>
        {message && <div className="toast">{message}</div>}
      </header>

      <main className="admin-grid">
        {/* Hero Section Editor */}
        <section className="editor-card">
          <h2>Hero Section</h2>
          <div className="form-group">
            <label>Title</label>
            <textarea 
              value={content.hero.title} 
              onChange={(e) => setContent({...content, hero: {...content.hero, title: e.target.value}})}
            />
          </div>
          <div className="form-group">
            <label>Subtitle</label>
            <input 
              type="text" 
              value={content.hero.subtitle} 
              onChange={(e) => setContent({...content, hero: {...content.hero, subtitle: e.target.value}})}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={content.hero.description} 
              onChange={(e) => setContent({...content, hero: {...content.hero, description: e.target.value}})}
            />
          </div>
          <button onClick={() => handleUpdate('hero', content.hero)} className="save-btn">Save Hero</button>
        </section>

        {/* Features Section Editor */}
        <section className="editor-card">
          <h2>Features</h2>
          {content.features.map((feature, idx) => (
            <div key={idx} className="feature-item">
              <input 
                type="text" 
                value={feature.title} 
                onChange={(e) => {
                  const newFeatures = [...content.features];
                  newFeatures[idx].title = e.target.value;
                  setContent({...content, features: newFeatures});
                }}
              />
              <input 
                type="text" 
                value={feature.description} 
                onChange={(e) => {
                  const newFeatures = [...content.features];
                  newFeatures[idx].description = e.target.value;
                  setContent({...content, features: newFeatures});
                }}
              />
            </div>
          ))}
          <button onClick={() => handleUpdate('features', content.features)} className="save-btn">Save Features</button>
        </section>
      </main>
    </div>
  )
}

export default App
