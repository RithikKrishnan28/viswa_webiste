"use client";

export default function cloudinaryLoader({src, width, quality}) {
  if (src.startsWith("http") || src.startsWith("/")) {
    return src;
  }
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `/${src}`;
}
