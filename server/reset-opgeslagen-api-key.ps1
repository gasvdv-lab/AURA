$ErrorActionPreference = 'Stop'
$sleutelmap = Join-Path $env:LOCALAPPDATA 'AURA'
if (Test-Path -LiteralPath $sleutelmap) {
  Remove-Item -LiteralPath (Join-Path $sleutelmap 'gemini.key') -Force -ErrorAction SilentlyContinue
  Remove-Item -LiteralPath (Join-Path $sleutelmap 'groq.key') -Force -ErrorAction SilentlyContinue
  Remove-Item -LiteralPath (Join-Path $sleutelmap 'provider.txt') -Force -ErrorAction SilentlyContinue
}
Write-Host 'De lokaal opgeslagen AURA API-sleutel is verwijderd.' -ForegroundColor Green
