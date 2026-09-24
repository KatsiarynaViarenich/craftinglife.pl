// Generates a smaller "-thumb" variant of every portfolio photo, sized for
// the grid card (used for the cover image + hover-cycle stack). The
// full-size (~1920px) version stays as-is for the lightbox, where photos
// are viewed much larger. Reads from the untouched original backups so we
// don't compound compression from the already-downsized "full" files.
import sharp from "sharp"
import { readFile, writeFile } from "fs/promises"
import path from "path"

const ROOT = process.cwd()
const BACKUP_DIR = "/tmp/claude-1000/-home-katsiaryna-Projects-AL-4/25869553-7e4c-4fb0-9309-8826f6ee726f/scratchpad/images-backup"
const THUMB_MAX_DIMENSION = 1280
const THUMB_QUALITY = 78

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

async function makeThumb(relPath) {
  const srcPath = path.join(BACKUP_DIR, relPath)
  const outPath = path.join(ROOT, "public/images", relPath.replace(/\.webp$/, "-thumb.webp"))
  const buffer = await sharp(srcPath)
    .resize({
      width: THUMB_MAX_DIMENSION,
      height: THUMB_MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: THUMB_QUALITY })
    .toBuffer()
  await writeFile(outPath, buffer)
  console.log(`${relPath} -> ${path.basename(outPath)}: ${(buffer.length / 1024).toFixed(0)}KiB`)
}

async function main() {
  for (const f of WEBP_FILES) {
    await makeThumb(f)
  }
  console.log("Done.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
