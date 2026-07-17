# Yaka Energies — site web

Site vitrine statique (HTML / CSS / JS, aucun framework, aucune dépendance à
installer) prêt à héberger gratuitement sur **GitHub Pages** et à relier à un
domaine acheté chez **IONOS**.

## Contenu du dossier

```
index.html      → la page (contenu, structure)
styles.css      → tous les styles
script.js       → menu mobile, formulaire de contact, année du footer
CNAME           → nom de domaine personnalisé pour GitHub Pages
README.md       → ce fichier
```

## 1. Mettre le site sur GitHub

1. Créez un compte GitHub si vous n'en avez pas : https://github.com
2. Créez un nouveau dépôt (bouton **New repository**), par exemple nommé
   `yaka-energies`. Laissez-le **public** (nécessaire pour GitHub Pages gratuit).
3. Sur votre ordinateur, dans le dossier contenant ces fichiers :

```bash
git init
git add .
git commit -m "Site Yaka Energies"
git branch -M main
git remote add origin https://github.com/VOTRE-UTILISATEUR/yaka-energies.git
git push -u origin main
```

(Vous pouvez aussi glisser-déposer les fichiers directement sur la page du
dépôt via l'interface web de GitHub, sans utiliser de ligne de commande.)

## 2. Activer GitHub Pages

1. Dans le dépôt GitHub → **Settings** → **Pages**.
2. Sous **Build and deployment** → **Source**, choisissez **Deploy from a branch**.
3. Branch : `main`, dossier : `/ (root)`. Cliquez **Save**.
4. GitHub vous donne une URL du type `https://VOTRE-UTILISATEUR.github.io/yaka-energies/`.
   Vérifiez que le site s'affiche correctement avant de continuer.

## 3. Modifier le fichier CNAME

Ouvrez le fichier `CNAME` et remplacez `votre-domaine.com` par votre vrai nom
de domaine (par exemple `yaka-energies.com`), sans `http://` ni `www.` :

```
yaka-energies.com
```

Commitez et poussez ce changement.

Dans **Settings → Pages**, le champ **Custom domain** doit afficher ce même
domaine (GitHub le détecte automatiquement à partir du fichier CNAME, ou vous
pouvez le saisir manuellement puis cliquer **Save**).

## 4. Configurer le domaine chez IONOS

Dans votre espace client IONOS → **Domaines & SSL** → sélectionnez votre
domaine → **DNS**.

**Pour un domaine racine (`yaka-energies.com`)** — ajoutez 4 enregissements A
pointant vers les serveurs de GitHub Pages :

| Type | Nom | Valeur          |
|------|-----|-----------------|
| A    | @   | 185.199.108.153 |
| A    | @   | 185.199.109.153 |
| A    | @   | 185.199.110.153 |
| A    | @   | 185.199.111.153 |

**Pour le sous-domaine `www`** — ajoutez un enregistrement CNAME :

| Type  | Nom | Valeur                          |
|-------|-----|----------------------------------|
| CNAME | www | VOTRE-UTILISATEUR.github.io.     |

Supprimez les enregistrements A ou CNAME "par défaut" d'IONOS (souvent liés à
une page de parking) qui entreraient en conflit sur `@` ou `www`.

La propagation DNS peut prendre de quelques minutes à 24-48h.

## 5. Activer le HTTPS

Une fois le DNS propagé, retournez dans **Settings → Pages** sur GitHub :
cochez **Enforce HTTPS** (l'option apparaît dès que GitHub a validé le
certificat pour votre domaine — cela peut prendre jusqu'à quelques heures).

## À personnaliser avant mise en ligne

- `index.html` : adresse email, téléphone et zone d'intervention réels
  (section `#contact`), actuellement en placeholders.
- `script.js` : l'adresse `contact@yaka-energies.com` utilisée par le
  formulaire (à faire correspondre à votre vraie adresse).
- `CNAME` : votre nom de domaine réel.
- Le texte de présentation du fondateur peut être ajusté ou raccourci selon
  vos préférences.
