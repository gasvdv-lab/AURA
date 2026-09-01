from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]

required = [
    "README.md", "ROADMAP.md", "TESTING.md", "MODULES.md",
    "AURA_CONSTITUTION.md", "EXPERIMENTS.md",
    "docs/REALITIES.md", "docs/BIOSTRUCTURE.md", "docs/COGNITION.md",
    "docs/WORLD_LAWS.md", "docs/INTERNET_BOUNDARY.md",
    "docs/OBSERVATORY.md", "docs/GENESIS.md",
    "docs/SAFETY_BOUNDARY.md", "docs/RESEARCH_QUESTIONS.md"
]

errors = []
for rel in required:
    if not (ROOT / rel).is_file():
        errors.append(f"MISSING: {rel}")

def text(rel):
    p = ROOT / rel
    return p.read_text(encoding="utf-8") if p.exists() else ""

alltext = "\n".join(text(r) for r in required).lower()

checks = [
    ("physical sexless", "fysisch geslachtsloos" in alltext),
    ("autobiographic zero", "autobiografische" in alltext and ("= 0" in alltext or "op 0" in alltext)),
    ("android first", "android-first" in alltext),
    ("ios later", "ios" in alltext and ("later" in alltext or "uitgesteld" in alltext)),
    ("observatory invisible", "onzichtbaar voor aura" in alltext),
    ("human internet read-only", "human internet" in alltext and "read-only" in alltext),
    ("shutdown privileged", "shutdown" in alltext and "privileged" in alltext),
    ("identity not predetermined", "identiteit is niet" in alltext or "geen vooraf bepaalde identiteit" in alltext),
    ("world independent", "wereld" in alltext and "onafhankelijk" in alltext),
    ("zip release policy", "zip" in alltext),
    ("testing cumulative", "cumulatieve" in text("TESTING.md").lower()),
]

for name, ok in checks:
    if not ok:
        errors.append(f"FAILED RULE: {name}")

# Forbidden regressions in constitutional documents.
constitution_scope = "\n".join([
    text("AURA_CONSTITUTION.md"),
    text("docs/GENESIS.md"),
    text("docs/INTERNET_BOUNDARY.md"),
    text("docs/SAFETY_BOUNDARY.md"),
]).lower()

forbidden = [
    ("AURA physically male", "aura is fysisch mannelijk"),
    ("AURA physically female", "aura is fysisch vrouwelijk"),
    ("human internet write allowed", "human internet write authority: allowed"),
    ("AURA can shutdown itself", "shutdown_self"),
    ("Observatory may modify AURA", "observatory mag aura-state wijzigen"),
]
for name, token in forbidden:
    if token in constitution_scope:
        errors.append(f"FORBIDDEN REGRESSION: {name}")

if errors:
    print("AURA Phase 0 validation: FAIL")
    for e in errors:
        print(" -", e)
    sys.exit(1)

print("AURA Phase 0 validation: PASS")
print(f"Validated {len(required)} required documents and {len(checks)} core rules.")
