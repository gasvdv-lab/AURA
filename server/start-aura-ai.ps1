$ErrorActionPreference = 'Stop'
Write-Host 'AURA v0.8.1 - eenvoudige AI-starter' -ForegroundColor Cyan
Write-Host 'Je sleutel wordt alleen tijdelijk gebruikt en niet opgeslagen.'
$keuze = Read-Host 'Typ 1 voor Gemini of 2 voor Groq'
$veilig = Read-Host 'Plak nu je API-sleutel' -AsSecureString
$ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($veilig)
try {
  $sleutel = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
  if ($keuze -eq '2') { $env:GROQ_API_KEY = $sleutel } else { $env:GEMINI_API_KEY = $sleutel }
  $env:AURA_ORIGIN = Read-Host 'Druk Enter als Live Server http://127.0.0.1:5500 gebruikt'
  if ([string]::IsNullOrWhiteSpace($env:AURA_ORIGIN)) { $env:AURA_ORIGIN = 'http://127.0.0.1:5500' }
  Write-Host 'Gestart. Laat dit venster open zolang je AURA gebruikt.' -ForegroundColor Green
  node (Join-Path $PSScriptRoot 'relay-example.mjs')
} finally {
  [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
  $sleutel = $null
  Remove-Item Env:GEMINI_API_KEY -ErrorAction SilentlyContinue
  Remove-Item Env:GROQ_API_KEY -ErrorAction SilentlyContinue
}
