// Adds a smaller "-thumb-sm" variant of every portfolio thumbnail, sized for
// the single-column mobile layout (<768px, Tailwind's `md` breakpoint). The
// existing "-thumb.webp" (1280px) is left untouched — desktop/tablet still
// gets exactly what it got before. Downsizes from the existing 1280px thumb
// (not the original backups, which are no longer on disk) — going from
// 1280 to 640 is a big enough drop that re-compressing doesn't introduce
// visible new artifacts.
import sharp from "sharp"
import { readdir, writeFile } from "fs/promises"
import path from "path"

const ROOT = "public/images"
const MOBILE_MAX_DIMENSION = 640
const MOBILE_QUALITY = 75

async function findThumbs(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  let results = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results = results.concat(await findThumbs(full))
    } else if (entry.name.endsWith("-thumb.webp")) {
      results.push(full)
    }
  }
  return results
}

async function main() {
  const thumbs = await findThumbs(ROOT)
  for (const srcPath of thumbs) {
    const outPath = srcPath.replace(/-thumb\.webp$/, "-thumb-sm.webp")
    const buffer = await sharp(srcPath)
      .resize({
        width: MOBILE_MAX_DIMENSION,
        height: MOBILE_MAX_DIMENSION,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: MOBILE_QUALITY })
      .toBuffer()
    await writeFile(outPath, buffer)
    console.log(`${srcPath} -> ${path.basename(outPath)}: ${(buffer.length / 1024).toFixed(0)}KiB`)
  }
  console.log(`Done. ${thumbs.length} files processed.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
