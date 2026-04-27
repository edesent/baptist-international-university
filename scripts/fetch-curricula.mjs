#!/usr/bin/env node
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_FOLDER_ID = "1LwJv1V-k4wAkg1h6ljkZ4ckIruBRiJ58";
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, "..", "src", "data", "curricula.json");

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function classifyFolder(name) {
  const n = name.toLowerCase();
  if (/^\d{3}-\d{3}\s+associate/.test(n)) return { group: "degree", level: 200, kind: "Associate" };
  if (/^\d{3}-\d{3}\s+pre-graduate/.test(n)) return { group: "degree", level: 300, kind: "Pre-Graduate" };
  if (/^\d{3}-\d{3}\s+bachelor/.test(n)) return { group: "degree", level: 400, kind: "Bachelor" };
  if (/master of divinity/.test(n)) return { group: "degree", level: 450, kind: "Master of Divinity" };
  if (/^\d{3}-\d{3}\s+master/.test(n)) return { group: "degree", level: 500, kind: "Master" };
  if (/^\d{3}-\d{3}\s+doctor/.test(n)) return { group: "degree", level: 600, kind: "Doctorate" };
  if (/post-doctorate/.test(n)) return { group: "degree", level: 700, kind: "Post-Doctorate" };
  if (/accelerated/.test(n)) return { group: "degree", level: 550, kind: "Accelerated Master's" };
  if (/spanish/.test(n)) return { group: "language", level: 0, kind: "Spanish Curriculum" };
  if (/pre-class/.test(n)) return { group: "support", level: 0, kind: "Pre-Class Information" };
  if (/student forms/.test(n)) return { group: "support", level: 1, kind: "Student Forms" };
  return { group: "other", level: 99, kind: "Reference" };
}

async function fetchFolder(id) {
  const url = `https://drive.google.com/embeddedfolderview?id=${id}#list`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (BIU site build)" },
  });
  if (!res.ok) throw new Error(`Drive fetch failed: ${res.status}`);
  return res.text();
}

function parseFolderHtml(html) {
  const items = [];
  const re = /<a[^>]+href="https:\/\/drive\.google\.com\/(?:open\?id=|file\/d\/|drive\/folders\/)([A-Za-z0-9_-]+)[^"]*"[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  const seen = new Set();
  while ((m = re.exec(html)) !== null) {
    const id = m[1];
    if (seen.has(id)) continue;
    const inner = m[2];
    const titleMatch = inner.match(/<div[^>]*class="[^"]*flip-entry-title[^"]*"[^>]*>([\s\S]*?)<\/div>/);
    if (!titleMatch) continue;
    const name = titleMatch[1].replace(/<[^>]+>/g, "").trim();
    if (!name) continue;
    const isFolder = /folder/i.test(inner) || /drive\/folders/i.test(m[0]);
    items.push({ id, name, isFolder });
    seen.add(id);
  }
  return items;
}

async function main() {
  console.log(`Fetching root curricula folder ${ROOT_FOLDER_ID}…`);
  const rootHtml = await fetchFolder(ROOT_FOLDER_ID);
  const rootItems = parseFolderHtml(rootHtml);

  if (rootItems.length === 0) {
    throw new Error("No items parsed from root folder. Drive may have changed its embedded HTML structure.");
  }

  const folders = rootItems
    .filter((i) => i.isFolder)
    .map((i) => {
      const meta = classifyFolder(i.name);
      return {
        slug: slugify(i.name),
        name: i.name,
        driveId: i.id,
        ...meta,
      };
    })
    .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));

  const data = {
    rootFolderId: ROOT_FOLDER_ID,
    fetchedAt: new Date().toISOString(),
    folders,
  };

  await mkdir(dirname(OUT_PATH), { recursive: true });
  await writeFile(OUT_PATH, JSON.stringify(data, null, 2) + "\n");

  console.log(`Wrote ${folders.length} folders to ${OUT_PATH}`);
  for (const f of folders) console.log(`  · ${f.kind.padEnd(22)} ${f.name}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
