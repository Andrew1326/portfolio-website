export interface Metadata {
  tags: any[];
}

export interface Sys2 {
  type: string;
  linkType: string;
  id: string;
}

export interface Space {
  sys: Sys2;
}

export interface Sys3 {
  id: string;
  type: string;
  linkType: string;
}

export interface Environment {
  sys: Sys3;
}

export interface Sys4 {
  type: string;
  linkType: string;
  id: string;
}

export interface ContentType {
  sys: Sys4;
}

export interface Sys {
  space: Space;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment;
  revision: number;
  contentType: ContentType;
  locale: string;
}

export interface Metadata2 {
  tags: any[];
}

export interface Sys6 {
  type: string;
  linkType: string;
  id: string;
}

export interface Space2 {
  sys: Sys6;
}

export interface Sys7 {
  id: string;
  type: string;
  linkType: string;
}

export interface Environment2 {
  sys: Sys7;
}

export interface Sys5 {
  space: Space2;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment2;
  revision: number;
  locale: string;
}

export interface Image2 {
  width: number;
  height: number;
}

export interface Details {
  size: number;
  image: Image2;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Fields2 {
  title: string;
  description: string;
  file: File;
}

export interface Image {
  metadata: Metadata2;
  sys: Sys5;
  fields: Fields2;
}

export interface SectionDescContentContent {
  value: string;
  nodeType: string;
}

export interface SectionDescContent {
  nodeType: string;
  content: SectionDescContentContent[];
}

export interface SectionDesc {
  nodeType: string;
  content: SectionDescContent[];
}

export interface SectionFields {
  title: string;
  description: SectionDesc;
  id: string;
  groupId: string;
}

export interface ProjectFields {
  title: string;
  description: string;
  technologies: string[];
  appUrl?: string;
  githubUrl: string;
  images: Image[];
  id: string;
  groupId: string;
}

export interface EducationFields {
  title: string;
  description?: string;
  link?: string;
  image: Image;
  id: string;
  groupId: string;
}

export interface SoftSkillFields {
  name: string;
  id: string;
  groupId: string;
}

export interface TechnicalSkillFields {
  name: string;
  image: Image;
  id: string;
  groupId: string;
}

export type Fields = ProjectFields | SectionFields | EducationFields | SoftSkillFields | TechnicalSkillFields;

export interface Entry {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}

export interface RootObject {
  entries: Entry[];
}
