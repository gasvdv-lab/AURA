$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$destination = Join-Path $root 'AURA_v0.9.1.1_Guided_Testing_Relay_Fix.zip'
$excluded = @('.git','sources','AGENTS.md','AURA_v0.2.0_World_Kernel.zip','AURA_v0.3.0_Embodiment_Kernel.zip','AURA_v0.4.0_Sensorimotor_Development.zip','AURA_v0.5.0_Perception_Kernel.zip','AURA_v0.6.0_Memory_Kernel.zip','AURA_v0.6.1_Memory_Flow_Fix.zip','AURA_v0.7.0_Belief_Hypothesis_Kernel.zip','AURA_v0.8.0_Foundation_Model_Bridge.zip','AURA_v0.8.1_Bedieningsfix_Gemini_Groq.zip','AURA_v0.8.2_Reasoning_Policy.zip','AURA_v0.8.3_Capability_Knowledge_Provenance.zip','AURA_v0.8.4_Controlled_Learning_Workflow.zip','AURA_v0.8.5_Generalization_Leakage_Lab.zip','AURA_v0.8.5.1_Evaluation_Flow_Research_UI.zip','AURA_v0.8.6_Capability_Origin_Learning_Boundary.zip','AURA_v0.8.7_Native_Skill_Learning.zip','AURA_v0.8.8_Native_Skill_Validation_Robustness.zip','AURA_v0.9.0_Attention_Kernel.zip','AURA_v0.9.1_Guided_Testing_UI.zip','AURA_v0.9.1.1_Guided_Testing_Relay_Fix.zip')
$items = Get-ChildItem -LiteralPath $root -Force | Where-Object { $_.Name -notin $excluded }
Compress-Archive -LiteralPath $items.FullName -DestinationPath $destination -CompressionLevel Optimal -Force
Write-Output $destination
