# Coding Activity 2.2 – Deploy Your Application

## Run locally
    npm start        # http://localhost:3000

## Option A: Heroku
1. `git init && git add . && git commit -m "Initial commit"`, push to a GitHub repo.
2. Heroku dashboard -> New -> Create new app.
3. Deploy tab -> Deployment method: GitHub -> connect your repo.
4. Click "Deploy Branch", then "Open App".
5. Screenshot the browser showing the app URL.

(The activity says node 14.x, but Heroku no longer supports it, so package.json uses 18.x. Change it if your course requires otherwise.)

## Option B: DigitalOcean Droplet
1. Create a DigitalOcean account and an Ubuntu Droplet.
2. `ssh root@YOUR_DROPLET_IP`
3. Open port 3001:  `ufw allow 22 && ufw allow 3001 && ufw enable`
4. Install Node: `apt update && apt install -y nodejs npm`
5. Create the app at root level:  `mkdir /myapp && cd /myapp && npm init -y`
6. Copy http_server.js there (`scp http_server.js root@YOUR_DROPLET_IP:/myapp/`).
7. Run: `PORT=3001 node http_server.js`
8. Visit `http://YOUR_DROPLET_IP:3001` and screenshot it showing the IP address.
