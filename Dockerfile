FROM nginx

COPY . /usr/share/nginx/html
COPY /prod/nginx.conf /etc/nginx/conf.d/default.conf

RUN  apt-get update \ 
      && apt-get install -y cron certbot python-certbot-nginx bash wget
      #&& certbot certonly --standalone --agree-tos -m "reizaarmando@gmail.com" -n -d akhmadreiza.com,www.akhmadreiza.com
      #&& certbot certonly --webroot --webroot-path=/usr/share/nginx/html --agree-tos -m "reizaarmando@gmail.com" -n --staging -d akhmadreiza.com,www.akhmadreiza.com
      #&& certbot certonly --webroot --webroot-path=/usr/share/nginx/html --agree-tos -m "reizaarmando@gmail.com" -n --force-renewal -d akhmadreiza.com,www.akhmadreiza.com

VOLUME /etc/letsencrypt