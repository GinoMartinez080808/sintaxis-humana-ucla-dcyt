import { existsSync } from "node:fs";
import path from "node:path";
import { TEAM_MEMBERS } from "./team";

const TEAM_IMAGES_DIR = path.join(process.cwd(), "public", "images", "team");

const photos: Record<string, string> = {};

for (const member of TEAM_MEMBERS) {
  const fileName = `${member.id}.webp`;
  if (existsSync(path.join(TEAM_IMAGES_DIR, fileName))) {
    photos[member.id] = `/images/team/${fileName}`;
  }
}

export const TEAM_PHOTOS: Readonly<Record<string, string>> = photos;
