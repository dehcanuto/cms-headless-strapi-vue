export interface PostPropsType {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  locale: string | null;
  createdBy: string | null;
  updatedBy: string | null;
}
