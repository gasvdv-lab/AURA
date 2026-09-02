$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$destination = Join-Path $root 'AURA_v0.6.0_Memory_Kernel.zip'
$items = Get-ChildItem -LiteralPath $root -Force | Where-Object { $_.Name -notin @('.git', 'sources', 'AGENTS.md', 'AURA_v0.2.0_World_Kernel.zip', 'AURA_v0.3.0_Embodiment_Kernel.zip', 'AURA_v0.4.0_Sensorimotor_Development.zip', 'AURA_v0.5.0_Perception_Kernel.zip', 'AURA_v0.6.0_Memory_Kernel.zip') }
Compress-Archive -LiteralPath $items.FullName -DestinationPath $destination -CompressionLevel Optimal -Force
Write-Output $destination
