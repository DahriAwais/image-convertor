
import { ImageFormat } from '../types';

export const formatSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const getMimeTypeLabel = (mime: string): string => {
  if (!mime) return 'IMG';
  return mime.split('/')[1].toUpperCase();
};

export const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.src = url;
  });
};

export const processImage = async (
  imageUrl: string,
  targetMimeType: ImageFormat,
  options: {
    quality?: number;
    width?: number;
    height?: number;
  } = {}
): Promise<string> => {
  const { quality = 0.9, width, height } = options;
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const finalWidth = width || img.width;
      const finalHeight = height || img.height;
      
      canvas.width = finalWidth;
      canvas.height = finalHeight;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Failed to get canvas context'));
        return;
      }
      
      if (targetMimeType === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      ctx.drawImage(img, 0, 0, finalWidth, finalHeight);
      const dataUrl = canvas.toDataURL(targetMimeType, quality);
      resolve(dataUrl);
    };
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = imageUrl;
  });
};
