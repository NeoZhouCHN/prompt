import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Library, Settings, Star, TrendingUp, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-apple-gray-25 to-apple-gray-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass border text-apple-blue text-sm font-semibold mb-8 animate-fade-in hover-lift">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse-slow" />
              专业提示词工具平台
            </div>

            <h1 className="hero-title animate-slide-up animate-delay-100">
              让AI更懂你的
              <br />
              <span className="text-gradient">
                创意想法
              </span>
            </h1>

            <p className="section-subtitle animate-slide-up animate-delay-200 max-w-4xl">
              通过精心设计的提示词模板和智能优化工具，释放AI的无限潜能。
              <br />
              无论是写作、编程还是创意设计，我们都能帮您找到最佳的表达方式。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-300">
              <Link to="/templates" className="btn btn-primary group">
                <Library className="w-5 h-5" />
                探索模板库
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/optimizer" className="btn btn-glass">
                <Settings className="w-5 h-5" />
                优化提示词
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in animate-delay-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-apple-blue mb-2">50K+</div>
                <div className="text-apple-gray-600">模板使用次数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-apple-blue mb-2">10K+</div>
                <div className="text-apple-gray-600">活跃用户</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-apple-blue mb-2">4.9</div>
                <div className="text-apple-gray-600">用户评分</div>
              </div>
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
      <section className="py-32 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="section-title mb-6">
              为什么选择 PromptCraft
            </h2>
            <p className="section-subtitle">
              我们提供专业的工具和丰富的资源，帮助您轻松创建高质量的AI提示词
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="card-feature group hover-lift animate-slide-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-medium">
                <Library className="w-8 h-8 text-white" />
              </div>
              <h3 className="feature-title">丰富的模板库</h3>
              <p className="feature-description mb-6">
                精心整理的分类模板，涵盖写作、编程、分析等多个领域，满足不同场景需求。
                每个模板都经过专业优化，确保最佳效果。
              </p>
              <Link to="/templates" className="inline-flex items-center text-apple-blue font-semibold hover:text-apple-blue-dark transition-colors group">
                查看模板
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="card-feature group hover-lift animate-slide-up animate-delay-100">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-medium">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="feature-title">智能优化工具</h3>
              <p className="feature-description mb-6">
                AI驱动的提示词分析和优化建议，从多个维度评估您的提示词质量，
                提供具体的改进方案和最佳实践指导。
              </p>
              <Link to="/optimizer" className="inline-flex items-center text-apple-blue font-semibold hover:text-apple-blue-dark transition-colors group">
                开始优化
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="card-feature group hover-lift animate-slide-up animate-delay-200">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-medium">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="feature-title">专业设计理念</h3>
              <p className="feature-description mb-6">
                基于最佳实践设计，简洁优雅的界面，流畅的用户体验。
                采用现代化的设计语言，让创作过程更加高效愉悦。
              </p>
              <span className="inline-flex items-center text-apple-blue font-semibold">
                了解更多
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-apple-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">用户信赖的选择</h2>
            <p className="section-subtitle">数据说明一切，我们致力于提供最优质的服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center card-glass hover-lift animate-scale-in">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-apple-blue mb-3">4.9</div>
              <div className="text-lg font-semibold text-apple-gray-900 mb-2">用户满意度评分</div>
              <p className="text-apple-gray-600">基于10,000+用户真实反馈</p>
            </div>

            <div className="text-center card-glass hover-lift animate-scale-in animate-delay-100">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-apple-blue mb-3">50K+</div>
              <div className="text-lg font-semibold text-apple-gray-900 mb-2">模板使用次数</div>
              <p className="text-apple-gray-600">每月持续增长的使用量</p>
            </div>

            <div className="text-center card-glass hover-lift animate-scale-in animate-delay-200">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-apple-blue mb-3">10K+</div>
              <div className="text-lg font-semibold text-apple-gray-900 mb-2">活跃用户数量</div>
              <p className="text-apple-gray-600">来自全球的专业用户</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-32 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              准备好提升您的
              <br />
              <span className="text-blue-100">AI体验</span>了吗？
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              立即开始使用我们的专业工具，让您的创意想法得到最佳的AI响应，
              体验前所未有的智能创作流程
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/templates" className="btn btn-secondary bg-white text-apple-blue hover:bg-apple-gray-25 shadow-dramatic">
                <Library className="w-5 h-5" />
                浏览模板库
              </Link>
              <Link to="/optimizer" className="btn btn-glass text-white border-white/30 hover:bg-white/20">
                <Sparkles className="w-5 h-5" />
                试用优化工具
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
