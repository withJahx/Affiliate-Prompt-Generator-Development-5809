import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUpload, FiPalette, FiType, FiImage, FiArrowRight } = FiIcons;

// Pre-configured brand settings for each community
const COMMUNITY_BRANDS = {
  'Digitally Integrated AI Lab (DCT by Cocoa Twins®)': {
    name: 'DCT',
    fullName: 'Digitally Integrated AI Lab',
    colors: {
      primary: '#8B5CF6',
      secondary: '#A855F7',
      accent: '#EC4899',
      background: '#1F2937',
      text: '#F9FAFB'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    },
    brandVoice: {
      tone: 'Professional yet approachable',
      style: 'AI-focused, innovative, empowering',
      keywords: ['AI automation', 'digital transformation', 'smart solutions', 'future-ready']
    },
    logoUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop&crop=center',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    testimonialImages: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    ]
  },
  'Digital Boss Academy (DBA)': {
    name: 'DBA',
    fullName: 'Digital Boss Academy',
    colors: {
      primary: '#EF4444',
      secondary: '#F97316',
      accent: '#FBBF24',
      background: '#111827',
      text: '#F9FAFB'
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter'
    },
    brandVoice: {
      tone: 'Bold, confident, results-driven',
      style: 'Entrepreneurial, leadership-focused, high-energy',
      keywords: ['digital empire', 'boss mindset', 'scale fast', 'dominate your niche']
    },
    logoUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center',
    heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    testimonialImages: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face'
    ]
  },
  'Royale Business Academy (RBA)': {
    name: 'RBA',
    fullName: 'Royale Business Academy',
    colors: {
      primary: '#7C3AED',
      secondary: '#A855F7',
      accent: '#F59E0B',
      background: '#1F2937',
      text: '#F9FAFB'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter'
    },
    brandVoice: {
      tone: 'Luxurious, sophisticated, exclusive',
      style: 'Premium positioning, wealth-building, elite mindset',
      keywords: ['royal treatment', 'elite strategies', 'luxury lifestyle', 'premium results']
    },
    logoUrl: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=200&fit=crop&crop=center',
    heroImage: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=1200&h=600&fit=crop',
    testimonialImages: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    ]
  },
  'AI Cash Skool': {
    name: 'AI Cash Skool',
    fullName: 'AI Cash Skool',
    colors: {
      primary: '#10B981',
      secondary: '#059669',
      accent: '#34D399',
      background: '#111827',
      text: '#F9FAFB'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    },
    brandVoice: {
      tone: 'Direct, money-focused, practical',
      style: 'Cash-generating, AI-powered, no-nonsense',
      keywords: ['AI cash systems', 'automated income', 'profit maximization', 'money-making AI']
    },
    logoUrl: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200&h=200&fit=crop&crop=center',
    heroImage: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=1200&h=600&fit=crop',
    testimonialImages: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face'
    ]
  },
  'Business In A Box (BIAB)': {
    name: 'BIAB',
    fullName: 'Business In A Box',
    colors: {
      primary: '#3B82F6',
      secondary: '#1D4ED8',
      accent: '#60A5FA',
      background: '#1F2937',
      text: '#F9FAFB'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    },
    brandVoice: {
      tone: 'Complete, systematic, ready-to-go',
      style: 'All-in-one solutions, comprehensive, plug-and-play',
      keywords: ['complete system', 'ready-made business', 'turnkey solution', 'everything included']
    },
    logoUrl: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&h=200&fit=crop&crop=center',
    heroImage: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=600&fit=crop',
    testimonialImages: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    ]
  },
  'Digital Wealth Academy (DWA)': {
    name: 'DWA',
    fullName: 'Digital Wealth Academy',
    colors: {
      primary: '#059669',
      secondary: '#047857',
      accent: '#10B981',
      background: '#111827',
      text: '#F9FAFB'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    },
    brandVoice: {
      tone: 'Wealth-building, educational, strategic',
      style: 'Financial freedom focused, long-term thinking, wealth mindset',
      keywords: ['digital wealth', 'financial freedom', 'wealth building', 'passive income streams']
    },
    logoUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop&crop=center',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    testimonialImages: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face'
    ]
  },
  'SWC': {
    name: 'SWC',
    fullName: 'SWC',
    colors: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#A855F7',
      background: '#1F2937',
      text: '#F9FAFB'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    },
    brandVoice: {
      tone: 'Community-focused, supportive, growth-oriented',
      style: 'Collaborative, empowering, success-driven',
      keywords: ['community success', 'mutual growth', 'shared wins', 'collective achievement']
    },
    logoUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop&crop=center',
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
    testimonialImages: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    ]
  }
};

const BrandConfigurator = ({ onConfigured }) => {
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [formData, setFormData] = useState({
    offerName: '',
    niche: '',
    affiliateLink: '',
    launchType: '',
    customizations: {
      heroTitle: '',
      heroSubtitle: '',
      ctaText: 'Get Started Now',
      testimonials: []
    }
  });

  const handleCommunityChange = (community) => {
    setSelectedCommunity(community);
    const brandData = COMMUNITY_BRANDS[community];
    if (brandData) {
      setFormData(prev => ({
        ...prev,
        customizations: {
          ...prev.customizations,
          heroTitle: `Transform Your ${prev.niche || 'Business'} with ${brandData.fullName}`,
          heroSubtitle: `Join thousands who've already discovered the power of ${brandData.brandVoice.keywords[0]}`
        }
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const brandConfig = {
      community: selectedCommunity,
      brand: COMMUNITY_BRANDS[selectedCommunity],
      offer: formData,
      timestamp: new Date().toISOString()
    };

    onConfigured(brandConfig);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Configure Your Brand
          </h2>
          <p className="text-gray-300 text-lg">
            Set up your community branding and offer details to generate a fully customized website.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Community Selection */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-white">
              Select Your Community
            </label>
            <select
              value={selectedCommunity}
              onChange={(e) => handleCommunityChange(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Choose your community...</option>
              {Object.keys(COMMUNITY_BRANDS).map(community => (
                <option key={community} value={community} className="bg-gray-800">
                  {community}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Preview */}
          {selectedCommunity && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-white/5 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Brand Preview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Color Palette</h4>
                  <div className="flex space-x-2">
                    {Object.entries(COMMUNITY_BRANDS[selectedCommunity].colors).map(([name, color]) => (
                      <div
                        key={name}
                        className="w-8 h-8 rounded-full border-2 border-white/20"
                        style={{ backgroundColor: color }}
                        title={`${name}: ${color}`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Brand Voice</h4>
                  <p className="text-sm text-gray-400">
                    {COMMUNITY_BRANDS[selectedCommunity].brandVoice.tone}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Offer Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Offer Name
              </label>
              <input
                type="text"
                value={formData.offerName}
                onChange={(e) => setFormData(prev => ({ ...prev, offerName: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., AI Profit Mastery"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Your Niche
              </label>
              <input
                type="text"
                value={formData.niche}
                onChange={(e) => setFormData(prev => ({ ...prev, niche: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., AI Automation"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                Your Affiliate Link
              </label>
              <input
                type="url"
                value={formData.affiliateLink}
                onChange={(e) => setFormData(prev => ({ ...prev, affiliateLink: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="https://your-affiliate-link.com"
                required
              />
              <p className="text-xs text-gray-400 mt-1">
                Enter your complete affiliate link (including https://)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Launch Type
              </label>
              <select
                value={formData.launchType}
                onChange={(e) => setFormData(prev => ({ ...prev, launchType: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select launch type...</option>
                <option value="Website Funnel">Website Funnel</option>
                <option value="Product Store">Product Store</option>
                <option value="Email Series">Email Series</option>
                <option value="Link-in-Bio">Link-in-Bio</option>
                <option value="Course/Challenge">Course/Challenge</option>
              </select>
            </div>
          </div>

          {/* Customizations */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Website Customizations</h3>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Hero Title (Optional)
              </label>
              <input
                type="text"
                value={formData.customizations.heroTitle}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  customizations: { ...prev.customizations, heroTitle: e.target.value }
                }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Leave blank for auto-generated title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Hero Subtitle (Optional)
              </label>
              <textarea
                value={formData.customizations.heroSubtitle}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  customizations: { ...prev.customizations, heroSubtitle: e.target.value }
                }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={3}
                placeholder="Leave blank for auto-generated subtitle"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Call-to-Action Button Text
              </label>
              <input
                type="text"
                value={formData.customizations.ctaText}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  customizations: { ...prev.customizations, ctaText: e.target.value }
                }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Get Started Now"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              <span>Generate Branded Website</span>
              <SafeIcon icon={FiArrowRight} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrandConfigurator;