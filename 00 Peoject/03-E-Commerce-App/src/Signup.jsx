import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import {auth} from  "./firebase"
import { useNavigate, Link } from 'react-router-dom'

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate("/Dashboard")
        } catch(err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="w-full max-w-md animate-slide-up">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <div className="inline-block p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-2 animate-bounce-subtle">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800">Join Us Today</h1>
                        <p className="text-gray-600">Create your account to get started</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg animate-slide-in">
                            <p className="text-red-700 text-sm">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder='Choose a username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none hover:border-indigo-300"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='your@email.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none hover:border-indigo-300"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Min. 6 characters'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none hover:border-indigo-300"
                                required
                                minLength="6"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Creating account...</span>
                                </div>
                            ) : 'Create Account'}
                        </button>
                    </form>

                    <div className="text-center pt-4 border-t border-gray-200">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link to="/Login" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup