import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Sparkles, Library, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="glass-strong border-b border-apple-gray-100 sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-medium">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-apple-gray-900 tracking-tight">PromptCraft</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'text-apple-blue bg-apple-blue-50 shadow-soft'
                  : 'text-apple-gray-600 hover:text-apple-gray-900 hover:bg-apple-gray-50'
              }`}
            >
              <span>首页</span>
            </Link>

            <Link
              to="/templates"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                isActive('/templates')
                  ? 'text-apple-blue bg-apple-blue-50 shadow-soft'
                  : 'text-apple-gray-600 hover:text-apple-gray-900 hover:bg-apple-gray-50'
              }`}
            >
              <Library className="w-4 h-4" />
              <span>模板库</span>
            </Link>

            <Link
              to="/optimizer"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                isActive('/optimizer')
                  ? 'text-apple-blue bg-apple-blue-50 shadow-soft'
                  : 'text-apple-gray-600 hover:text-apple-gray-900 hover:bg-apple-gray-50'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>优化工具</span>
            </Link>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="搜索提示词..."
                className="search-input w-72 text-sm font-medium"
              />
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-3 rounded-xl text-apple-gray-600 hover:text-apple-gray-900 hover:bg-apple-gray-50 transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
