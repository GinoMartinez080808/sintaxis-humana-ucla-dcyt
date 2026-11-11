import test from "node:test";
import assert from "node:assert/strict";

import { TEAM_MEMBERS } from "../lib/content/team.ts";

const EXPECTED_MEMBERS = [
  ["maikol-marquez", "Maikol Márquez", "MM"],
  ["zadkiel-boza", "Zadkiel Boza", "ZB"],
  ["gino-martinez", "Gino Martínez", "GM"],
  ["jesus-torres", "Jesús Torres", "JT"],
  ["francisco-placeres", "Francisco Placeres", "FP"],
  ["juan-rodriguez", "Juan Rodríguez", "JR"],
];

test("el equipo contiene exactamente seis integrantes", () => {
  assert.equal(TEAM_MEMBERS.length, 6);
});

test("los identificadores y nombres no se repiten", () => {
  const ids = TEAM_MEMBERS.map((member) => member.id);
  const names = TEAM_MEMBERS.map((member) => member.name);

  assert.equal(new Set(ids).size, TEAM_MEMBERS.length);
  assert.equal(new Set(names).size, TEAM_MEMBERS.length);
});

test("el orden, los nombres y las iniciales coinciden con la ficha del equipo", () => {
  assert.deepEqual(
    TEAM_MEMBERS.map((member) => [member.id, member.name, member.initials]),
    EXPECTED_MEMBERS,
  );
});

test("las iniciales derivan del nombre y cumplen el formato esperado", () => {
  for (const member of TEAM_MEMBERS) {
    const derived = member.name
      .split(/\s+/)
      .map((part) => part[0])
      .join("");

    assert.equal(member.initials, derived, `${member.name} tiene iniciales inconsistentes`);
    assert.match(member.initials, /^[A-ZÁÉÍÓÚÑ]{2}$/);
  }
});

test("cada integrante tiene rol, insignia, biografía y habilidades", () => {
  for (const member of TEAM_MEMBERS) {
    assert.match(member.role, /Ingeniería en Informática · UCLA - DCyT/);
    assert.ok(member.badge.trim().length > 0, `${member.name} no declara insignia`);
    assert.ok(member.bio.trim().length > 0, `${member.name} no declara biografía`);
    assert.ok(member.tags.length > 0, `${member.name} no declara habilidades`);
    assert.ok(
      member.tags.every((tag) => tag.trim().length > 0),
      `${member.name} tiene una etiqueta vacía`,
    );
  }
});

test("los índices forman una secuencia de seis fichas", () => {
  assert.deepEqual(
    TEAM_MEMBERS.map((member) => member.index),
    ["01", "02", "03", "04", "05", "06"],
  );
});

test("los identificadores siguen el formato de slug del archivo de fotografía", () => {
  for (const member of TEAM_MEMBERS) {
    assert.match(member.id, /^[a-z]+-[a-z]+$/);
  }
});

test("solo el perfil verificado expone una ficha ampliada", () => {
  const withProfile = TEAM_MEMBERS.filter((member) => member.profile).map(
    (member) => member.id,
  );

  assert.deepEqual(withProfile, ["gino-martinez"]);
});
