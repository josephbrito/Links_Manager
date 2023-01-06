## Link manage build with Python3 + Django + React

![ezgif com-gif-maker](https://user-images.githubusercontent.com/84200694/210902594-24d57969-9c53-4d56-b3c3-694b5a19cddd.gif)

# Get started:

- First install a virtual eviroment `pipenv` with `pip install pipenv`
- And activate a new virtual environment with `pipenv shell`

## Run Django:

- `python manage.py migrate` and `python manage.py makemigration`

- `pipenv install djangorestframework django-cors-headers`

```python
INSTALLED_APPS = [
    'todo.apps.TodoConfig',
    # 'django.contrib.admin',
    # 'django.contrib.auth',
    # 'django.contrib.contenttypes',
    # 'django.contrib.sessions',
    # 'django.contrib.messages',
    # 'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # 'django.middleware.security.SecurityMiddleware',
    # 'django.contrib.sessions.middleware.SessionMiddleware',
    # 'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    # 'django.contrib.auth.middleware.AuthenticationMiddleware',
    # 'django.contrib.messages.middleware.MessageMiddleware',
    # 'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

#### Add these lines in your `settings.py`, then run:

```bash
python manage.py runserver

```

### Go to frontend folder:

- `cd frontend`

### And install all dependencies:

- `npm i` or `yarn install`

### Run:

- `npm start` or `yarn start`
