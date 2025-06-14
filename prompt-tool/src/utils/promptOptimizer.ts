import type { OptimizationResult, OptimizationSuggestion } from '../types';

export const analyzePrompt = (prompt: string): OptimizationResult => {
  const suggestions: OptimizationSuggestion[] = [];
  const analysis = {
    clarity: 0,
    specificity: 0,
    structure: 0,
    context: 0
  };

  // 分析提示词长度
  const wordCount = prompt.split(/\s+/).length;
  if (wordCount < 10) {
    suggestions.push({
      type: 'specificity',
      title: '增加具体细节',
      description: '您的提示词较短，建议添加更多具体的要求和细节描述',
      example: '例如：指定输出格式、目标受众、语言风格等',
      priority: 'high'
    });
    analysis.specificity = 40;
  } else if (wordCount > 200) {
    suggestions.push({
      type: 'clarity',
      title: '简化表达',
      description: '提示词过长可能影响理解，建议精简表达',
      example: '保留核心要求，去除冗余信息',
      priority: 'medium'
    });
    analysis.clarity = 60;
  } else {
    analysis.specificity = 80;
    analysis.clarity = 85;
  }

  // 检查结构化程度
  const hasNumberedList = /\d+\./g.test(prompt);
  const hasBulletPoints = /[-•*]/g.test(prompt);
  const hasHeaders = /#{1,6}\s/g.test(prompt);
  
  if (!hasNumberedList && !hasBulletPoints && !hasHeaders) {
    suggestions.push({
      type: 'structure',
      title: '改善结构组织',
      description: '使用编号列表、项目符号或标题来组织内容',
      example: '1. 第一个要求\n2. 第二个要求\n3. 输出格式要求',
      priority: 'medium'
    });
    analysis.structure = 50;
  } else {
    analysis.structure = 90;
  }

  // 检查上下文信息
  const contextKeywords = ['背景', '目标', '受众', '场景', '目的', '要求'];
  const hasContext = contextKeywords.some(keyword => prompt.includes(keyword));
  
  if (!hasContext) {
    suggestions.push({
      type: 'context',
      title: '添加背景信息',
      description: '提供更多背景信息有助于获得更准确的回答',
      example: '说明使用场景、目标受众、预期效果等',
      priority: 'medium'
    });
    analysis.context = 45;
  } else {
    analysis.context = 85;
  }

  // 检查格式要求
  const formatKeywords = ['格式', '样式', '长度', '结构', '输出'];
  const hasFormat = formatKeywords.some(keyword => prompt.includes(keyword));
  
  if (!hasFormat) {
    suggestions.push({
      type: 'format',
      title: '明确输出格式',
      description: '指定期望的输出格式和结构',
      example: '请以Markdown格式输出，包含标题和要点列表',
      priority: 'low'
    });
  }

  // 生成优化后的提示词
  const optimizedPrompt = generateOptimizedPrompt(prompt, suggestions);
  
  // 计算改进分数
  const improvementScore = Math.round(
    (analysis.clarity + analysis.specificity + analysis.structure + analysis.context) / 4
  );

  return {
    originalPrompt: prompt,
    optimizedPrompt,
    suggestions,
    improvementScore,
    analysis
  };
};

const generateOptimizedPrompt = (original: string, suggestions: OptimizationSuggestion[]): string => {
  let optimized = original;

  // 如果缺少结构，添加基本结构
  if (suggestions.some(s => s.type === 'structure')) {
    optimized = `请帮我完成以下任务：

任务描述：
${original}

具体要求：
1. [请根据需要添加具体要求]
2. [输出格式要求]
3. [其他特殊要求]

请确保回答准确、完整且符合要求。`;
  }

  // 如果缺少上下文，添加上下文模板
  if (suggestions.some(s => s.type === 'context')) {
    optimized = `背景信息：[请描述使用场景和背景]

${optimized}

目标受众：[请说明目标读者或使用者]
预期效果：[请描述期望达到的效果]`;
  }

  return optimized;
};

export const getOptimizationTips = (): string[] => {
  return [
    '使用具体、明确的词汇，避免模糊表达',
    '提供充分的背景信息和上下文',
    '明确指定输出格式和结构要求',
    '使用编号列表或项目符号组织内容',
    '说明目标受众和使用场景',
    '包含示例或参考标准',
    '避免过于复杂或冗长的表达',
    '使用积极、明确的语言',
    '提供必要的约束条件',
    '考虑添加质量检查标准'
  ];
};
