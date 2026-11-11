import test from "node:test";
import assert from "node:assert/strict";

import { NEXT_ITERATIONS, OBJECTIVES } from "../lib/content/objectives.ts";

test("los objetivos de la entrega están todos cumplidos", () => {
  assert.ok(OBJECTIVES.length >= 4);

  for (const objective of OBJECTIVES) {
    assert.equal(objective.status, "cumplido", `${objective.title} no está cumplido`);
  }
});

test("los objetivos tienen identificadores únicos y contenido completo", () => {
  const ids = OBJECTIVES.map((objective) => objective.id);
  assert.equal(new Set(ids).size, OBJECTIVES.length);

  for (const objective of OBJECTIVES) {
    assert.ok(objective.tag.trim().length > 0);
    assert.ok(objective.title.trim().length > 0);
    assert.ok(objective.description.trim().length > 0);
  }
});

test("las próximas iteraciones no incluyen el reel ya publicado", () => {
  assert.ok(NEXT_ITERATIONS.length > 0);

  for (const step of NEXT_ITERATIONS) {
    assert.notEqual(step.tag, "Video");
    assert.notEqual(step.tag, "Reel");
    assert.ok(step.text.trim().length > 0);
  }
});