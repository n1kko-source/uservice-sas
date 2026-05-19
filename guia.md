# 1. Inicializa el repositorio local
git init

# 2. Vincula tu carpeta local con tu repositorio de GitHub
git remote add origin https://github.com/n1kko-source/uservice-tech-showcase.git

# 3. Agrega todos los archivos al área de preparación
git add .

# 4. Crea tu primer commit (guardado local)
git commit -m "ABCD26-6 feat: métricas de uptime 30 días y footer institucional HSR"

# 5. Asegúrate de estar en la rama principal (main)
git branch -M main

# 6. Sube los cambios a GitHub
git push -u origin main