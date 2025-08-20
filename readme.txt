Exercice 2 – Alléger les images d’une page
Par groupe de 2 :

1. Vous est fournit une page HTML contenant plusieurs images non optimisées (images trop grandes, formats inadaptés).

2. Identifiez pour chaque image ce qui peut être amélioré :

   - Format (JPEG/PNG/SVG/WebP ?)

   - Dimensions (taille affichée vs taille fichier)

   - Compression (qualité trop haute ?)

3. Utilisez les outils de votre choix pour créer des versions optimisées de ces images :

   - Redimensionnez-les à la bonne résolution.

   - Exportez-les au format adéquat (ex: convertissez une photo PNG en JPEG).

   - Réduisez la qualité si possible (JPEG qualité ~80% par exemple).

4. Remplacez les images dans le code HTML par vos versions optimisées. N’oubliez pas l’attribut alt s’il manque.

5. Ajoutez `loading="lazy"` aux images qui peuvent être chargées plus tard (celles qui ne sont pas visibles immédiatement).

6. Testez la page en local : ouvrez-la dans le navigateur et vérifiez que visuellement tout va bien.

7. Comparez le poids total de la page avant/après (DevTools > Network). De combien avez-vous réduit le poids ?
 
Before:
 32 requests
5.6 MB transferred
5.9 MB resources
Finish: 10.67 s
DOMContentLoaded: 159 ms
Load: 10.65 

After
24 requests
409 kB transferred
446 kB resources
Finish: 1.49 s