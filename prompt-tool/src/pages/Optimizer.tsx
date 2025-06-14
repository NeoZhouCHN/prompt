import React, { useState } from 'react';
import { Sparkles, Copy, RotateCcw, CheckCircle, AlertCircle, Info, Lightbulb } from 'lucide-react';
import { analyzePrompt, getOptimizationTips } from '../utils/promptOptimizer';
import type { OptimizationResult } from '../types';

const Optimizer: React.FC = () => {
  const [inputPrompt, setInputPrompt] = useState('');
  const [result, setResult] = useState<OptimizationResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [copiedOriginal, setCopiedOriginal] = useState(false);
  const [copiedOptimized, setCopiedOptimized] = useState(false);

  const handleAnalyze = async () => {
    if (!inputPrompt.trim()) return;
    
    setIsAnalyzing(true);
    // 模拟分析延迟
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const analysisResult = analyzePrompt(inputPrompt);
    setResult(analysisResult);
    setIsAnalyzing(false);
  };

  const handleCopy = async (text: string, type: 'original' | 'optimized') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'original') {
        setCopiedOriginal(true);
        setTimeout(() => setCopiedOriginal(false), 2000);
      } else {
        setCopiedOptimized(true);
        setTimeout(() => setCopiedOptimized(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleReset = () => {
    setInputPrompt('');
    setResult(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-apple-gray-600 bg-apple-gray-50 border-apple-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4" />;
      case 'medium': return <Info className="w-4 h-4" />;
      case 'low': return <Lightbulb className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const optimizationTips = getOptimizationTips();

  return (
    <div className="min-h-screen bg-apple-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">提示词优化工具</h1>
          <p className="section-subtitle">
            智能分析您的提示词，提供专业的优化建议，让AI更好地理解您的需求
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-xl font-semibold text-apple-gray-900 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-apple-blue" />
                输入您的提示词
              </h2>
              
              <textarea
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="请输入您想要优化的提示词..."
                className="w-full h-48 p-4 border border-apple-gray-200 rounded-xl bg-apple-gray-50 text-apple-gray-900 placeholder-apple-gray-500 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent resize-none transition-all duration-200"
              />
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-apple-gray-500">
                  {inputPrompt.length} 字符 | {inputPrompt.split(/\s+/).filter(word => word.length > 0).length} 词
                </span>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="btn-secondary flex items-center"
                    disabled={!inputPrompt && !result}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    重置
                  </button>
                  
                  <button
                    onClick={handleAnalyze}
                    disabled={!inputPrompt.trim() || isAnalyzing}
                    className="btn-primary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        分析中...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        开始分析
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="mt-8 space-y-6">
                {/* Analysis Scores */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-apple-gray-900 mb-4">分析结果</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${getScoreColor(result.analysis.clarity)}`}>
                        {result.analysis.clarity}
                      </div>
                      <div className="text-sm text-apple-gray-600">清晰度</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${getScoreColor(result.analysis.specificity)}`}>
                        {result.analysis.specificity}
                      </div>
                      <div className="text-sm text-apple-gray-600">具体性</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${getScoreColor(result.analysis.structure)}`}>
                        {result.analysis.structure}
                      </div>
                      <div className="text-sm text-apple-gray-600">结构性</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${getScoreColor(result.analysis.context)}`}>
                        {result.analysis.context}
                      </div>
                      <div className="text-sm text-apple-gray-600">上下文</div>
                    </div>
                  </div>

                  <div className="bg-apple-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-apple-gray-700">综合评分</span>
                      <span className={`text-xl font-bold ${getScoreColor(result.improvementScore)}`}>
                        {result.improvementScore}/100
                      </span>
                    </div>
                  </div>
                </div>

                {/* Optimization Suggestions */}
                {result.suggestions.length > 0 && (
                  <div className="card">
                    <h3 className="text-lg font-semibold text-apple-gray-900 mb-4">优化建议</h3>

                    <div className="space-y-4">
                      {result.suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border ${getPriorityColor(suggestion.priority)}`}
                        >
                          <div className="flex items-start space-x-3">
                            {getPriorityIcon(suggestion.priority)}
                            <div className="flex-1">
                              <h4 className="font-medium mb-1">{suggestion.title}</h4>
                              <p className="text-sm mb-2">{suggestion.description}</p>
                              {suggestion.example && (
                                <div className="text-xs bg-white/50 rounded p-2 font-mono">
                                  {suggestion.example}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Original */}
                  <div className="card">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-apple-gray-900">原始提示词</h3>
                      <button
                        onClick={() => handleCopy(result.originalPrompt, 'original')}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          copiedOriginal
                            ? 'text-green-600 bg-green-50'
                            : 'text-apple-gray-400 hover:text-apple-blue hover:bg-apple-blue/10'
                        }`}
                      >
                        {copiedOriginal ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="bg-apple-gray-50 rounded-lg p-4 text-sm text-apple-gray-700 whitespace-pre-wrap">
                      {result.originalPrompt}
                    </div>
                  </div>

                  {/* Optimized */}
                  <div className="card">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-apple-gray-900">优化后提示词</h3>
                      <button
                        onClick={() => handleCopy(result.optimizedPrompt, 'optimized')}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          copiedOptimized
                            ? 'text-green-600 bg-green-50'
                            : 'text-apple-gray-400 hover:text-apple-blue hover:bg-apple-blue/10'
                        }`}
                      >
                        {copiedOptimized ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="bg-gradient-to-br from-apple-blue/5 to-blue-50 rounded-lg p-4 text-sm text-apple-gray-700 whitespace-pre-wrap border border-apple-blue/20">
                      {result.optimizedPrompt}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tips Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h3 className="text-lg font-semibold text-apple-gray-900 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-apple-blue" />
                优化技巧
              </h3>
              
              <div className="space-y-3">
                {optimizationTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-apple-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-apple-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-apple-blue">{index + 1}</span>
                    </div>
                    <p className="text-sm text-apple-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimizer;
