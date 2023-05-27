FROM nginx:1.23.3

RUN rm -r /usr/share/nginx/html/*

COPY build /usr/share/nginx/html

CMD nginx -g 'daemon off;'