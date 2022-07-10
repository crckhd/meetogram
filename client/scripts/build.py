#!/usr/bin/env python3

# Импортируем OS для работы с файлами
import os

# Импортируем метод для удаления директорий
from shutil import rmtree

# Текущая директория
cwd = os.getcwd()

# Путь к директории со сборками
DIST_PATH = '/dist'

def removeDir(path):

    # Пробуем удалить директорию
    try:
        rmtree(path)
        print("Directory removed successfully")

    # Если путь не является директорией
    except NotADirectoryError:
        print("Specified path is not a directory.")

    # Если файла/директории по указанному пути не существует
    except FileNotFoundError:
        print("Specified directory didn't exist.")
      
    # Если нет прав на удаление
    except PermissionError:
        print("Permission denied.")
      
    # Для других ошибок
    except Exception as error:
        print(error)
        print("Directory can not be removed")

def build(path):
    os.system('yarn parcel build ' + path)

# Если мы запустили файлик, а не импортировали его
if __name__ == '__main__':

    # Собираем путь до старого DIST
    OLD_DIST = cwd + DIST_PATH

    # Удаляем старую директорию
    removeDir(OLD_DIST)

    # Путь для всех входных точек в проекте
    ALL_ENTRIES = cwd + '/public/*.html'

    # Собираем новый билд
    build(ALL_ENTRIES)
