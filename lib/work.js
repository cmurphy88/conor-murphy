import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const WORK_DIR = path.join(process.cwd(), 'content/work')

export function getAllWork() {
  const files = fs.readdirSync(WORK_DIR).filter(f => f.endsWith('.mdx'))

  return files.map(filename => {
    const raw = fs.readFileSync(path.join(WORK_DIR, filename), 'utf8')
    const { data } = matter(raw)
    return data
  })
}

export function getWorkBySlug(slug) {
  const filepath = path.join(WORK_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filepath)) return null

  const raw = fs.readFileSync(filepath, 'utf8')
  const { data: frontmatter, content } = matter(raw)

  return { frontmatter, content }
}
