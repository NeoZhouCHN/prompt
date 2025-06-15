import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Sparkles, Library, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-apple-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-apple-blue to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-apple-gray-900">PromptCraft</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'text-apple-blue bg-apple-blue/10' 
                  : 'text-apple-gray-600 hover:text-apple-gray-900 hover:bg-apple-gray-100'
              }`}
            >
              <span>首页</span>
            </Link>
            
            <Link
              to="/templates"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/templates') 
                  ? 'text-apple-blue bg-apple-blue/10' 
                  : 'text-apple-gray-600 hover:text-apple-gray-900 hover:bg-apple-gray-100'
              }`}
            >
              <Library className="w-4 h-4" />
              <span>模板库</span>
            </Link>
            
            <Link
              to="/optimizer"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive('/optimizer') 
                  ? 'text-apple-blue bg-apple-blue/10' 
                  : 'text-apple-gray-600 hover:text-apple-gray-900 hover:bg-apple-gray-100'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>优化工具</span>
            </Link>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-apple-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="搜索提示词..."
                className="pl-10 pr-4 py-2 w-64 rounded-lg border border-apple-gray-200 bg-apple-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all duration-200"
              />
            </div>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg text-apple-gray-600 hover:text-apple-gray-900 hover:bg-apple-gray-100 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
