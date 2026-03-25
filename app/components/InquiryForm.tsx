'use client';

import { useState, FormEvent } from 'react';

interface InquiryFormProps {
  formType: 'office' | 'coworking' | 'event' | 'general';
  title?: string;
}

export default function InquiryForm({ formType, title = 'Send Your Inquiry' }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    spaceType: '',
    numberOfPeople: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        preferredDate: '',
        spaceType: '',
        numberOfPeople: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-black mb-6 uppercase">{title}</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green/10 border border-green rounded-lg">
          <p className="text-green font-medium">
            Thank you! We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              placeholder="Your Company"
            />
          </div>

          {(formType === 'office' || formType === 'coworking') && (
            <div>
              <label htmlFor="spaceType" className="block text-sm font-medium text-black mb-2">
                Space Type *
              </label>
              <select
                id="spaceType"
                name="spaceType"
                value={formData.spaceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              >
                <option value="">Select space type</option>
                {formType === 'office' ? (
                  <>
                    <option value="private-office">Private Office</option>
                    <option value="team-suite">Team Suite</option>
                    <option value="executive-suite">Executive Suite</option>
                    <option value="custom">Custom Space</option>
                  </>
                ) : (
                  <>
                    <option value="hot-desk">Hot Desk</option>
                    <option value="dedicated-desk">Dedicated Desk</option>
                    <option value="private-office">Private Office</option>
                    <option value="meeting-room">Meeting Room</option>
                  </>
                )}
              </select>
            </div>
          )}

          {formType === 'event' && (
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-black mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              />
            </div>
          )}

          <div>
            <label htmlFor="numberOfPeople" className="block text-sm font-medium text-black mb-2">
              Number of People
            </label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              min="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              placeholder="5"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-plum transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed uppercase tracking-wide"
        >
          {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
        </button>

        <p className="text-sm text-gray-600 text-center">
          * Required fields. We&apos;ll respond to your inquiry within 24 hours.
        </p>
      </form>
    </div>
  );
}
