import { signOut, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                navigate('/Login')
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [navigate])

    const handleSignOut = async() => {
        try {
            await signOut(auth)
            navigate("/Login")
        } catch (error) {
            console.error('Error signing out:', error)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-white font-medium">Loading...</p>
                </div>
            </div>
        )
    }

    const dashboardCards = [
        { icon: '🛒', title: 'Shop', desc: 'Browse our amazing collection', color: 'from-blue-500 to-cyan-500' },
        { icon: '📦', title: 'Orders', desc: 'View and track your orders', color: 'from-purple-500 to-pink-500' },
        { icon: '❤️', title: 'Wishlist', desc: 'Your saved favorite items', color: 'from-red-500 to-orange-500' },
        { icon: '👤', title: 'Profile', desc: 'Manage your account', color: 'from-green-500 to-teal-500' },
        { icon: '📍', title: 'Addresses', desc: 'Delivery addresses', color: 'from-indigo-500 to-blue-500' },
        { icon: '💳', title: 'Payment', desc: 'Payment methods', color: 'from-yellow-500 to-orange-500' },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 animate-slide-up">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b-2 border-gray-200">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                Welcome Back! 👋
                            </h1>
                            <p className="text-gray-600">Manage your account and explore features</p>
                        </div>
                        <button 
                            onClick={handleSignOut}
                            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Sign Out
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {dashboardCards.map((card, index) => (
                            <div 
                                key={index}
                                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                <div className="relative z-10">
                                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                                    <p className="text-gray-600 text-sm">{card.desc}</p>
                                </div>
                                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br ${card.color} rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                            </div>
                        ))}
                    </div>

                    {user && (
                        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100 animate-fade-in">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Account Information</h3>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <span className="font-semibold min-w-[120px]">Email:</span>
                                    <span className="text-gray-600">{user.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <span className="font-semibold min-w-[120px]">User ID:</span>
                                    <span className="text-gray-600 text-sm font-mono">{user.uid.slice(0, 20)}...</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <span className="font-semibold min-w-[120px]">Last Login:</span>
                                    <span className="text-gray-600">
                                        {user.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleString() : 'N/A'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
