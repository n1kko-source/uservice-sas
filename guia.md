## 1. Inicializa el repositorio local

git init

## 2. Vincula tu carpeta local con tu repositorio de GitHub

git remote add origin [https://github.com/n1kko-source/uservice-tech-showcase.git](https://github.com/n1kko-source/uservice-tech-showcase.git)

## 3. Agrega todos los archivos al área de preparación

git add .

## 4. Crea tu primer commit (guardado local)

git commit -m "Modificación Hero 3D Movimiento con Seguimiento Mouse - Optimización de la Web"

## 5. Asegúrate de estar en la rama principal (main)

git branch -M main

## 6. Sube los cambios a GitHub

git push -u origin main

# Guía: actualizar tu repositorio local desde GitHub

Abre una terminal (PowerShell o Git Bash).
Ve a la carpeta del proyecto:
cd "d:\Partición_2\2026-1\UService\página_web\uservice-tech-showcase"

## Paso 1: Ver el estado actual

git status
Si hay archivos modificados sin guardar en Git, decide si los quieres conservar antes de actualizar.
Si todo está limpio (nothing to commit, working tree clean), puedes continuar sin problema.

## Paso 2: Confirmar que el remoto está configurado

git remote -v
Deberías ver algo como:

origin  [https://github.com/n1kko-source/uservice-tech-showcase.git](https://github.com/n1kko-source/uservice-tech-showcase.git) (fetch)
origin  [https://github.com/n1kko-source/uservice-tech-showcase.git](https://github.com/n1kko-source/uservice-tech-showcase.git) (push)
Si no aparece origin, añádelo:

git remote add origin [https://github.com/n1kko-source/uservice-tech-showcase.git](https://github.com/n1kko-source/uservice-tech-showcase.git)

## Paso 3: Ir a la rama principal

git checkout main
Si tu rama se llama master:

git checkout master

## Paso 4: Descargar los cambios de GitHub (sin aplicarlos aún)

git fetch origin
Esto descarga commits, ramas y etiquetas del remoto, pero no modifica tus archivos todavía.

## Paso 5: Ver qué hay de nuevo en GitHub

git log HEAD..origin/main --oneline
(Sustituye main por master si aplica.)

Si no sale nada, tu repo local ya está al día.
Si aparecen commits, GitHub tiene cambios que aún no tienes.

## Paso 6: Integrar los cambios en tu copia local

Opción recomendada (historial lineal):

git pull origin main
Equivale a git fetch + git merge.

Alternativa con rebase (historial más limpio):

git pull --rebase origin main

## Paso 7: Verificar que todo quedó bien

git status
git log -5 --oneline
Deberías ver algo como:

Your branch is up to date with 'origin/main'.  
  
  
  
Agentes configurados

Agente	Modelo	Uso

build (default)	gemini-2.5-pro	        Editar código, ejecutar comandos

plan	gemini-2.5-pro	                Solo planificar, sin editar

general	gemini-2.5-flash	            Tareas rápidas

explore	gemini-2.5-flash	            Explorar códigobase