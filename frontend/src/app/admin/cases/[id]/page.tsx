'use client';

import Link from 'next/link';
import { updateCase, getCasesList } from '@/lib/actions';
import { GRADIENT_PRESETS, CaseItem } from '@/lib/types';
import ImageUpload from '@/components/admin/ImageUpload';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';

interface CaseEditPageProps {
  params: Promise<{ id: string }>;
}

export default function CaseEditPage(props: CaseEditPageProps) {
  const [caseItem, setCaseItem] = useState<CaseItem | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [selectedGradient, setSelectedGradient] = useState<string>(GRADIENT_PRESETS[0].value);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCase = async () => {
      const params = await props.params;
      const casesList = await getCasesList();
      const item = casesList.find(c => c.id === params.id);
      if (item) {
        setCaseItem(item);
        setImageUrl(item.image);
        setSelectedGradient(item.gradient);
      }
      setLoading(false);
    };
    fetchCase();
  }, [props.params]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!caseItem) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/cases"
          className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white">编辑案例</h1>
          <p className="text-gray-400">修改案例内容</p>
        </div>
      </div>

      <form action={updateCase.bind(null, caseItem.id)} className="space-y-6">
        <div className="glass rounded-2xl p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                案例标题 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="title"
                required
                defaultValue={caseItem.title}
                placeholder="请输入案例标题"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                分类 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="category"
                required
                defaultValue={caseItem.category}
                placeholder="如：金融科技、工业互联网"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                尺寸 <span className="text-red-400">*</span>
              </label>
              <select
                name="size"
                required
                defaultValue={caseItem.size}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer"
              >
                <option value="small" className="bg-gray-900">小尺寸</option>
                <option value="large" className="bg-gray-900">大尺寸（跨两列）</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                描述 <span className="text-red-400">*</span>
              </label>
              <textarea
                name="description"
                required
                rows={3}
                defaultValue={caseItem.description}
                placeholder="请输入案例描述"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                数据指标 - 数值 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="statsValue"
                required
                defaultValue={caseItem.stats.value}
                placeholder="如：40%、98%"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                数据指标 - 标签 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="statsLabel"
                required
                defaultValue={caseItem.stats.label}
                placeholder="如：风险降低、效率提升"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                封面图片
              </label>
              <ImageUpload
                name="image"
                value={imageUrl}
                onChange={setImageUrl}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-4">
                渐变色 <span className="text-red-400">*</span>
              </label>
              <input type="hidden" name="gradient" value={selectedGradient} />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {GRADIENT_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setSelectedGradient(preset.value)}
                    className={`relative p-3 rounded-xl border-2 transition-all ${
                      selectedGradient === preset.value
                        ? 'border-cyan-500 bg-cyan-500/20'
                        : 'border-transparent hover:border-white/10'
                    }`}
                  >
                    <div
                      className={`w-full h-16 rounded-lg bg-gradient-to-br ${preset.value} mb-2`}
                    />
                    <p className="text-xs text-gray-400 text-center">{preset.label}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/admin/cases"
            className="px-6 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            取消
          </Link>
          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25"
          >
            保存
          </button>
        </div>
      </form>
    </div>
  );
}
