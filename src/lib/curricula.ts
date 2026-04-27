import data from "@/data/curricula.json";

export type CurriculumFolder = {
  slug: string;
  name: string;
  driveId: string;
  group: "degree" | "support" | "language" | "other";
  level: number;
  kind: string;
};

export type CurriculaData = {
  rootFolderId: string;
  fetchedAt: string;
  folders: CurriculumFolder[];
};

const typed = data as CurriculaData;

export function getRootFolderId(): string {
  return typed.rootFolderId;
}

export function getAllFolders(): CurriculumFolder[] {
  return typed.folders;
}

export function getFolderBySlug(slug: string): CurriculumFolder | undefined {
  return typed.folders.find((f) => f.slug === slug);
}

export function getDegreeFolders(): CurriculumFolder[] {
  return typed.folders.filter((f) => f.group === "degree");
}

export function getSupportFolders(): CurriculumFolder[] {
  return typed.folders.filter((f) => f.group === "support");
}

export function getLanguageFolders(): CurriculumFolder[] {
  return typed.folders.filter((f) => f.group === "language");
}

export function getOtherFolders(): CurriculumFolder[] {
  return typed.folders.filter((f) => f.group === "other");
}

export function driveFolderUrl(id: string): string {
  return `https://drive.google.com/drive/folders/${id}`;
}

export function driveEmbedUrl(id: string): string {
  return `https://drive.google.com/embeddedfolderview?id=${id}#list`;
}
