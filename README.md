**Install environment and star Morra game**

Reach requires WSL 2 and Docker Desktop to be installed.

**Install Powershell on next link:**
https://github.com/PowerShell/PowerShell/releases/download/v7.2.7/PowerShell-7.2.7-win-x64.msi

Click the Windows icon, type Powershell, and then click Run as Administrator. Enable WSL and VM:

$ dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
$ dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
$ shutdown -r -t 0

**Install WSL and Ubuntu**

$ cd c:\; mkdir downloads; cd c:\downloads; wget -uri https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi -outfile .\wsl_update_x64.msi; .\wsl_update_x64.msi
$ wsl --set-default-version 2
$ wsl --install -d Ubuntu

**Install and configuring Docker**

$ cd c:\downloads;wget -uri https://github.com/microsoft/winget-cli/releases/download/v1.3.431/Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle -outfile .\winget.msixbundle; .\winget.msixbundle
$ winget install docker.dockerdesktop
$ shutdown -r -t 0

Click on settings => Use Docker Composer V2
Click on resource on the left-hand menu ON Ubuntu 20.04

Start Powershell on + click and start Ubuntu - 20.04

**Install Reach**

$ sudo apt install make curl
$ mkdir -p ~/reach && cd ~/reach
$ curl https://docs.reach.sh/reach -o reach ; chmod +x reach
$ ./reach version

**Install Visual Studio Code**
https://code.visualstudio.com/
https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user 

**Create reach project**

aleksa@DESKTOP-UTUNMH2::~/reach/$ mkdir  morra

aleksa@DESKTOP-UTUNMH2::~/reach/$ cd morra

aleksa@DESKTOP-UTUNMH2::~/reach/morra$code .

**Opening VisualStudioCode**

Create files in morraGame:
index.rsh
index.js
index.css
Create folder - views and files in:
render.js
AppViews.js
DeployerViews.js
AttacherViews.js
PlayerViews.js

On terminal start program with ./reach react
