$ErrorActionPreference = 'Stop'
Write-Host 'AURA v0.9.0 - eenvoudige AI-starter' -ForegroundColor Cyan
$sleutelmap = Join-Path $env:LOCALAPPDATA 'AURA'
$providerbestand = Join-Path $sleutelmap 'provider.txt'
New-Item -ItemType Directory -Path $sleutelmap -Force | Out-Null

if (Test-Path -LiteralPath $providerbestand) {
  $provider = (Get-Content -LiteralPath $providerbestand -Raw).Trim().ToLowerInvariant()
} else {
  $keuze = Read-Host 'Typ 1 voor Gemini of 2 voor Groq'
  $provider = if ($keuze -eq '2') { 'groq' } else { 'gemini' }
  Set-Content -LiteralPath $providerbestand -Value $provider -NoNewline -Encoding UTF8
}
if ($provider -notin @('gemini','groq')) { throw 'Ongeldige opgeslagen provider. Voer reset-opgeslagen-api-key.cmd uit.' }

$sleutelbestand = Join-Path $sleutelmap "$provider.key"
if (Test-Path -LiteralPath $sleutelbestand) {
  Write-Host "De versleutelde sleutel wordt automatisch geladen uit $sleutelbestand" -ForegroundColor Green
  $veilig = (Get-Content -LiteralPath $sleutelbestand -Raw).Trim() | ConvertTo-SecureString
} else {
  $veilig = Read-Host "Plak eenmalig je $provider API-sleutel" -AsSecureString
  $veilig | ConvertFrom-SecureString | Set-Content -LiteralPath $sleutelbestand -NoNewline -Encoding UTF8
  Write-Host "De sleutel is versleuteld opgeslagen in $sleutelbestand" -ForegroundColor Green
}

$ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($veilig)
try {
  $sleutel = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
  if ([string]::IsNullOrWhiteSpace($sleutel)) { throw 'De opgeslagen API-sleutel is leeg.' }
  if ($provider -eq 'groq') { $env:GROQ_API_KEY = $sleutel } else { $env:GEMINI_API_KEY = $sleutel }
  $env:AURA_ORIGIN = Read-Host 'Druk Enter als Live Server http://127.0.0.1:5500 gebruikt'
  if ([string]::IsNullOrWhiteSpace($env:AURA_ORIGIN)) { $env:AURA_ORIGIN = 'http://127.0.0.1:5500' }
  Write-Host "AURA gebruikt $provider. Laat dit venster open." -ForegroundColor Green
  node (Join-Path $PSScriptRoot 'relay-example.mjs')
} finally {
  [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
  $sleutel = $null
  Remove-Item Env:GEMINI_API_KEY -ErrorAction SilentlyContinue
  Remove-Item Env:GROQ_API_KEY -ErrorAction SilentlyContinue
}
