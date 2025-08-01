import React, { useState } from "react";
import { SignIn, SignUp, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0  border-gray-200 backdrop-blur-sm bg-white/10 rounded-lg p-5 shadow-2xl z-50 border-b ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-blue-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                <span className="hidden sm:inline">CURRENCY CONVERTER</span>
                <span className="sm:hidden">CURREX</span>
              </h3>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href="#converter" 
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 hover:bg-blue-700"
              >
                Converter
              </a>
              <a 
                href="#rates" 
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 hover:bg-blue-700"
              >
                Exchange Rates
              </a>
              <a 
                href="#history" 
                className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 hover:bg-blue-700"
              >
                History
              </a>
              
              {/* Authentication buttons for desktop */}
              <SignedOut>
                <button
                  onClick={() => {setShowSignIn(true); setShowSignUp(false);}}
                  className="text-blue-100 hover:text-white border border-blue-300 hover:border-white px-4 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => {setShowSignUp(true); setShowSignIn(false);}}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition duration-200 shadow-md"
                >
                  Sign Up
                </button>
              </SignedOut>
              
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/" 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                      userButtonPopoverCard: "shadow-xl"
                    }
                  }}
                />
              </SignedIn>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200 transition duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden backdrop-blur-sm bg-blue-700/30 border-t border-blue-300/50">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a 
                  href="#converter" 
                  className="block text-blue-100 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Converter
                </a>
                <a 
                  href="#rates" 
                  className="block text-blue-100 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Exchange Rates
                </a>
                <a 
                  href="#history" 
                  className="block text-blue-100 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  History
                </a>
                
                {/* Mobile Authentication */}
                <SignedOut>
                  <div className="pt-2 border-t border-blue-500 mt-2">
                    <button
                      onClick={() => {setShowSignIn(true); setShowSignUp(false); setIsMobileMenuOpen(false);}}
                      className="block w-full text-left text-blue-100 hover:text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-200"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {setShowSignUp(true); setShowSignIn(false); setIsMobileMenuOpen(false);}}
                      className="block w-full text-left bg-white text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition duration-200 mt-2 mx-3" 
                      style={{width: 'calc(100% - 1.5rem)'}}
                    >
                      Sign Up
                    </button>
                  </div>
                </SignedOut>
                
                <SignedIn>
                  <div className="pt-2 border-t border-blue-500 mt-2 px-3">
                    <UserButton 
                      afterSignOutUrl="/" 
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8"
                        }
                      }}
                    />
                  </div>
                </SignedIn>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modal overlays for Sign In and Sign Up */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl relative max-w-md w-full">
            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <SignIn afterSignInUrl="/" />
          </div>
        </div>
      )}

      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl relative max-w-md w-full">
            <button
              onClick={() => setShowSignUp(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <SignUp afterSignUpUrl="/" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
