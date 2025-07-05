import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiExternalLink } = FiIcons;

const PreviewModal = ({ website, onClose }) => {
  const { files, brandConfig } = website;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Website Preview
            </h3>
            <p className="text-sm text-gray-600">
              {brandConfig.offer.offerName} - {brandConfig.community}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiX} className="text-gray-500" />
          </button>
        </div>

        {/* Preview Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="space-y-6">
            {/* Website Preview */}
            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-medium">Live Website Preview</h4>
                <SafeIcon icon={FiExternalLink} className="text-gray-400" />
              </div>
              
              {/* Mock browser */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                <div className="bg-gray-700 p-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-600 rounded px-3 py-1 text-xs text-gray-300">
                    https://your-website.com
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: brandConfig.brand.colors.primary }}
                      ></div>
                      <span className="font-bold">{brandConfig.brand.name}</span>
                    </div>
                    <div className="flex space-x-4 text-sm">
                      <span>Features</span>
                      <span>Success Stories</span>
                      <span>Get Started</span>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center py-8">
                    <h1 className="text-2xl font-bold mb-2">
                      {brandConfig.offer.customizations.heroTitle || 
                       `Transform Your ${brandConfig.offer.niche} with ${brandConfig.brand.fullName}`}
                    </h1>
                    <p className="text-gray-300 mb-4">
                      {brandConfig.offer.customizations.heroSubtitle || 
                       `Join thousands who've discovered the power of ${brandConfig.brand.brandVoice.keywords[0]}`}
                    </p>
                    <button 
                      className="px-6 py-3 rounded-lg text-white font-medium"
                      style={{ backgroundColor: brandConfig.brand.colors.accent }}
                    >
                      {brandConfig.offer.customizations.ctaText}
                    </button>
                  </div>

                  {/* Features Preview */}
                  <div className="grid grid-cols-3 gap-4 py-4">
                    {[
                      { icon: '🚀', title: 'Complete System', desc: 'Step-by-step blueprint' },
                      { icon: '💰', title: 'Proven Results', desc: 'Million-dollar strategies' },
                      { icon: '🎯', title: 'Expert Support', desc: 'Community access' }
                    ].map((feature, index) => (
                      <div key={index} className="text-center p-3 bg-gray-700 rounded-lg">
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h3 className="font-medium text-sm">{feature.title}</h3>
                        <p className="text-xs text-gray-400">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Colors */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Brand Colors</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(brandConfig.brand.colors).map(([name, color]) => (
                  <div key={name} className="text-center">
                    <div 
                      className="w-16 h-16 rounded-lg mx-auto mb-2 border border-gray-200"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="text-sm font-medium text-gray-900 capitalize">{name}</div>
                    <div className="text-xs text-gray-500">{color}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Assets Preview */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Marketing Assets</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-2">Social Media Copy</h5>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    🚀 JUST DROPPED: {brandConfig.offer.offerName}! Ready to transform your {brandConfig.offer.niche} game?...
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-2">Email Sequence</h5>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    Subject: 🚨 {brandConfig.offer.offerName} - Launch Week Special...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PreviewModal;