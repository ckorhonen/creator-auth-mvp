import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-900 mb-4">
            Creator Auth MVP
          </h1>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            Solving creator authenticity verification in the age of AI content flooding
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Welcome to the Future of Creator Verification
            </h2>
            <p className="text-gray-600 mb-6">
              In a world where AI can generate convincing content at scale, we're building
              the trust layer that empowers authentic creators and protects their reputation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-primary-50 rounded-xl">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="font-semibold text-lg mb-2">Secure Verification</h3>
                <p className="text-sm text-gray-600">
                  Multi-factor authentication ensuring creator identity
                </p>
              </div>

              <div className="p-6 bg-primary-50 rounded-xl">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-semibold text-lg mb-2">Trust Badges</h3>
                <p className="text-sm text-gray-600">
                  Verifiable credentials that build audience confidence
                </p>
              </div>

              <div className="p-6 bg-primary-50 rounded-xl">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-semibold text-lg mb-2">Seamless Integration</h3>
                <p className="text-sm text-gray-600">
                  Built for Whop with creator-first experience
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Get Started {count > 0 && `(${count})`}
              </button>
            </div>
          </div>

          <div className="text-center text-primary-700">
            <p className="text-sm">
              Built with TypeScript, React, and Tailwind CSS
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
