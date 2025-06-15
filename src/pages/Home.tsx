import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Library, Settings, Star, TrendingUp, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-apple-gray-50 to-apple-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-sm font-medium mb-8 animate-slide-up">
              <Sparkles className="w-4 h-4 mr-2" />
              专业提示词工具平台
            </div>
            
            <h1 className="section-title animate-slide-up" style={{ animationDelay: '0.1s' }}>
              让AI更懂你的
              <span className="bg-gradient-to-r from-apple-blue to-blue-600 bg-clip-text text-transparent">
                创意想法
              </span>
            </h1>
            
            <p className="section-subtitle animate-slide-up" style={{ animationDelay: '0.2s' }}>
              通过精心设计的提示词模板和智能优化工具，释放AI的无限潜能。
              无论是写作、编程还是创意设计，我们都能帮您找到最佳的表达方式。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/templates" className="btn-primary group">
                探索模板库
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link to="/optimizer" className="btn-secondary">
                优化提示词
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-apple-blue/5 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-apple-blue/5 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-apple-gray-900 mb-4">
              为什么选择 PromptCraft
            </h2>
            <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
              我们提供专业的工具和丰富的资源，帮助您轻松创建高质量的AI提示词
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-12 h-12 bg-apple-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <Library className="w-6 h-6 text-apple-blue" />
              </div>
              <h3 className="text-xl font-semibold text-apple-gray-900 mb-3">丰富的模板库</h3>
              <p className="text-apple-gray-600 mb-4">
                精心整理的分类模板，涵盖写作、编程、分析等多个领域，满足不同场景需求
              </p>
              <Link to="/templates" className="text-apple-blue font-medium flex items-center group-hover:translate-x-1 transition-transform duration-200">
                查看模板 <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="card group">
              <div className="w-12 h-12 bg-apple-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <Settings className="w-6 h-6 text-apple-blue" />
              </div>
              <h3 className="text-xl font-semibold text-apple-gray-900 mb-3">智能优化工具</h3>
              <p className="text-apple-gray-600 mb-4">
                AI驱动的提示词分析和优化建议，帮您提升提示词的效果和准确性
              </p>
              <Link to="/optimizer" className="text-apple-blue font-medium flex items-center group-hover:translate-x-1 transition-transform duration-200">
                开始优化 <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="card group">
              <div className="w-12 h-12 bg-apple-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <Sparkles className="w-6 h-6 text-apple-blue" />
              </div>
              <h3 className="text-xl font-semibold text-apple-gray-900 mb-3">专业设计理念</h3>
              <p className="text-apple-gray-600 mb-4">
                基于最佳实践设计，简洁优雅的界面，流畅的用户体验，让创作更加高效
              </p>
              <span className="text-apple-blue font-medium flex items-center">
                了解更多 <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-apple-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-apple-blue mr-2" />
                <span className="text-4xl font-bold text-apple-gray-900">4.9</span>
              </div>
              <p className="text-apple-gray-600">用户满意度评分</p>
            </div>
            
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-apple-blue mr-2" />
                <span className="text-4xl font-bold text-apple-gray-900">50K+</span>
              </div>
              <p className="text-apple-gray-600">提示词模板使用次数</p>
            </div>
            
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-apple-blue mr-2" />
                <span className="text-4xl font-bold text-apple-gray-900">10K+</span>
              </div>
              <p className="text-apple-gray-600">活跃用户数量</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-apple-blue to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好提升您的AI体验了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            立即开始使用我们的专业工具，让您的创意想法得到最佳的AI响应
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/templates" className="bg-white text-apple-blue px-8 py-4 rounded-xl font-semibold hover:bg-apple-gray-50 transition-colors duration-200">
              浏览模板库
            </Link>
            <Link to="/optimizer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-apple-blue transition-colors duration-200">
              试用优化工具
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
