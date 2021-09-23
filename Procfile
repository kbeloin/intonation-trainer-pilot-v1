release: python manage.py migrate
web: gunicorn server.wsgi --log-file
python manage.py collectstatic --noinput;