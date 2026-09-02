$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$destination = Join-Path $root 'AURA_v0.8.0_Foundation_Model_Bridge.zip'
$items = Get-ChildItem -LiteralPath $root -Force | Where-Object { $_.Name -notin @('.git', 'sources', 'AGENTS.md', 'AURA_v0.2.0_World_Kernel.zip', 'AURA_v0.3.0_Embodiment_Kernel.zip', 'AURA_v0.4.0_Sensorimotor_Development.zip', 'AURA_v0.5.0_Perception_Kernel.zip', 'AURA_v0.6.0_Memory_Kernel.zip', 'AURA_v0.6.1_Memory_Flow_Fix.zip', 'AURA_v0.7.0_Belief_Hypothesis_Kernel.zip', 'AURA_v0.8.0_Foundation_Model_Bridge.zip') }
Compress-Archive -LiteralPath $items.FullName -DestinationPath $destination -CompressionLevel Optimal -Force
Write-Output $destination
