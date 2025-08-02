import React, { useState, useEffect } from 'react'
import {
  ChevronRight,
  CheckCircle,
  Star,
  Upload,
  BarChart3,
  Target,
  Users,
  Mail,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react'

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <BarChart3 className='w-8 h-8' />,
      title: 'AI-Powered Analysis',
      description:
        'Advanced algorithms scan your CV for ATS compatibility and keyword optimization'
    },
    {
      icon: <Target className='w-8 h-8' />,
      title: 'Score & Recommendations',
      description:
        'Get instant feedback with actionable suggestions to improve your CV score'
    },
    {
      icon: <Upload className='w-8 h-8' />,
      title: 'Easy Upload',
      description:
        'Simply drag and drop your CV in PDF or Word format for instant analysis'
    }
  ]

  const benefits = [
    'Beat ATS filters and reach human recruiters',
    'Increase interview callback rates by up to 300%',
    'Optimize keywords for specific job descriptions',
    'Improve CV formatting for better readability',
    'Stand out from thousands of other applicants'
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'Tech Corp',
      content:
        'This tool helped me land 5 interviews in 2 weeks! My CV score went from 45% to 92%.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Marketing Manager',
      company: 'Growth Inc',
      content:
        "Finally understood why my applications weren't getting through. Game-changer!",
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Data Analyst',
      company: 'Analytics Pro',
      content:
        'The keyword suggestions were spot-on. Got my dream job within a month!',
      rating: 5
    }
  ]

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email)
      setEmail('')
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden'>
      {/* Animated Background */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 opacity-10'>
          <div className='w-full h-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse'></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='relative z-10 p-6'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
            ATS CV Calculator
          </div>
          <a
            href='https://fakhirahmedkhan.github.io/ATS-Calculator/'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105'
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative z-10 pt-20 pb-32'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className='text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight'>
              Beat the ATS,
              <br />
              Land Your Dream Job
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Our AI-powered CV calculator analyzes your resume for ATS
              compatibility and gives you the exact improvements needed to get
              past automated filters.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a
                href='https://fakhirahmedkhan.github.io/ATS-Calculator/'
                target='_blank'
                rel='noopener noreferrer'
                className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center'
              >
                Calculate Your CV Score Now
                <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </a>
              <p className='text-gray-400'>Free • No registration required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className='relative z-10 py-20 bg-black/20 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
            How It Works
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105'
              >
                <div className='text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
                <p className='text-gray-300'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Benefits */}
      <section className='relative z-10 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                Why Choose Our ATS Calculator?
              </h2>
              <div className='space-y-4'>
                {benefits.map((benefit, index) => (
                  <div key={index} className='flex items-start space-x-3'>
                    <CheckCircle className='w-6 h-6 text-green-400 mt-1 flex-shrink-0' />
                    <p className='text-lg text-gray-300'>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='relative'>
              <div className='bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl p-8 border border-purple-500/20'>
                <div className='mb-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm text-gray-400'>
                      ATS Compatibility
                    </span>
                    <span className='text-lg font-bold text-green-400'>
                      92%
                    </span>
                  </div>
                  <div className='w-full bg-gray-700 rounded-full h-3'>
                    <div
                      className='bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full animate-pulse'
                      style={{ width: '92%' }}
                    ></div>
                  </div>
                </div>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Keywords</span>
                    <span className='text-cyan-400'>Excellent</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Formatting</span>
                    <span className='text-green-400'>Perfect</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Structure</span>
                    <span className='text-purple-400'>Very Good</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='relative z-10 py-20 bg-black/20 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
            Success Stories
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm border border-purple-500/20'
              >
                <div className='flex mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-5 h-5 text-yellow-400 fill-current'
                    />
                  ))}
                </div>
                <p className='text-gray-300 mb-4 italic'>
                  "{testimonial.content}"
                </p>
                <div>
                  <p className='font-semibold'>{testimonial.name}</p>
                  <p className='text-sm text-gray-400'>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative z-10 py-20'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
            Ready to Boost Your CV Score?
          </h2>
          <p className='text-xl text-gray-300 mb-8'>
            Join thousands of job seekers who've improved their interview
            chances with our ATS calculator.
          </p>
          <div className='max-w-md mx-auto'>
            <div className='flex gap-4'>
              <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter your email for free access'
                className='flex-1 px-6 py-4 rounded-full bg-slate-800/50 border border-purple-500/30 focus:border-purple-400 focus:outline-none text-white placeholder-gray-400'
              />
              <button
                onClick={handleSubmit}
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center'
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='relative z-10 py-12 bg-black/40 backdrop-blur-sm border-t border-purple-500/20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0'>
              ATS CV Calculator
            </div>
            <div className='flex space-x-6'>
              <a
                href='#'
                className='text-gray-400 hover:text-cyan-400 transition-colors'
              >
                <Twitter className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-cyan-400 transition-colors'
              >
                <Linkedin className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-cyan-400 transition-colors'
              >
                <Github className='w-6 h-6' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-cyan-400 transition-colors'
              >
                <Mail className='w-6 h-6' />
              </a>
            </div>
          </div>
          <div className='text-center text-gray-400 mt-8 pt-8 border-t border-purple-500/20'>
            <p>
              &copy; 2025 ATS CV Calculator. All rights reserved. | Privacy
              Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
