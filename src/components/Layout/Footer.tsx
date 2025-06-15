import React from 'react';
import { Heart, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-apple-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-apple-blue to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-apple-gray-900">PromptCraft</span>
            </div>
            <p className="text-apple-gray-600 mb-6 max-w-md">
              专业的提示词工具平台，帮助您创建、优化和管理高质量的AI提示词，提升工作效率和创作质量。
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-apple-gray-400 hover:text-apple-blue transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-apple-gray-400 hover:text-apple-blue transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-apple-gray-400 hover:text-apple-blue transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-apple-gray-900 uppercase tracking-wider mb-4">
              快速链接
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-apple-gray-600 hover:text-apple-blue transition-colors duration-200">
                  首页
                </a>
              </li>
              <li>
                <a href="/templates" className="text-apple-gray-600 hover:text-apple-blue transition-colors duration-200">
                  模板库
                </a>
              </li>
              <li>
                <a href="/optimizer" className="text-apple-gray-600 hover:text-apple-blue transition-colors duration-200">
                  优化工具
                </a>
              </li>
              <li>
                <a href="#" className="text-apple-gray-600 hover:text-apple-blue transition-colors duration-200">
                  使用指南
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-apple-gray-900 uppercase tracking-wider mb-4">
              资源
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-apple-gray-600 hover:text-apple-blue transition-colors duration-200">
                  最佳实践
                </a>
              </li>
              <li>
                <a href="#" className="text-apple-gray-600 hover:text-apple-blue transition-colors duration-200">
                  API文档
                </a>
              </li>
              <li>
                <a href="#" className="text-apple-gray-600 hover:text-apple-blue transition-colors duration-200">
                  社区论坛
                </a>
              </li>
              <li>
                <a href="#" className="text-apple-gray-600 hover:text-apple-blue transition-colors duration-200">
                  反馈建议
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-apple-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-apple-gray-500 text-sm">
            © 2024 PromptCraft. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-apple-gray-500 text-sm mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by</span>
            <span className="font-semibold text-apple-gray-900">NEO JOU</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
