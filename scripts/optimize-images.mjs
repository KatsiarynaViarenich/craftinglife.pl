// One-off script: shrink oversized real-photo source files down to a
// sensible display resolution and re-encode as WebP. These are phone
// photos uploaded at full resolution (up to ~3500x4600px) but only ever
// displayed at a few hundred px wide (grid thumbnail) up to ~70vh in the
// lightbox — nothing on the site needs more than ~1920px on the long edge.
//
// Usage: node scripts/optimize-images.mjs
import sharp from "sharp"
import { readFile, writeFile, mkdir, copyFile } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

const ROOT = process.cwd()
const BACKUP_DIR = "/tmp/claude-1000/-home-katsiaryna-Projects-AL-4/25869553-7e4c-4fb0-9309-8826f6ee726f/scratchpad/images-backup"
const MAX_DIMENSION = 1920
const WEBP_QUALITY = 82

// Files actually referenced by the site (from grep across components/*.tsx).
const WEBP_FILES = [
  "commercial/1/1.webp", "commercial/1/2.webp", "commercial/1/3.webp",
  "commercial/2/1.webp", "commercial/2/2.webp",
  "commercial/3/1.webp",
  "residential/1/1.webp", "residential/1/2.webp", "residential/1/3.webp",
  "residential/2/1.webp", "residential/2/2.webp",
  "residential/3/1.webp", "residential/3/2.webp", "residential/3/3.webp", "residential/3/4.webp", "residential/3/5.webp", "residential/3/6.webp",
  "residential/4/1.webp", "residential/4/2.webp", "residential/4/3.webp", "residential/4/4.webp",
  "residential/5/1.webp", "residential/5/2.webp", "residential/5/3.webp",
  "residential/6/1.webp", "residential/6/2.webp", "residential/6/3.webp", "residential/6/4.webp", "residential/6/5.webp",
]

// PNGs to convert to WebP (same dimensions, format-only change).
const PNG_FILES = ["hero-building.png", "project-residential.png"]

async function backup(relPath) {
  const src = path.join(ROOT, "public/images", relPath)
  const dest = path.join(BACKUP_DIR, relPath)
  await mkdir(path.dirname(dest), { recursive: true })
  await copyFile(src, dest)
}

async function optimizeWebp(relPath) {
  const filePath = path.join(ROOT, "public/images", relPath)
  await backup(relPath)
  const before = (await readFile(filePath)).length
  const image = sharp(filePath)
  const meta = await image.metadata()
  const buffer = await image
    .resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer()
  await writeFile(filePath, buffer)
  console.log(
    `${relPath}: ${meta.width}x${meta.height} ${(before / 1024).toFixed(0)}KiB -> ${(buffer.length / 1024).toFixed(0)}KiB`
  )
}

async function convertPngToWebp(relName) {
  const relPath = relName
  const filePath = path.join(ROOT, "public/images", relPath)
  await backup(relPath)
  const before = (await readFile(filePath)).length
  const buffer = await sharp(filePath).webp({ quality: 85 }).toBuffer()
  const outPath = filePath.replace(/\.png$/, ".webp")
  await writeFile(outPath, buffer)
  console.log(
    `${relPath}: ${(before / 1024).toFixed(0)}KiB PNG -> ${(buffer.length / 1024).toFixed(0)}KiB WebP (${path.basename(outPath)})`
  )
}

async function main() {
  console.log(`Backing up originals to ${BACKUP_DIR}`)
  for (const f of WEBP_FILES) {
    await optimizeWebp(f)
  }
  for (const f of PNG_FILES) {
    await convertPngToWebp(f)
  }
  console.log("Done.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
