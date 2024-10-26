import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { ReactElement } from "react";

const contentDir = path.join(process.cwd(), "src/app/projects/_mdx-content");

export interface Project {
  published: boolean;
  title: string;
  description: string;
  date: string;
  repository: string;
  body: {
    raw: string;
    code: ReactElement;
  };
  _id: string;
  _raw: {
    sourceFilePath: string;
    sourceFileName: string;
    sourceFileDir: string;
    contentType: string;
    flattenedPath: string;
  };
  type: string;
  path: string;
  slug: string;
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
    author: string;
    date: string;
    description: string;
    repository: string;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return {
    published: true,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    repository: frontmatter.repository,
    body: {
      raw: fileContent,
      code: content,
    },
    _id: `projects/${fileName}`,
    _raw: {
      sourceFilePath: `projects/${fileName}`,
      sourceFileName: fileName,
      sourceFileDir: "projects",
      contentType: "mdx",
      flattenedPath: `projects/${slug}`,
    },
    type: "Project",
    path: `/projects/${slug}`,
    slug: slug,
  };
}

export async function getProjects(): Promise<Project[]> {
  const files = fs.readdirSync(contentDir);
  const projects = await Promise.all(
    files.map(async (file) => await getProjectBySlug(path.parse(file).name))
  );
  return projects;
}
