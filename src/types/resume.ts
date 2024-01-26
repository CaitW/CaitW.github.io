export interface Section {
  title: string
  subtitles?: string[]
  body?: string[]
  children?: Section[]
}

export interface Resume {
  title: string
  subtitle: string
  tagline: string
  sections: Section[]
  contact: { label: string; link: string }[]
}
