import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './common/SafeIcon';
import BrandConfigurator from './components/BrandConfigurator';
import WebsiteGenerator from './components/WebsiteGenerator';
import PreviewModal from './components/PreviewModal';

const { FiRocket, FiSettings, FiEye, FiDownload, FiCode } = FiIcons;

function App() {
  const [currentStep, setCurrentStep] = useState('configure');
  const [brandConfig, setBrandConfig] = useState(null);
  const [generatedWebsite, setGeneratedWebsite] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const steps = [
    { id: 'configure', title: 'Brand Configuration', icon: FiSettings },
    { id: 'generate', title: 'Website Generation', icon: FiCode },
    { id: 'preview', title: 'Preview & Download', icon: FiEye }
  ];

  const handleBrandConfigured = (config) => {
    setBrandConfig(config);
    setCurrentStep('generate');
  };

  const handleWebsiteGenerated = (website) => {
    setGeneratedWebsite(website);
    setCurrentStep('preview');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiRocket} className="text-2xl text-purple-400" />
              <h1 className="text-xl font-bold text-white">
                Community Branded Website Generator
              </h1>
            </div>
            
            {/* Progress Steps */}
            <div className="hidden md:flex items-center space-x-8">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center space-x-2 ${
                    currentStep === step.id
                      ? 'text-purple-400'
                      : steps.findIndex(s => s.id === currentStep) > index
                      ? 'text-green-400'
                      : 'text-gray-400'
                  }`}
                >
                  <SafeIcon icon={step.icon} className="text-lg" />
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {currentStep === 'configure' && (
            <motion.div
              key="configure"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <BrandConfigurator onConfigured={handleBrandConfigured} />
            </motion.div>
          )}

          {currentStep === 'generate' && (
            <motion.div
              key="generate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <WebsiteGenerator 
                brandConfig={brandConfig} 
                onGenerated={handleWebsiteGenerated}
              />
            </motion.div>
          )}

          {currentStep === 'preview' && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    🎉 Your Branded Website is Ready!
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Preview your fully customized affiliate website and download the complete package.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowPreview(true)}
                    className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <SafeIcon icon={FiEye} />
                    <span>Preview Website</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      // Download functionality will be implemented
                      alert('Download functionality coming soon!');
                    }}
                    className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <SafeIcon icon={FiDownload} />
                    <span>Download Package</span>
                  </button>
                </div>

                {generatedWebsite && (
                  <div className="mt-8 p-6 bg-black/20 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Package Contents:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                      <div>
                        <h4 className="font-medium text-white mb-2">Website Files:</h4>
                        <ul className="space-y-1">
                          <li>• index.html (Main landing page)</li>
                          <li>• styles.css (Custom branded styles)</li>
                          <li>• script.js (Interactive functionality)</li>
                          <li>• images/ (All brand assets)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Marketing Assets:</h4>
                        <ul className="space-y-1">
                          <li>• Social media templates</li>
                          <li>• Email swipe copy</li>
                          <li>• Launch checklist</li>
                          <li>• Setup instructions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Preview Modal */}
      {showPreview && generatedWebsite && (
        <PreviewModal
          website={generatedWebsite}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
}

export default App;