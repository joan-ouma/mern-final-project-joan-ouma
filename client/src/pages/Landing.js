import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ArrowRight, Star, Leaf, ShieldCheck, UserPlus, ShoppingBag, Utensils } from 'lucide-react';

export default function Landing() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-emerald-100">

            {/* --- Navigation Bar --- */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-2xl tracking-tight">
                        <div className="bg-emerald-600 p-2 rounded-lg text-white shadow-lg shadow-emerald-200">
                            <ChefHat size={24} />
                        </div>
                        NutriSmart
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How it Works</a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/login"
                            className="hidden md:block text-slate-600 font-semibold hover:text-emerald-700 transition-colors"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/register"
                            className="px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transform hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <header className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                            Eat Smarter with <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                NutriSmart
              </span>
                        </h1>

                        <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
                            Transform your pantry ingredients into chef-quality meals.
                            NutriSmart creates personalized diet plans that fit your budget,
                            allergies, and health goals instantly.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/register"
                                className="inline-flex justify-center items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200"
                            >
                                Get Started Now <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex -space-x-2">
                                {[1,2,3,4].map(i => (
                                    <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                ))}
                            </div>
                            <p>Join 10,000+ users cooking smarter today.</p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:h-[600px] w-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50 rounded-[3rem] transform rotate-3 -z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
                            alt="Healthy Food Layout"
                            className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-8 border-white transform -rotate-2 hover:rotate-0 transition-all duration-700"
                        />

                        {/* Floating Card 1 */}
                        <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <Leaf size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold">Daily Calories</p>
                                    <p className="text-sm font-bold text-slate-900">1,850 kcal (On Track)</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 2 */}
                        <div className="absolute bottom-10 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce" style={{ animationDuration: '4s' }}>
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold">Macro Balance</p>
                                    <p className="text-sm font-bold text-slate-900">High Protein</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            {/* --- How It Works Section --- */}
            <section className="py-24 bg-white" id="how-it-works">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">How NutriSmart Works</h2>
                        <p className="text-lg text-slate-500">Three simple steps to your perfect meal plan.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop only) */}
                        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 -z-10"></div>

                        {[
                            { title: "Create Profile", desc: "Set your diet goals, budget, and allergies.", icon: UserPlus },
                            { title: "Add Ingredients", desc: "Scan or type what you have in your kitchen.", icon: ShoppingBag },
                            { title: "Get Recipes", desc: "Receive instant, AI-tailored meal suggestions.", icon: Utensils }
                        ].map((step, i) => (
                            <div key={i} className="text-center relative">
                                <div className="w-24 h-24 mx-auto bg-white border-4 border-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                                    <step.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Value Props/Features Section --- */}
            <section className="py-24 bg-slate-50" id="features">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose NutriSmart?</h2>
                        <p className="text-lg text-slate-500">We don't just give you recipes. We build a complete nutritional ecosystem around your lifestyle.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Personalized Nutrition", desc: "Tailored meal plans that adapt to your dietary needs, allergies, and fitness goals.", icon: Star },
                            { title: "Smart Pantry", desc: "Input what you have at home, and we'll tell you exactly what you can cook right now.", icon: ChefHat },
                            { title: "Budget Optimization", desc: "Eat healthy without breaking the bank. We prioritize ingredients that are in season and affordable.", icon: Leaf }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Footer --- */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">Ready to revolutionize your kitchen?</h2>
                    <p className="text-slate-400 text-lg mb-10">Join NutriSmart today and get your first weekly meal plan generated in seconds.</p>
                    <Link to="/register" className="inline-block bg-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-900/50">
                        Start Cooking Smarter
                    </Link>
                </div>
            </section>
        </div>
    );
}