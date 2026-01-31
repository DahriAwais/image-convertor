
export type ImageFormat = 'image/png' | 'image/jpeg' | 'image/webp' | 'image/bmp';

export type ToolMode = 'convert' | 'compress' | 'resize';

export interface FormatOption {
  label: string;
  mimeType: ImageFormat;
  extension: string;
}

export const SUPPORTED_FORMATS: FormatOption[] = [
  { label: 'PNG', mimeType: 'image/png', extension: 'png' },
  { label: 'JPEG', mimeType: 'image/jpeg', extension: 'jpg' },
  { label: 'WEBP', mimeType: 'image/webp', extension: 'webp' },
  { label: 'BMP', mimeType: 'image/bmp', extension: 'bmp' },
];

export interface FileData {
  file: File;
  previewUrl: string;
  originalFormat: ImageFormat;
  name: string;
  size: number;
  width: number;
  height: number;
}
