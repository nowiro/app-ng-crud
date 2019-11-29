Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

#https://chocolatey.org/packages

choco feature enable -n allowGlobalConfirmation

choco upgrade all

choco install wsl-ubuntu-1804